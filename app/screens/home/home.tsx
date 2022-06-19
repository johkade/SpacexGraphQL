import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {RootStackParamList} from '../../nav/rootStack/types';

// TODO: define the route params in the paramList of the navigator you want to use this screen in:
// type RootStackParamList = {home: { userId: string }};
// const RootStackNav = createNativeStackNavigator<RootStackParamList>();
// this will also make the ts error disappear.
// TODO: add the actual screen component to the stack.
// more info here: https://reactnavigation.org/docs/typescript/

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'home'
>;

const HomeScreen = ({}: HomeScreenProps) => {
  //
  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
