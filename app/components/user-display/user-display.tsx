import {PlatformPressable} from '@react-navigation/elements';
import * as React from 'react';
import {View} from 'react-native';
import 'react-native-tailwind.macro';
import Avatar from '../avatar';
import CText from '../c-text';

export type UserDisplayProps = {
  //
  displayName: string;
  onUpdateNamePress?: () => void;
};

const UserDisplay = ({displayName, onUpdateNamePress}: UserDisplayProps) => {
  return (
    <View tw="flex-row items-center rounded-md bg-gray-700 self-stretch mt-1 p-2">
      <Avatar letter={displayName?.[0] ?? '?'} />
      <View tw="flex-1 ml-2">
        <CText text={displayName} />
      </View>
      <PlatformPressable onPress={onUpdateNamePress} tw="p-2">
        <CText text="🚀" />
      </PlatformPressable>
    </View>
  );
};

export default UserDisplay;
