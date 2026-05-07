import { createSlice } from '@reduxjs/toolkit';

const INITIAL_MESSAGE = {
  role: 'model',
  parts: [{ text: "Hello! I'm your DSA tutor. How can I assist you today?" }],
  animate: false,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    // { [problemId]: Message[] }
    messagesByProblem: {},
    // { [problemId]: boolean }
    thinkingByProblem: {},
  },
  reducers: {
    initChat(state, action) {
      const { problemId } = action.payload;
      if (!state.messagesByProblem[problemId]) {
        state.messagesByProblem[problemId] = [INITIAL_MESSAGE];
      }
    },
    addMessage(state, action) {
      const { problemId, message } = action.payload;
      if (!state.messagesByProblem[problemId]) {
        state.messagesByProblem[problemId] = [INITIAL_MESSAGE];
      }
      state.messagesByProblem[problemId].push(message);
    },
    clearMessageAnimation(state, action) {
      const { problemId, index } = action.payload;
      const msg = state.messagesByProblem[problemId]?.[index];
      if (msg && msg.animate) {
        msg.animate = false;
      }
    },
    setThinking(state, action) {
      const { problemId, thinking } = action.payload;
      state.thinkingByProblem[problemId] = thinking;
    },
    clearChat(state, action) {
      const { problemId } = action.payload;
      state.messagesByProblem[problemId] = [INITIAL_MESSAGE];
      state.thinkingByProblem[problemId] = false;
    },
  },
});

export const { initChat, addMessage, clearMessageAnimation, setThinking, clearChat } = chatSlice.actions;
export default chatSlice.reducer;