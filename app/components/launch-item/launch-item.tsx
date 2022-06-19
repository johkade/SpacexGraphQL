import * as React from 'react';
import {StyleProp, View, ViewStyle, StyleSheet, Text} from 'react-native';

export type LaunchItemProps = {
  name: string;
  style?: StyleProp<ViewStyle>;
};

const LaunchItem = ({name, style}: LaunchItemProps) => {
  return (
    <View style={[styles.container, style]}>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 200,
    minHeight: 50,
    borderWidth: 1,
  },
});

export default LaunchItem;
