import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/home';
import {RootStackParamList} from './types';

const RootStackNav = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <RootStackNav.Navigator>
        <RootStackNav.Screen name={'home'} component={HomeScreen} />
      </RootStackNav.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
