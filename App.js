import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import DashboardContainer from './src/Container/DashboardContainer';
import ViewContainer from "./src/Container/ViewContainer";
import Navigation from "./src/Container/Navigation";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Navigation/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
