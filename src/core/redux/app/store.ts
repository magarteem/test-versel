import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import authSlice from '../../../modules/authorization/authSlice';
import timelineSlice from '../../../modules/timeline/timelineSlice';
import userSlice from '../../../modules/user/userSlice';

export const store = configureStore({
  reducer: {
    authSliceReducer: authSlice,
    userSliceReducer: userSlice,
    timelineSliceReducer: timelineSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
