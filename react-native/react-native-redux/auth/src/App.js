import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './component/common';
import { LoginForm } from './component/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBd9QNdrlgKlTCj2_xtgfC7G5tSdAb9HgY',
            authDomain: 'auth-a9a44.firebaseapp.com',
            databaseURL: 'https://auth-a9a44.firebaseio.com',
            projectId: 'auth-a9a44',
            storageBucket: 'auth-a9a44.appspot.com',
            messagingSenderId: '156644362918'
        }
        );
    }

    render() {
        return (
            <View>
                <Header headerText="Auth" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
