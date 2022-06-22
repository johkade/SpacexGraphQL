import * as React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {RootStackParamList} from '../../nav/rootStack/types';
// TODO: define the route params in the paramList of the navigator you want to use this screen in:
// type RootStackParamList = {apollo: {userId: string}};
// const RootStackNav = createNativeStackNavigator<RootStackParamList>();
// this will also make the ts error disappear.
// TODO: add the actual	screen component to the stack.
// more info here: https://reactnavigation.org/docs/typescript/

export type ApolloScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'apollo'
>;

const ApolloScreen = ({navigation}: ApolloScreenProps) => {
  //
  return (
    <SafeAreaView style={styles.container}>
      <Text>ApolloScreen</Text>
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

export default ApolloScreen;
