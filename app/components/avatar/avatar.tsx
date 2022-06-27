import * as React from 'react';
import {useMemo} from 'react';
import {View} from 'react-native';
import 'react-native-tailwind.macro';
import getColorFromLetter from '../../util/getColorFromLetter';
import CText from '../c-text';

export type AvatarProps = {
  letter: string;
};

const Avatar = ({letter}: AvatarProps) => {
  const bgColor = useMemo(() => getColorFromLetter(letter), [letter]);
  return (
    <View
      tw="rounded-full w-12 h-12 items-center justify-center"
      style={{backgroundColor: bgColor}}>
      <CText text={letter} />
    </View>
  );
};

export default Avatar;
