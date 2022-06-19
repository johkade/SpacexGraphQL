import React, {useEffect} from 'react';
import RootStack from './app/nav/rootStack/rootStack';
import fetchRocketsWithAxios from './app/service/api/axios/fetchRocketsWithAxios';

export default function App() {
  useEffect(() => {
    fetchRocketsWithAxios(1, 1)
      .then(res => console.log(JSON.stringify(res)))
      .catch(e => console.log(e));
  }, []);

  return <RootStack />;
}
