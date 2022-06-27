import React from 'react';
import {Text} from 'react-native';
import 'react-native-tailwind.macro';

export type CTextProps = {
  text: string;
};

const CText = ({text}: CTextProps) => {
  return (
    <Text tw="text-lg text-black dark:text-white font-medium">{text}</Text>
  );
};

export default CText;
