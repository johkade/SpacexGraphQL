import {gql} from '@apollo/client';

export const LAUNCHES_QUERY = gql`
  query launches {
    launches(limit: 30) {
      id
      mission_name
      links {
        mission_patch_small
      }
    }
  }
`;
