import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userAPI = "http://localhost:2000/user";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userList: [],
  },
  reducers: {
    setUserList: (state, action) => {
      state.userList = action.payload;
    },
  },
});

export const { setUserList } = userSlice.actions;

export default userSlice.reducer;

export function postUserData(data) {
  return async (dispatch) => {
    try {
      await axios.post(userAPI, data);
      dispatch(fetchUserData());
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchUserData() {
  return async (dispatch) => {
    try {
      const response = await axios.get(userAPI);
      dispatch(setUserList(response.data));
    } catch (error) {
      console.error(error);
    }
  };
}
