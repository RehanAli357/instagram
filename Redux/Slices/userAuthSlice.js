import { createSlice } from "@reduxjs/toolkit";

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    email: "",
    password: "",
    id: "",
    image: "",
  },
  reducers: {
    setUserDetails(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.password = action.payload.password;
      state.image = action.payload.image;
    },
  },
});

export const { setUserDetails } = userAuthSlice.actions;
export default userAuthSlice.reducer;
