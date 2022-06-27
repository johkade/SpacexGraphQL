import React from 'react';
import {Text, ViewStyle} from 'react-native';
import 'react-native-tailwind.macro';

export type CTextProps = {
  text: string;
  style?: ViewStyle;
};

const CText = ({text, ...rest}: CTextProps) => {
  return (
    <Text tw="text-lg text-black dark:text-white font-bold" {...rest}>
      {text}
    </Text>
  );
};

export default CText;
