import {AppRegistry} from 'react-native';
/** @format */

import {} from 'react-native';
import App from './react-native-mini-apps-support/App';
import MiniApp from './MiniApp';
import {name as appName} from './react-native-mini-apps-support/app.json';

AppRegistry.registerComponent(appName, () => App);
/** @format */

import {} from 'react-native';
import App2 from './react-native-mini-apps-support/App2';

AppRegistry.registerComponent("reactnative_multibundler2", () => App2);
/** @format */

import {} from 'react-native';
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {App3_1,App3_2} from "./react-native-mini-apps-support/App3";

const Stack = createStackNavigator();

function App3() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App3_1" component={App3_1} />
        <Stack.Screen name="App3_2" component={App3_2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent("reactnative_multibundler3", () => MiniApp);
