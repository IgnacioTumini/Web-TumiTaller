import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
  user: null,
  appointments: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.login = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.login = false;
    },
    setAppointment: (state, action) => {
      state.appointments = action.payload;
    },
    cancelAppointment: (state, action) => {
      state.appointments = state.appointments.map((appointment) =>
        appointment.id === action.payload.id ? action.payload : appointment
      );
    },
  },
});

export const { setUser, logoutUser, setAppointment, cancelAppointment } =
  userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectIsLoggedIn = (state) => state.user.login;

export default userSlice.reducer;
