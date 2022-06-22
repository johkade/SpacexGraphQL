import React from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/home';
import ApolloScreen from '../../screens/apollo';
import RelayScreen from '../../screens/relay';
import QueryScreen from '../../screens/query';
import LaunchDetailsScreen from '../../screens/launch-details';
import {RootStackParamList} from './types';

const RootStackNav = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <RootStackNav.Navigator>
        <RootStackNav.Screen name={'home'} component={HomeScreen} />
        <RootStackNav.Screen name={'apollo'} component={ApolloScreen} />
        <RootStackNav.Screen name={'relay'} component={RelayScreen} />
        <RootStackNav.Screen name={'query'} component={QueryScreen} />

        <RootStackNav.Screen
          name={'launchDetails'}
          component={LaunchDetailsScreen}
        />
      </RootStackNav.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
