import { create } from 'zustand';
import { supabase } from './supabase';
import { todolistType } from './types';

const useTodolistStore = create((set, get) => ({
  todoList: [],
  todoListStatus: '',
  todoListError: '',

  getTodoList: () => {
    supabase.from('todo').select()
    .then(({ data, error }) => {
      if (error) {
        // console.log(`response error : ${JSON.stringify(error)}`);
        set({ 
          todoListStatus: todolistType.GETITEMS_FAIL,
          todoListError: error.message,
        })
      } else {
        // console.log(`response data : ${JSON.stringify(data)}`);
        set({ 
          todoListStatus: todolistType.GETITEMS_SUCCESS,
          todoList: data.sort((a, b) => a.id - b.id),
        })
      } 
    });
  },

  addTodoItem: ({ task }) => {
    supabase.from('todo').insert({
      task,
    })
    .then(({ error }) => {
      if (error) {
        // console.log(`response error : ${JSON.stringify(error)}`);
        set({ 
          todoListStatus: todolistType.ADDITEM_FAIL,
          todoListError: error.message,
        })
      } else {
        set({ 
          todoListStatus: todolistType.ADDITEM_SUCCESS,
        })
        get().getTodoList();
      }
    });
  },

  editTodoItem: ({ id, task }) => {
    supabase.from('todo').update({
      task,
    })
    .eq('id', id)
    .then(({ error }) => {
      if (error) {
        // console.log(`response error : ${JSON.stringify(error)}`);
        set({ 
          todoListStatus: todolistType.ADDITEM_FAIL,
          todoListError: error.message,
        })
      } else {
        set({ 
          todoListStatus: todolistType.ADDITEM_SUCCESS,
        })
        get().getTodoList();
      }
    });
  },

  deleteItem: ({ id }) => {
    supabase
    .from('todo')
    .delete()
    .eq('id', id)
    .then(() => {
      get().getTodoList();
    })
  }

}));

export default useTodolistStore;

