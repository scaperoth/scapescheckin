import React, { useEffect, useState } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native/dist/Auth';
import { AmplifyTheme } from 'aws-amplify-react-native';

import SignOut from '../../functions/User/SignOut';
import { listDailyEntrys } from '../../graphql/queries';
import { getPastTimestamp } from '../../functions/Date/Timestamps'
import DailyEntryToday from '../../components/DailyEntry/Today';
import { Link } from '../../router/react-router';
import Navigation from '../../components/Navigation/Navigation';

const Home = ({match}) => {
  const [todaysEntry, setTodaysEntry] = useState(null)
  const [showTodaysEntry, setShowTodaysEntry] = useState(null)

  useEffect(() => {
    fetchTodaysEntry()
  }, [])

  async function fetchTodaysEntry() {
    try {
      const dailyEntryData = await API.graphql(graphqlOperation(listDailyEntrys, {
        filter: {
          createdAt: {
            between: [getPastTimestamp(24), getPastTimestamp()]
          }
        }

      }))
      const todaysEntry = dailyEntryData.data.listDailyEntrys.items
      console.log('todaysEntry', todaysEntry)
      if (todaysEntry.length > 0) {
        setTodaysEntry(todaysEntry[0])
        setShowTodaysEntry(true);
      }else{
        setTodaysEntry(-1)
        setShowTodaysEntry(false);
      }
    } catch (err) {
      setTodaysEntry(null)
      console.log('error fetching todaysEntry', err)
    }
  }

  return (
    <View style={styles.container}>
      <Navigation pageName={'Home'}/>
      <View style={styles.mainContent}>
          {showTodaysEntry == false && <View>
            <Text>
            There is no entry for today :-(. If you'd like to create one now, click 
            </Text>
              <Link to={'/dailyEntry/new'}><Text>Here</Text></Link>
            </View>}
          {showTodaysEntry == true  && <DailyEntryToday todaysEntry={todaysEntry}/>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 3,
    padding: 20
  },
  title: {
    flexGrow: 1,
    fontSize: 25,
    fontWeight: 'bold'
  },
  topMessage: {
    flex: 1,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 30,
    fontSize: 30,
    textAlign: 'center'
  },
});

export default withAuthenticator(Home, {
  signUpConfig: {
    hiddenDefaults: ['phone_number'],
  },
  theme: {
    ...AmplifyTheme,
    container: {
      ...AmplifyTheme.container,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      ...Platform.select({
        web: {
          height: '100vh',
          flexGrow: 1,
          marginTop: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
          width: 600,
        }
      })
    },
  }
});
