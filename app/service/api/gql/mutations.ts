import {gql} from '@apollo/client';

export const ADD_USER = gql`
  mutation InsertUser($name: String) {
    insert_users(objects: {name: $name}) {
      returning {
        id
      }
    }
  }
`;
export const DELETE_USER = gql`
  mutation DeleteUser($id: uuid) {
    delete_users(where: {id: {_eq: $id}}) {
      affected_rows
    }
  }
`;
export const UPDATE_USER = gql`
  mutation DeleteUser($id: uuid, $name: String) {
    update_users(where: {id: {_eq: $id}}, _set: {name: $name}) {
      affected_rows
    }
  }
`;
