import {useMutation, useQuery} from '@apollo/client';
import {PlatformPressable} from '@react-navigation/elements';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  SafeAreaView,
} from 'react-native';
import 'react-native-tailwind.macro';
import {useTailwindStyles} from 'react-native-tailwind.macro';
import CText from '../../components/c-text';
import FAB from '../../components/fab';
import SwipeableUserDisplay from '../../components/swipeable-user-display';
import {RootStackParamList} from '../../nav/rootStack/types';
import {
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
} from '../../service/api/gql/mutations';
import {USER_LIST_ENDLESS} from '../../service/api/gql/queries';
import {User} from '../../types/model';
import getRandomName from '../../util/getRandomName';

export type ApolloScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'apollo'
>;

const PAGE_SIZE = 30;

const ApolloScreen = ({}: ApolloScreenProps) => {
  const [refreshing, setRefreshing] = useState(false);
  const {data, error, loading, refetch, networkStatus, fetchMore} = useQuery(
    USER_LIST_ENDLESS,
    {
      variables: {limit: PAGE_SIZE, offset: 0},
      notifyOnNetworkStatusChange: true,
    },
  );
  const [addUser] = useMutation(ADD_USER);
  const [deleteUser] = useMutation(DELETE_USER);
  const [updateUser] = useMutation(UPDATE_USER);

  const refresh = () => {
    setRefreshing(true);
    refetch().then(() => setRefreshing(false));
  };

  const deleteAll = () => deleteUser().then(() => refetch());

  const styles = useTailwindStyles(tw => ({
    flatListContent: tw`items-stretch px-2 py-2`,
  }));

  const updateUserWithNewName = (item: User) => {
    const newName = item.name + '🔥';
    updateUser({variables: {id: item.id, name: newName}}).then(() => refetch());
  };

  const renderUser: ListRenderItem<User> = ({item}) => {
    return (
      <SwipeableUserDisplay
        displayName={item.name}
        key={item.id}
        onDelete={() => {
          deleteUser({variables: {id: item.id}}).then(() => {
            refetch();
          });
        }}
        onUpdateNamePress={() => updateUserWithNewName(item)}
      />
    );
  };

  const addRandomUser = () => {
    const payload = {variables: {name: getRandomName()}};
    addUser(payload).then(() => {
      refetch();
    });
  };

  const onEndReached = () => {
    if (data.users.length < PAGE_SIZE) {
      return;
    }
    fetchMore({
      variables: {limit: PAGE_SIZE, offset: data.users?.length + 1},
      updateQuery: (prevResult, {fetchMoreResult}) => {
        const noNewItemsReceived =
          !fetchMoreResult || !fetchMoreResult.users?.length;
        if (noNewItemsReceived) {
          return prevResult;
        }
        const combinedUsers = [...prevResult.users, ...fetchMoreResult.users];
        const uniqueUsers = getUniqueListBy(combinedUsers, 'id');

        return {users: uniqueUsers};
      },
    });
  };

  return (
    <SafeAreaView tw="flex-1 bg-gray-800">
      <FlatList
        data={data?.users}
        renderItem={renderUser}
        keyExtractor={item => item.id}
        tw="flex-1"
        contentContainerStyle={styles.flatListContent}
        onRefresh={refresh}
        refreshing={refreshing}
        onEndReachedThreshold={0.5}
        onEndReached={onEndReached}
        ListHeaderComponent={
          <>
            {!!data?.users?.length && (
              <PlatformPressable onPress={deleteAll} tw="my-2">
                <CText
                  text={'Delete all users ⚠️'}
                  tw="self-center text-md text-black dark:text-white font-normal"
                />
              </PlatformPressable>
            )}
          </>
        }
        ListEmptyComponent={
          <>
            {!loading && networkStatus === 7 && (
              <CText
                text="no users found 🤷"
                tw="self-center text-black dark:text-white font-bold text-lg mt-12"
              />
            )}
          </>
        }
        ListFooterComponent={
          <>
            {loading && !refreshing && (
              <ActivityIndicator tw="mt-4 self-center" />
            )}
            {networkStatus === 8 && (
              <PlatformPressable onPress={() => refetch()}>
                <CText
                  text={error?.message ?? 'something went wrong' + '  ➡ Retry?'}
                  tw="self-center text-lg text-black dark:text-white font-bold"
                />
              </PlatformPressable>
            )}
          </>
        }
      />

      <FAB onPress={addRandomUser} />
    </SafeAreaView>
  );
};

export default ApolloScreen;

function getUniqueListBy(arr: any[], key: string) {
  return [...new Map(arr.map(item => [item[key], item])).values()];
}
