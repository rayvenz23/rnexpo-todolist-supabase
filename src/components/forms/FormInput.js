import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const FormInput = (props) => {
  return (
    <View style={[
      styles.inputContainer,
      props.style,
      props.inputContainerStyle,
    ]} >
      <Text style={styles.label} >{props.label || ''}</Text>
      <TextInput
        ref={props.inputRef}
        style={[styles.inputStyle, props.inputStyle]}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.white,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 10,
  },
  inputStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: 'left',
    fontSize: 14,
    paddingHorizontal: 15,
  },
});