import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosClient from '../utils/axiosClient';

export const fetchProblems = createAsyncThunk(
  'problems/fetch',
  async (page = 1, { rejectWithValue }) => {
    try {
      const { data } = await axiosClient.get(`/problem/all-problems?page=${page}`);
      return data; // { totalProblems, totalPages, currentPage, problems }
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchSolvedProblems = createAsyncThunk(
  'problems/fetchSolved',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosClient.get('/problem/problems-solved-by-user');
      return data; // array of solved problem docs
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const problemsSlice = createSlice({
  name: 'problems',
  initialState: {
    list: [],
    solvedIds: [],
    totalProblems: 0,
    totalPages: 1,
    currentPage: 1,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProblems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProblems.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.problems;
        state.totalProblems = action.payload.totalProblems;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(fetchProblems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to load problems';
      })
      .addCase(fetchSolvedProblems.fulfilled, (state, action) => {
        state.solvedIds = action.payload.map((problem) => problem._id);
      })
      .addCase(fetchSolvedProblems.rejected, (state, action) => {
        state.error = action.payload || 'Failed to load solved problems';
      });
  },
});

export default problemsSlice.reducer;