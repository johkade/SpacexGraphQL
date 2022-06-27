import {PlatformPressable} from '@react-navigation/elements';
import {MotiView} from 'moti';
import * as React from 'react';
import 'react-native-tailwind.macro';
import CText from '../c-text';

export type FABProps = {
  //
  onPress: () => void;
};

const FAB = ({onPress}: FABProps) => {
  return (
    <MotiView
      from={{opacity: 0, transform: [{translateX: 200}]}}
      animate={{opacity: 1, transform: [{translateX: 0}]}}
      transition={{
        type: 'timing',
        duration: 300,
        delay: 200,
      }}>
      <PlatformPressable
        onPress={onPress}
        tw="absolute bottom-16 right-4 bg-pink-500 w-12 h-12 rounded-full items-center justify-center shadow-md">
        <CText text={'+'} />
      </PlatformPressable>
    </MotiView>
  );
};

export default FAB;
