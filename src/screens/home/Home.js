import React, { useState, useEffect,} from 'react';
import { Text, StyleSheet, FlatList, } from 'react-native';
import { Container, ListItem, ButtonIcon, } from '../../components';
import useAuthStore from '../../stores/Auth';
import useTodolistStore from '../../stores/TodoList';
import { images } from '../../theme';

const Home = ({ navigation }) => {
  const { signOut, } = useAuthStore();
  const { todoList, getTodoList, deleteItem, } = useTodolistStore();

  useEffect(() => {
    navigation.setOptions({
      title: 'To-do List',
      headerLeft: () => {
        return (
          <ButtonIcon
            transparent
            icon={images.icon_signout}
            size={40}
            onPress={() => signOut()}
          />
        )
      },
      headerRight: () => {
        return (
          <ButtonIcon
            transparent
            icon={images.icon_plus}
            size={40}
            onPress={() => navigation.navigate('NewTodo')}
          />
        )
      },
    });
  }, [navigation]);

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <Container style={styles.container} >
      <FlatList
        data={todoList}
        contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 20, }}
        renderItem={({ item }) => {
          return (
            <ListItem
              title={item.task}
              onPressEdit={() => navigation.navigate('NewTodo', { task: item })}
              onPressDelete={() => deleteItem({ id: item.id })}
            />
          )
        }}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
  },
});

export default Home;