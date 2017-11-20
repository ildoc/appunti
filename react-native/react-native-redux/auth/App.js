import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './src/component/common';
import LoginForm from './src/component/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBd9QNdrlgKlTCj2_xtgfC7G5tSdAb9HgY',
      authDomain: 'auth-a9a44.firebaseapp.com',
      databaseURL: 'https://auth-a9a44.firebaseio.com',
      projectId: 'auth-a9a44',
      storageBucket: 'auth-a9a44.appspot.com',
      messagingSenderId: '156644362918'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log out
        </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
