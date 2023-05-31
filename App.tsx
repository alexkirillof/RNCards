import React from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import FlatCards from './src/components/FlatCards';
import ElevatedCards from './src/components/ElevatedCards';
import FansyCard from './src/components/FansyCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FansyCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    backgroundColor: '#9DB1CC',
  },
});
