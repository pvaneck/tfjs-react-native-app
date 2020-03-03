import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';


interface AppState {
  isTfReady: boolean;
  isModelReady: boolean;
}


export class App extends React.Component<{}, AppState> {
  model: {};

  constructor(props) {
    super(props);
    this.state = {
      isTfReady: false,
      isModelReady: false
    };
  }

  async componentDidMount() {
    // Wait for tf to be ready.
    await tf.ready();
    this.setState({
      isTfReady: true,
    });
    this.model = await this.loadModel();
    this.setState({ isModelReady: true });
  }

  loadModel = async () => {
    // TODO: Figure out loading from local filesystem.
    return {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Is TF.js ready? {this.state.isTfReady ? <Text>Yes!</Text> : ''}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
