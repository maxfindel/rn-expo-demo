import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

export class Sample extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Sample screen!</Text>
        <Button onPress={() => console.log('!')}>
          Press me!
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Sample;
