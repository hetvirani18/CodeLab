import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosClient from '../utils/axiosClient';

export const fetchProblemDetail = createAsyncThunk(
  'problemDetail/fetch',
  async (problemId, { rejectWithValue }) => {
    try {
      const { data } = await axiosClient.get(`/problem/problem-by-id/${problemId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const runProblem = createAsyncThunk(
  'problemDetail/run',
  async ({ problemId, code, language }, { rejectWithValue }) => {
    try {
      const { data } = await axiosClient.post(`/submission/run/${problemId}`, { code, language });
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const submitProblem = createAsyncThunk(
  'problemDetail/submit',
  async ({ problemId, code, language }, { rejectWithValue }) => {
    try {
      const { data } = await axiosClient.post(`/submission/submit/${problemId}`, { code, language });
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


const problemDetailSlice = createSlice({
  name: 'problemDetail',
  initialState: {
    problem:      null,
    loading:      false,   // initial page load
    error:        null,
    runResult:    null,
    submitResult: null,
    loadingAction: null,   // 'run' | 'submit' | null
  },
  reducers: {
    clearResults(state) {
      state.runResult    = null;
      state.submitResult = null;
    },
    clearProblem(state) {
      state.problem      = null;
      state.runResult    = null;
      state.submitResult = null;
      state.error        = null;
      state.loadingAction = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProblemDetail.pending, (state) => {
        state.loading = true;
        state.error   = null;
        state.problem = null;
      })
      .addCase(fetchProblemDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.problem = action.payload;
      })
      .addCase(fetchProblemDetail.rejected, (state, action) => {
        state.loading = false;
        state.error   = action.payload || 'Failed to load problem';
      });

    // ── run ──
    builder
      .addCase(runProblem.pending, (state) => {
        state.loadingAction = 'run';
        state.runResult     = null;
      })
      .addCase(runProblem.fulfilled, (state, action) => {
        state.loadingAction = null;
        state.runResult     = action.payload;
      })
      .addCase(runProblem.rejected, (state, action) => {
        state.loadingAction = null;
        state.runResult     = { success: false, error: action.payload || 'Run failed' };
      });

    // ── submit ──
    builder
      .addCase(submitProblem.pending, (state) => {
        state.loadingAction  = 'submit';
        state.submitResult   = null;
      })
      .addCase(submitProblem.fulfilled, (state, action) => {
        state.loadingAction  = null;
        state.submitResult   = action.payload;
      })
      .addCase(submitProblem.rejected, (state, action) => {
        state.loadingAction  = null;
        state.submitResult   = { accepted: false, error: action.payload || 'Submission failed' };
      });
  },
});

export const { clearResults, clearProblem } = problemDetailSlice.actions;
export default problemDetailSlice.reducer;