import React from 'react';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';

import {Link} from '../../router/react-router';
import SignOut from '../../functions/User/SignOut';
import WavyHeader from '../WavyHeader';

const Navigation = ({pageName, back}) => {

  return (
    <View style={styles.navbar}>
        <View style={styles.headerContainer}>
          {back && <Link to={'/'}>{'<-'}</Link>}
          <Text style={styles.title}>{pageName}</Text>
          <Button style={styles.signoutButton} title="Sign Out" onPress={SignOut}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    display: 'flex',
  },
  svgCurve: {
    position: 'absolute',
    width: '100%',
    top: 0,
  },
  headerContainer: {
    marginTop: 35,
    padding: 20,
    paddingBottom: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    flexGrow: 1,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#444'
  },
  signoutButton: {
    elevation: 5,
    backgroundColor: 'black',
    color: 'white'
  }
});

export default Navigation;