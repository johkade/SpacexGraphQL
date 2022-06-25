import {gql, useMutation, useQuery} from '@apollo/client';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import Card from '../../components/card';
import {RootStackParamList} from '../../nav/rootStack/types';

export type ApolloScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'apollo'
>;

const USER_LIST = gql`
  query Users {
    users {
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

type User = {
  id: string;
  name: string;
};

const ApolloScreen = ({}: ApolloScreenProps) => {
  const {data, error, loading, refetch} = useQuery(USER_LIST);
  const [addUser] = useMutation(ADD_USER);
  const [deleteUser] = useMutation(DELETE_USER);
  const [updateUser] = useMutation(UPDATE_USER);
  const [refreshing, setRefreshing] = useState(false);

  const refresh = async () => {
    setRefreshing(true);
    await refetch().catch(() => {});
    setRefreshing(false);
  };

  const renderUser: ListRenderItem<User> = ({item}) => {
    return (
      <Card
        text={item.name}
        key={item.id}
        onPress={() => deleteUser({variables: {id: item.id}})}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Card
        text={'addUser'}
        onPress={() =>
          addUser({variables: {name: 'Dude' + Math.round(Math.random() * 10)}})
        }
      />
      {!!data?.users && (
        <FlatList
          data={data.users}
          renderItem={renderUser}
          style={styles.flatList}
          contentContainerStyle={styles.flatListContent}
          onRefresh={refresh}
          refreshing={refreshing}
        />
      )}
      {loading && <ActivityIndicator style={styles.spinner} />}

      {error && <Text>Something went wrong</Text>}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    flex: 1,
  },
  flatListContent: {
    alignItems: 'center',
  },
  spinner: {
    marginTop: 100,
  },
});

export default ApolloScreen;
