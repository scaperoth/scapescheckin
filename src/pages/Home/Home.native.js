import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import NewMood from '../../components/Mood/New';
import SignOut from '../../functions/User/SignOut';
import { withAuthenticator } from 'aws-amplify-react-native/dist/Auth';
import { AmplifyTheme } from 'aws-amplify-react-native';

const Home = () => {
  return (
      <SafeAreaView style={styles.container}>
          <Text style={styles.header}>Open up App.js to start working on your app!</Text>
          <NewMood style={{flex: 2}}/>
          <Button title="Sign Out" onPress={SignOut}/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 90,
    flexDirection: 'column'
  },
  header: {
    paddingTop: 50,
    paddingBottom: 30,
    fontSize: 30,
    textAlign: 'center'
  }
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
