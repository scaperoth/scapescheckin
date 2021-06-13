import os
import boto3

pinpoint = boto3.client('pinpoint')
cognito = boto3.client('cognito-idp')

def handler(event, context):
    
    
    message="Hey there. This is scapes checking-in. We haven't heard from you in 24 hours. You should log in to the scapes check-in app and add how you're feeling"
    username=""
    try:
        user = cognito.admin_get_user(
            UserPoolId=os.env['PINPOINT_APPLICATION_ID'],
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