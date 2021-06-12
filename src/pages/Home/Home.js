import React, { useEffect, useState } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native/dist/Auth';
import { AmplifyTheme } from 'aws-amplify-react-native';

import NewDailyEntry from '../../components/DailyEntry/New';
import SignOut from '../../functions/User/SignOut';
import { listDailyEntrys } from '../../graphql/queries';
import { getPastTimestamp } from '../../functions/Date/Timestamps'
import DailyEntryToday from '../../components/DailyEntry/Today';

const Home = () => {
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
            between: [getPastTimestamp(1), getPastTimestamp()]
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
      <View style={styles.navbar}>
        <Text style={styles.title}>Scapes Check-In</Text>
        <Button style={styles.signoutButton} title="Sign Out" onPress={SignOut}/>
      </View>
      <View style={styles.mainContent}>
          {showTodaysEntry == false && <NewDailyEntry style={{flex: 1}}/>}
          {showTodaysEntry == true  && <DailyEntryToday todaysEntry={todaysEntry}/>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flex: .3,
    display: 'flex',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  topMessage: {
    flex: 1,
    backgroundColor: '#fff'
  },
  mainContent: {
    flex: 3,
    backgroundColor: '#f0f0f0'
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
