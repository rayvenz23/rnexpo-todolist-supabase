import React, { useState, useEffect, } from 'react';
import { StyleSheet, } from 'react-native';
import { Container, FormInput, Button, ButtonPlain } from '../../components';
import useTodolistStore from '../../stores/TodoList';
import { todolistType } from '../../stores/types';

const NewTodo = ({ navigation, route }) => {
  const { todoListStatus,  addTodoItem, editTodoItem, } = useTodolistStore();
  const [newTask, setNewTask ] = useState('');

  useEffect(() => {
    navigation.setOptions({
      title: route?.params?.task?.id ? 'Edit Task' : 'New Task',
    });
  }, [navigation]);

  useEffect(() => {
    if (route?.params?.task) {
      setNewTask(route?.params?.task.task);
    }
  }, [route]);

  useEffect(() => {
    if (todoListStatus === todolistType.ADDITEM_SUCCESS) {
      navigation.navigate('Home')
    }
  }, [todoListStatus]);
  
  const onSubmit = () => {
    if (route?.params?.task?.id) {
      editTodoItem({ id: route?.params?.task?.id, task: newTask })
    } else {
      addTodoItem({ task: newTask })
    }
  }

  return (
    <Container style={styles.container}>
      <FormInput 
        placeholder={'Enter your task'}
        clearButtonMode={'while-editing'}
        autoCorrect={false}
        value={newTask}
        onChangeText={(text) => setNewTask(text)}
      />
      <Button
        disabled={!newTask}
        title={'SAVE'}
        onPress={() => onSubmit()}
      />
      <ButtonPlain
        title={'Cancel'}
        style={{ width: '100%', paddingVertical: 10, alignItems: 'center' }}
        onPress={() => navigation.goBack()}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
export default NewTodo;