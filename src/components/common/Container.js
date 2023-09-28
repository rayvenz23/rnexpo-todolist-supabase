import React from 'react';
import { View, StyleSheet, } from 'react-native';
import { colors, } from '../../theme';

export const Container = ({
  children,
  style,
}) => {
  return (
    <View style={[
      styles.container,
      style,
    ]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg1,
  },
});