import { configureStore } from '@reduxjs/toolkit';
import panelSlice from '../features/panel/panelSlice';
import dropdownSlice from '../features/select/dropdownSlice';
import selectFileSlice from '../features/select/selectFileSlice';
import { useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    panel: panelSlice,
    selectFile: selectFileSlice,
    dropdawn: dropdownSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
