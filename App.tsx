import {StatusBar} from 'expo-status-bar';
import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RootStack from './app/nav/navigators/rootStack';
import fetchRocketsWithAxios from './app/service/api/axios/fetchRocketsWithAxios';

export default function App() {
  useEffect(() => {
    fetchRocketsWithAxios(1, 1)
      .then(res => console.log(JSON.stringify(res)))
      .catch(e => console.log(e));
  }, []);

  return <RootStack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
