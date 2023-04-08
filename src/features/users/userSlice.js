import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const userAPI = "http://localhost:3001/user";

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
    resetUser: (state, action) => {
      state.loginUser = {};
    },
  },
});

export const { setUserList, setLoginUser, resetUser } = userSlice.actions;

export default userSlice.reducer;

export function postUserData(data) {
  return async (dispatch) => {
    try {
      console.log(data);
      await axios.post(`${userAPI}/register`, data);
      // dispatch(fetchUserData());
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchUserData() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${userAPI}/get`);
      // dispatch(setUserList(response.data));
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
}

// export function verifyAccount() {
//   return async (dispatch) => {
//     try {
//       const response = await axios.patch(`${userAPI}/verify/account`);
//       console.log(response);
//     } catch (error) {}
//   };
// }

//FUNCTION untuk check kredibilitas token ke backend
export function checkToken(token) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${userAPI}/check-token`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data[0]);
      const { isAdmin, fullname, username, email, id_users } = response.data[0];
      dispatch(
        setLoginUser({
          isAdmin,
          fullname,
          username,
          isSuccess: true,
          email,
          id_users,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
}

export function loginCheck({ email, password }) {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${userAPI}/auth`, { email, password });
      console.log(response);
      if (response.data.isSuccess) {
        dispatch(
          setLoginUser({
            ...response.data.userData,
            isSuccess: response.data.isSuccess,
          })
        );
      }
      return response;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  };
}
