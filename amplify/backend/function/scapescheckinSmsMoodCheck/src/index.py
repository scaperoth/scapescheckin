import os
import boto3
from boto3.dynamodb.conditions import Key
from datetime import datetime, timedelta

pinpoint = boto3.client('pinpoint')
cognito = boto3.client('cognito-idp')
dynamodb = boto3.resource('dynamodb')
    
def uniqueResponse(values, key):
    return list(set([row[key] for row in values]))
    
def runQuery(table, args):
    done = False
    start_key = None
    response = []
    while not done:
        if start_key:
            args['ExclusiveStartKey'] = start_key
        response = table.scan(**args)
        start_key = response.get('LastEvaluatedKey', None)
        done = start_key is None
    
    return uniqueResponse(response['Items'], 'owner')

def getUsersFromPastNHours(hours = 24):
    lastDateTime = datetime.now() - timedelta(hours = hours)
    lastDateTimeISO = lastDateTime.isoformat() + 'Z'
    
    table = dynamodb.Table('DailyEntry-iboxbidxdvddtgu6m2ct6ngwnq-dev')
    scan_kwargs = {
        'FilterExpression': Key('createdAt').gt(lastDateTimeISO),
        'ProjectionExpression': "#own",
        'ExpressionAttributeNames': {"#own": "owner"}
    }
    
    return runQuery(table, scan_kwargs)
    
def getUsersNotInList(userList):
    table = dynamodb.Table('DailyEntry-iboxbidxdvddtgu6m2ct6ngwnq-dev')
    scan_kwargs = {
        'FilterExpression': 'NOT #own in (:userlist)',
        'ProjectionExpression': "#own",
        'ExpressionAttributeNames': { "#own": "owner" },
        'ExpressionAttributeValues' : {
            ":userlist" : ','.join(userList)
        }
    }
    
    return runQuery(table, scan_kwargs)

def handler(event, context):
    
    userList = getUsersFromPastNHours(24)
    usersToAlert = getUsersNotInList(userList)
    
    message="Hey there. This is scapes checking-in. We haven't heard from you in 24 hours. You should log in to the scapes check-in app and add how you're feeling"
    username=""
    try:
        user = cognito.admin_get_user(
            UserPoolId=os.env['COGNITO_USER_POOL_ID'],
            Username=username
        )
    except cognito.exceptions.UserNotFoundException as e:
         return {
            "error": "User '"+username+"' not found"
        }
    except cognito.exceptions.InvalidParameterException as e:
         return {
            "error": "User '"+username+"' is not valid"
        }
    
    phone = ""
    
    for attr in user['UserAttributes']:
        if attr['Name'] == "phone_number":
            phone = attr['Value']
    
    
    pinpoint.send_messages(
        ApplicationId=os.env['PINPOINT_APPLICATION_ID'],
        MessageRequest={
            'Addresses': {
                phone: {'ChannelType': 'SMS'}
            },
            'MessageConfiguration': {
                'SMSMessage': {
                    'Body': message,
                    'MessageType': 'PROMOTIONAL'
                }
            }
        }
    )
    
    return {
        status: 200
    }