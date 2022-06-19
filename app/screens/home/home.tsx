import {gql, useQuery} from '@apollo/client';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import LaunchItem from '../../components/launch-item';
import LoadingView from '../../components/loading-view';
import {RootStackParamList} from '../../nav/rootStack/types';

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'home'
>;

const LAUNCHES_QUERY = gql`
  {
    rockets(limit: 3, offset: 1) {
      id
      name
      boosters
      company
      diameter {
        meters
      }
    }
  }
`;

type RenderItemParams = {
  item: {id: string; name: string};
  index: number;
};

const HomeScreen = ({}: HomeScreenProps) => {
  const {data, loading} = useQuery(LAUNCHES_QUERY);

  if (loading) {
    return <LoadingView />;
  }

  const renderLaunchItem = ({item}: RenderItemParams) => {
    return <LaunchItem name={item.name} key={item.id} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      {!!data?.rockets && (
        <FlatList data={data.rockets} renderItem={renderLaunchItem} />
      )}
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
