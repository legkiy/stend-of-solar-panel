import { configureStore } from '@reduxjs/toolkit';
import menuBtnSlice from '../features/menuBtn/menuBtnSlice';
import dropdownSlice from '../features/select/dropdownSlice';
import selectFileSlice from '../features/select/selectFileSlice';
import panelSlice from '../features/panel/panelSlice';
import tooltipSlice from '../features/tooltip/tooltipSlice';

const store = configureStore({
  reducer: {
    menuBtn: menuBtnSlice,
    dropdown: dropdownSlice,
    selectFile: selectFileSlice,
    panel: panelSlice,
    tooltip: tooltipSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
