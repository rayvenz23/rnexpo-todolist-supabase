import React from 'react';
import { 
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { ButtonIcon } from '../buttons/ButtonIcon';
import { colors, images, } from '../../theme';

export const ListItem = ({
  title,
  onPress,
  onPressEdit,
  onPressDelete,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container, 
        style
      ]} >
      <Text style={[styles.text, textStyle ]}>{title}</Text>
      <ButtonIcon 
        icon={images.icon_pencil} 
        color={colors.blue} 
        onPress={onPressEdit}
      />
      <ButtonIcon 
        icon={images.icon_trash} 
        color={colors.red} 
        onPress={onPressDelete}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    marginVertical: 5,
    paddingLeft: 10,
    paddingRight: 5,
    paddingVertical: 5,
  },
  text: {
    fontSize: 16,
    flex: 1,
  },
});