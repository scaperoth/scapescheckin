import React from 'react';
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
import { View, StyleSheet } from 'react-native';
import Router from './src/router';
import WavyFooter from './src/components/WavyFooter';
Amplify.configure(config)

const App = () => {
  return (
    <View style={styles.container}>
      <Router/>
      <WavyFooter customStyles={styles.footerStyles}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footerStyles: {
    marginBottom: -40
  }
});

export default App;