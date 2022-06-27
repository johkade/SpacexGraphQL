import {PlatformPressable} from '@react-navigation/elements';
import * as React from 'react';
import {GestureResponderEvent} from 'react-native';
import {useTailwindStyles} from 'react-native-tailwind.macro';
import CText from '../c-text';

export type CardProps = {
  text: string;
  onPress?: (evt: GestureResponderEvent) => void;
};

const Card = ({text, onPress}: CardProps) => {
  const styles = useTailwindStyles(tw => ({
    ripple: tw`text-white`,
  }));
  return (
    <PlatformPressable
      onPress={onPress}
      pressOpacity={0.6}
      android_ripple={styles.ripple}
      tw="bg-purple-600 dark:bg-custom-600 rounded-lg px-3 py-1 m-1 self-stretch items-center shadow-sm">
      <CText text={text} />
    </PlatformPressable>
  );
};

export default Card;
