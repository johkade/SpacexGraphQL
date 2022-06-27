import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useColorScheme} from 'react-native';
import {TailwindProvider} from 'react-native-tailwind.macro';
import ApolloScreen from '../../screens/apollo';
import HomeScreen from '../../screens/home';
import LaunchDetailsScreen from '../../screens/launch-details';
import QueryScreen from '../../screens/query';
import RelayScreen from '../../screens/relay';
import {RootStackParamList} from './types';

const RootStackNav = createNativeStackNavigator<RootStackParamList>();

const themeDict = {
  light: DefaultTheme,
  dark: DarkTheme,
};

const RootStack = () => {
  const scheme = useColorScheme();

  return (
    <TailwindProvider dark={scheme === 'dark'}>
      <NavigationContainer theme={themeDict[scheme ?? 'light']}>
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
    </TailwindProvider>
  );
};

export default RootStack;
