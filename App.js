import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Auth from "./src/routes/Auth";

export default function App() {
  return (
    <View style={styles.container}>
      <Auth/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20222B'
  },
});
