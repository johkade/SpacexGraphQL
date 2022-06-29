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
  const {data: launch, error} = useQuery('latestLaunch', fetchLatestLaunch, {
    useErrorBoundary: false,
  });

  return (
    <View tw="rounded-md bg-gray-800 p-8">
      <CText
        text={error?.message?.substr(0, 16) ?? launch?.mission_name ?? '?'}
        nol={1}
      />
    </View>
  );
};

export default LatestLaunch;
