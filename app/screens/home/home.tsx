import {useApolloClient} from '@apollo/client';
import {PlatformPressable} from '@react-navigation/elements';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {Suspense} from 'react';
import {ActivityIndicator, SafeAreaView, ScrollView, View} from 'react-native';
import {useTailwindStyles} from 'react-native-tailwind.macro';
import CText from '../../components/c-text';
import Card from '../../components/card';
import LatestLaunch from '../../components/latest-launch';
import {RootStackParamList} from '../../nav/rootStack/types';

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'home'
>;

type RouteNameType = (keyof RootStackParamList)[];
const clients: RouteNameType = ['apollo', 'relay', 'query'];

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const apolloClient = useApolloClient();
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

        <PlatformPressable
          onPress={() => apolloClient.resetStore()}
          tw="mt-12 justify-center h-24">
          <CText text={'Reset Cache'} />
        </PlatformPressable>
        <View tw="mt-24">
          <Suspense fallback={<ActivityIndicator />}>
            <LatestLaunch />
          </Suspense>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
