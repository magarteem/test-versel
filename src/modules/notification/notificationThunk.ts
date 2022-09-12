import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { _api } from "../../api/axiosConfig";
import { NotificationResponseData } from "../../core/redux/types/notificationSliseType";

export const notificationThunk =
  createAsyncThunk<NotificationResponseData, number>(
    `notificationThunk/photo`, async (number, { rejectWithValue }) => {
      try {
        const response = await _api.get('/photo')
        return response.data
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.response?.data);
        } else {
          throw new Error("different error than axios");
        }
      }
    });
