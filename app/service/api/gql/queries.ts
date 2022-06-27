import {gql} from '@apollo/client';

export const USER_LIST = gql`
  query Users {
    users {
      id
      name
    }
  }
`;

export const USER_LIST_ENDLESS = gql`
  query Users($limit: Int!, $offset: Int!) {
    users(order_by: {timestamp: asc}, offset: $offset, limit: $limit) {
      id
      name
    }
  }
`;

export const LATEST_LAUNCHES = gql`
  query LatestLaunches {
    launchLatest {
      id
      launch_success
      mission_name
    }
  }
`;
