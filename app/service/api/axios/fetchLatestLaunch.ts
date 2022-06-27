import {request} from 'graphql-request';
import CONFIG from '../../../const/config';
import {Launch} from '../../../types/model';
import {LATEST_LAUNCHES} from '../gql/queries';

const fetchLatestLaunch = async (): Promise<Launch> => {
  const response = await request(CONFIG.SPACEX_BASE, LATEST_LAUNCHES);
  return Promise.resolve(response.launchLatest);
};

export default fetchLatestLaunch;
