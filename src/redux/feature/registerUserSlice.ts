import { createSlice } from "@reduxjs/toolkit";

export interface IRegistrant {
  id: string;
  profileImage: {
    name: string;
    data_uri: any;
  };
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  attending: string;
  adultsCount: number;
  kidsCount: number;
  kidAges: number[];
  message: string;
}

interface IRegisterState {
  userData: IRegistrant[];
}

export const initialState: IRegisterState = {
  userData: [],
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = [...state.userData, action.payload];
    },

    clearLoginState: (state) => {
      state.userData = [];
    },
  },
  //   extraReducers is async actions
});

export const { setUserData } = registerSlice.actions;

export default registerSlice.reducer;
