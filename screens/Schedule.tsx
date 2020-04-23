import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

export function Schedule({ navigation, route }){
  const { name } = route.params || { name: "default" };
  return (
    <View style={styles.container}>
      <Text>Schedule screen!</Text>
      <Button onPress={() => navigation.navigate('Home')}>
        Press me to go home {name}!
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

export default Schedule;
