import {gql} from '@apollo/client';

export const LAUNCHES_QUERY = gql`
  {
    rockets(limit: 20, offset: 0) {
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
