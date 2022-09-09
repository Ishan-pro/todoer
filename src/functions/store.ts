import { configureStore } from '@reduxjs/toolkit'
import loadingSlice from './loadingSlice'
import todoSlice from './todoSlice'
import userSlice from './userSlice'
// ...


export const store = configureStore({
  reducer: {
    users:userSlice.reducer,
    todos:todoSlice.reducer,
    loading:loadingSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch