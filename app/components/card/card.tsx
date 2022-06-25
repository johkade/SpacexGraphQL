import {useTheme} from '@react-navigation/native';
import * as React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import CText from '../c-text';

export type CardProps = {
  text: string;
  onPress?: (evt: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
};

const Card = ({text, onPress, style}: CardProps) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor: colors.primary}, style]}>
      <CText text={text} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#99aaff',
    minWidth: 300,
    margin: 4,
    borderRadius: 10,
  },
});

export default Card;
