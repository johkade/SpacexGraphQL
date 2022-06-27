import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useTailwindStyles} from 'react-native-tailwind.macro';
import Card from '../../components/card';
import {RootStackParamList} from '../../nav/rootStack/types';

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'home'
>;

type RouteNameType = (keyof RootStackParamList)[];
const clients: RouteNameType = ['apollo', 'relay', 'query'];

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const styles = useTailwindStyles(tw => ({
    SVContent: tw`items-center`,
  }));

  return (
    <SafeAreaView tw="flex-1 bg-white dark:bg-black">
      <ScrollView tw="flex-1" contentContainerStyle={styles.SVContent}>
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

export default HomeScreen;
