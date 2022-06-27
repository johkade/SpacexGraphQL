import React from 'react';
import {View} from 'react-native';
import 'react-native-tailwind.macro';
import {useQuery} from 'react-query';
import fetchLatestLaunch from '../../service/api/axios/fetchLatestLaunch';
import CText from '../c-text';

export type LatestLaunchProps = {
  //
};

const LatestLaunch = ({}: LatestLaunchProps) => {
  const {data: launch} = useQuery('latestLaunch', fetchLatestLaunch);

  return (
    <View tw="rounded-md bg-gray-800 p-8">
      <CText text={launch?.mission_name ?? '?'} />
    </View>
  );
};

export default LatestLaunch;
