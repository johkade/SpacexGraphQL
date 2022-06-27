import {PlatformPressable} from '@react-navigation/elements';
import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler';
import 'react-native-tailwind.macro';
import CText from '../c-text';
import UserDisplay from '../user-display';

export type SwipeableUserDisplayProps = {
  //
  displayName: string;
  onDelete?: () => void;
  onUpdateNamePress?: () => void;
};

const RightAction = ({onDelete}: {onDelete: () => void}) => {
  return (
    <PlatformPressable
      onPress={onDelete}
      pressOpacity={0.4}
      tw="px-4 items-center justify-center">
      <CText text="❌" />
    </PlatformPressable>
  );
};

const SwipeableUserDisplay = ({
  displayName,
  onDelete = () => {},
  onUpdateNamePress,
}: SwipeableUserDisplayProps) => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (open && ref && ref.current !== null) {
      timeout = setTimeout(() => ref.current.close(), 3000);
    }
    return () => clearTimeout(timeout);
  }, [open]);

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={() => <RightAction onDelete={onDelete} />}
        ref={ref}
        onSwipeableOpen={() => setOpen(true)}
        onSwipeableClose={() => setOpen(false)}>
        <UserDisplay
          displayName={displayName}
          onUpdateNamePress={onUpdateNamePress}
        />
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default SwipeableUserDisplay;
