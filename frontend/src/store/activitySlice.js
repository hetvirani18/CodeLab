import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosClient from '../utils/axiosClient';

export const fetchUserActivity = createAsyncThunk(
  'activity/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosClient.get('/user/activity');
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error);
    }
  }
);

const activitySlice = createSlice({
  name: 'activity',
  initialState: {
    heatmap: {},
    streak: 0,
    todaySolved: false,
    totalSolved: 0,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserActivity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserActivity.fulfilled, (state, action) => {
        state.loading = false;
        state.heatmap = action.payload.heatmap;
        state.streak = action.payload.streak;
        state.todaySolved = action.payload.todaySolved;
        state.totalSolved = action.payload.totalSolved || 0;
      })
      .addCase(fetchUserActivity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to load activity';
      });
  }
});

export default activitySlice.reducer;