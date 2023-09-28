import React from 'react';
import { 
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { colors, } from '../../theme';

export const ButtonPlain = ({
  title,
  onPress,
  style,
  textStyle,
  disabled,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[ styles.container, style ]} >
      <Text style={[styles.text, textStyle ]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    
  },
  text: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});