import {
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { UserEntity } from '../domain/user.entity';
import { userAdapter } from '../adapters/api';
import { fetchUser } from '../adapters/api/fetch.thunk';

export const USER_FEATURE_KEY = 'user';

export interface UserState extends EntityState<UserEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string;
}

export const initialUserState: UserState = userAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: '',
});

export const userSlice = createSlice({
  name: USER_FEATURE_KEY,
  initialState: initialUserState,
  reducers: {
    add: userAdapter.addOne,
    remove: userAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state: UserState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchUser.fulfilled,
        (state: UserState, action: PayloadAction<UserEntity[]>) => {
          userAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchUser.rejected, (state: UserState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message ? action.error.message : '';
      });
  },
});

export const userReducer = userSlice.reducer;

export const userActions = userSlice.actions;

const { selectAll, selectEntities } = userAdapter.getSelectors();

export const getUserState = (rootState: any): UserState =>
  rootState[USER_FEATURE_KEY];

export const selectAllUser = createSelector(getUserState, selectAll);

export const selectUserEntities = createSelector(getUserState, selectEntities);
