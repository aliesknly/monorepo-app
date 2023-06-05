import { configureStore } from '@reduxjs/toolkit';
import {
  USER_FEATURE_KEY,
  UserState,
  userReducer,
} from '../../features/user/container/user.slice';
import { useDispatch } from 'react-redux';

 interface AppStore {
  [USER_FEATURE_KEY]: UserState;
} 

export const store = configureStore<AppStore>({
  reducer: { [USER_FEATURE_KEY]: userReducer },
  // Additional middleware can be passed to this array
  devTools: process.env.NODE_ENV !== 'production',
  // Optional Redux store enhancers
});

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch 

export type RootState = ReturnType<typeof store.getState>