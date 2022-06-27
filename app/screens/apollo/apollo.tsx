import {gql, useMutation, useQuery} from '@apollo/client';
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
import {User} from '../../types/model';
import getRandomName from '../../util/getRandomName';
import {PlatformPressable} from '@react-navigation/elements';

export type ApolloScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'apollo'
>;

const PAGE_SIZE = 30;

const USER_LIST_ENDLESS = gql`
  query Users($limit: Int!, $offset: Int!) {
    users(order_by: {timestamp: asc}, offset: $offset, limit: $limit) {
      id
      name
    }
  }
`;

const ADD_USER = gql`
  mutation InsertUser($name: String) {
    insert_users(objects: {name: $name}) {
      returning {
        id
      }
    }
  }
`;
const DELETE_USER = gql`
  mutation DeleteUser($id: uuid) {
    delete_users(where: {id: {_eq: $id}}) {
      affected_rows
    }
  }
`;
const UPDATE_USER = gql`
  mutation DeleteUser($id: uuid, $name: String) {
    update_users(where: {id: {_eq: $id}}, _set: {name: $name}) {
      affected_rows
    }
  }
`;

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
          deleteUser({variables: {id: item.id}}).then(() => refetch());
        }}
        onUpdateNamePress={() => updateUserWithNewName(item)}
      />
    );
  };

  const addRandomUser = () => {
    const payload = {variables: {name: getRandomName()}};
    addUser(payload).then(() => refetch());
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
        tw="flex-1"
        contentContainerStyle={styles.flatListContent}
        onRefresh={refresh}
        refreshing={refreshing}
        onEndReachedThreshold={0.5}
        onEndReached={onEndReached}
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
            {loading && <ActivityIndicator tw="mt-4 self-center" />}
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
