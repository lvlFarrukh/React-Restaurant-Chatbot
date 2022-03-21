import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import {extractResponseMessages} from "../utiles/extractMessage"

export const chatToBot = createAsyncThunk(
  'messages/chatToBot',
  async (text) => {
    return axios.post(`https://restaurant-chatapp.herokuapp.com/talktochatbot`, {text})
    .then((response) => {
      console.log("Response===>",response.data);
      return response.data;
    })
  }
)

export const messageSlice = createSlice({
  name: 'messages',
  initialState: {
    messages: [],
  },
  reducers: {
    addUserMessage: (state, {payload}) => {
      state.messages.push({
        type: "user",
        message: payload
      });
    },
  },
  extraReducers: {
    [chatToBot.fulfilled]: (state, action) => {
      state.messages.push(extractResponseMessages(action.payload, "bot"));
    }
  }
})

// Action creators are generated for each case reducer function
export const { initializeBot, addUserMessage } = messageSlice.actions
export default messageSlice.reducer