import React from 'react';
import { 
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { colors, } from '../../theme';

export const ButtonIcon = ({
  icon,
  onPress,
  style,
  transparent=false,
  color=colors.primary,
  size=30,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container, 
        { backgroundColor: transparent ? 'transparent' : color },
        { width: size, height: size, },
        style,
      ]} >
      <Image style={{ ...styles.icon, width: size*0.7, height: size*0.7 }} source={icon} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: colors.white,
  }
});