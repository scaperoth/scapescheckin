import React from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native/dist/Auth';
import { AmplifyTheme } from 'aws-amplify-react-native';
import {Link} from '../../router/react-router'

import NewDailyEntryForm from '../../components/DailyEntry/New';
import Navigation from '../../components/Navigation';

const NewDailyEntry = () => {

  return (
    <View style={styles.container}>
      <Navigaion pageName={'New Entry'} back={'/'} />
      <View style={styles.mainContent}>
          <NewDailyEntryForm />
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
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    flexGrow: 1,
    textAlign: 'center'
  },
  topMessage: {
    flex: 1,
    backgroundColor: '#fff'
  },
  mainContent: {
    flex: 3,
    backgroundColor: '#fff'
  },
  header: {
    paddingTop: 50,
    paddingBottom: 30,
    fontSize: 30,
    textAlign: 'center'
  },
});

export default withAuthenticator(NewDailyEntry, {
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
