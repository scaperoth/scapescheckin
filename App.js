import React from 'react';
import { AmplifyTheme } from 'aws-amplify-react-native'
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
import { View, StyleSheet } from 'react-native';
import Router from './src/router';
import Home from './src/pages/Home';
Amplify.configure(config)

const App = () => {
  return (
    <View style={styles.container}>
      <Router/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;