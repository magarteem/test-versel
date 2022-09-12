import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialStateNotificationType, NotificationResponseData } from "../../core/redux/types/notificationSliseType";
import { notificationThunk } from "./notificationThunk";

const initialState: InitialStateNotificationType = {
  photo: [],
  error: null,
  isLoading: true
};

const notificationSlise = createSlice({
  name: "notificationThunk",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(notificationThunk.pending.type, (state: InitialStateNotificationType) => {
        console.log("notificationThunk pending");

        state.isLoading = true
      })
      .addCase(notificationThunk.fulfilled.type, (state: InitialStateNotificationType, actions: PayloadAction<any>) => {
        console.log("notificationThunk ");
        console.log(actions.payload);

        state.isLoading = false
        state.photo = actions.payload

      })
      .addCase(notificationThunk.rejected.type, (state: InitialStateNotificationType, actions: PayloadAction<any>) => {
        console.log("notificationThunk rejected");
        console.log(actions.payload);

        state.isLoading = false
      }
      );
  },
})

export const { } = notificationSlise.actions;
export default notificationSlise.reducer;