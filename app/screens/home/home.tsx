import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Card from '../../components/card';
import {RootStackParamList} from '../../nav/rootStack/types';

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'home'
>;

// const renderLaunchItem: ListRenderItem<Launch> = ({item, index}) => {
//   return <LaunchItem name={item.mission_name} key={index.toString()} />;
// };

type RouteNameType = (keyof RootStackParamList)[];
const clients: RouteNameType = ['apollo', 'relay', 'query'];

const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}>
        {/* {!!data?.launches && (
        <FlatList data={data.launches} renderItem={renderLaunchItem} />
      )} */}

        {clients.map(client => (
          <Card
            text={client}
            onPress={() => navigation.navigate(client)}
            key={client}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    alignItems: 'center',
  },
});

export default HomeScreen;
