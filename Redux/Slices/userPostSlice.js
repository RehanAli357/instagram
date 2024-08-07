import { createSlice } from "@reduxjs/toolkit";

const userPostSlice = createSlice({
  name: "userPost",
  initialState: {
   posts:[]
  },
  reducers: {
    setUserPosts(state, action) {
     state.posts=action.payload
    },
  },
});

export const { setUserPosts } = userPostSlice.actions;
export default userPostSlice.reducer;
