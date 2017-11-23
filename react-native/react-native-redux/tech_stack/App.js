import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Header } from './src/component/common';
import LibraryList from './src/component/LibraryList';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText="Tech stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
