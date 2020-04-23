import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

export function Home({ navigation }){
  return (
    <View style={styles.container}>
      <Text>Home screen!</Text>
      <Button onPress={() => navigation.navigate('Schedule', { name: 'Jane' })}>
        Press me to go to schedule!
      </Button>
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

export default Home;
