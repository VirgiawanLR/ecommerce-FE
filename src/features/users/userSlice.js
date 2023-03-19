import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userAPI = "http://localhost:2000/user";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userList: [],
    loginUser: {},
  },
  reducers: {
    setUserList: (state, action) => {
      state.userList = action.payload;
    },
    setLoginUser: (state, action) => {
      state.loginUser = action.payload;
    },
  },
});

export const { setUserList, setLoginUser } = userSlice.actions;

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

export function loginCheck({ email, password }) {
  return async (dispatch) => {
    const options = {
      method: "GET",
      url: userAPI,
      params: {
        email,
      },
    };
    try {
      const response = await axios.request(options);
      if (response.data.length) {
        if (password === response.data[0].password) {
          delete response.data[0].password;
          dispatch(
            setLoginUser({
              ...response.data[0],
              isSuccessed: true,
              message: "success",
            })
          );
        } else {
          delete response.data[0].password;
          dispatch(
            setLoginUser({
              ...response.data[0],
              isSuccessed: false,
              message: "email and password not match",
            })
          );
        }
      } else {
        dispatch(
          setLoginUser({
            isSuccessed: false,
            message: "email not yet register",
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
}
