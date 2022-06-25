import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleProp, StyleSheet, Text, ViewStyle} from 'react-native';

export type CTextProps = {
  text: string;
  style?: StyleProp<ViewStyle>;
};

const CText = ({style, text}: CTextProps) => {
  const {colors} = useTheme();
  return <Text style={[styles.text, {color: colors.text}, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Verdana',
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 0.2,
  },
});

export default CText;
