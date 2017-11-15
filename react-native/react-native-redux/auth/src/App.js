import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header } from './component/common';

class App extends Component {
    render() {
        return (
            <View>
                <Header headerText="Auth" />
                <Text>auth</Text>
            </View>
        );
    }
}

export default App;
