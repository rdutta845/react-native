/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import FetchData from './components/fetchData';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Todo from './components/todo';

const App = props => {
  const {navigate} = props.navigation;
  const [obj, setObj] = useState(1);
  const [fetchObj, setFetchObj] = useState('');
  const [timer, setTimer] = useState('');
  const [inputData, setInputData] = useState('');
  const index = Math.floor(Math.random() * 10);
  const addFunction = num => {
    setObj(obj + num);
    setTitle();
  };
  function fetchTitle() {
    return function() {
      console.log('timer', timer);
      clearTimeout(timer);
      setTimer(
        setTimeout(function() {
          fetch('https://jsonplaceholder.typicode.com/todos/' + index)
            .then(response => response.json())
            .then(json => {
              console.log(json);
              setFetchObj(json.title);
            });
        }, 1000),
      );
    };
  }
  function navigateTodo() {
    navigate('Todo');
  }
  const setTitle = fetchTitle();
  function setFieldValue(e) {
    setInputData(e.nativeEvent.text);
  }
 
  return (
    <View style={styles.paddingTop}>
      <TextInput
        value={inputData}
        onChange={setFieldValue}
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: 100,
          paddingHorizontal: 10,
        }}
      />
      <Text>
        {inputData} {obj}
      </Text>
      <Text>Fetched Title {fetchObj}</Text>
      <FetchData onClick={addFunction} list={obj} navigateTodo={navigateTodo} />
    </View>
  );
};
const MainNavigator = createAppContainer(
  createStackNavigator({
    Home: {screen: App},
    Todo: {screen: Todo},
  }),
);
const styles = StyleSheet.create({
  paddingTop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default MainNavigator;
