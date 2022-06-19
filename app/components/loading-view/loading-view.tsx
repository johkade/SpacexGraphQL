import React from 'react';
import {
  StyleProp,
  View,
  ViewStyle,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

export type LoadingViewProps = {
  style?: StyleProp<ViewStyle>;
};

const LoadingView = ({style}: LoadingViewProps) => {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingView;
