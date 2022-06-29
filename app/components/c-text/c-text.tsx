import React from 'react';
import {Text, ViewStyle} from 'react-native';
import 'react-native-tailwind.macro';

export type CTextProps = {
  text: string;
  nol?: number;
  style?: ViewStyle;
};

const CText = ({text, nol = 1, ...rest}: CTextProps) => {
  return (
    <Text
      tw="text-lg text-black dark:text-white font-bold"
      {...rest}
      numberOfLines={nol}>
      {text}
    </Text>
  );
};

export default CText;
