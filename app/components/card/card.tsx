import * as React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

export type CardProps = {
  text: string;
  onPress: (evt: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
};

const Card = ({text, onPress, style}: CardProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text>{text}</Text>
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
    margin: 10,
    borderRadius: 10,
  },
});

export default Card;
