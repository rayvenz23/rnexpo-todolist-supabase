import { create } from 'zustand';
import { authType } from './types';
import { supabase } from './supabase';

const useAuthStore = create((set, get) => ({
  authUser: null,
  authStatus: '',
  authLoading: false,
  authError: '',

  signUpWithEmail: ({ email, password }) => {
    supabase.auth.signUp({ email, password })
    .then(({ data, error }) => {
      if (error) {
        set({ 
          authStatus: authType.SIGNUP_FAIL,
          authError: error.message,
        })
      } else {
        // console.log(`response : ${JSON.stringify(data)}`)
        set({ 
          authStatus: authType.SIGNUP_SUCCESS,
          authUser: data.user,
        })
      }
    });
  },

  signInWithEmail: ({ email, password }) => {
    supabase.auth.signInWithPassword({ email, password })
    .then(({ data, error }) => {
      if (error) {
        set({ 
          authStatus: authType.SIGNIN_FAIL,
          authError: error.message,
        })
      } else {
        // console.log(`response : ${JSON.stringify(data)}`)
        set({ 
          authStatus: authType.SIGNIN_SUCCESS,
          authUser: data.user,
        })
      }
    });
  },

  signOut: () => {
    supabase.auth.signOut()
    .then(() => {
      set({ 
        authUser: null,
      })
    })
  },

}));

export default useAuthStore

