import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
