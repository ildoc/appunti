import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCR3QixmbARr5BQdhVN_cOkVWQLv10etCY',
      authDomain: 'manager-c6e40.firebaseapp.com',
      databaseURL: 'https://manager-c6e40.firebaseio.com',
      projectId: 'manager-c6e40',
      storageBucket: '',
      messagingSenderId: '857716488980'
    };
    firebase.initializeApp(config);

  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            hello
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
