import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "@supabase/supabase-js";
import supabase from "../utils/supabase";

interface userDTO {
    email:string,
    password:string
}

export const Signup = createAsyncThunk(
    'users/signup',
    async (userdto:userDTO) => {
        const {email, password} = userdto
        const {user, error} = await supabase.auth.signUp({
          email,
          password
        });
        if (user) {

            return user
        }
        return error

      }
)

export const Signin = createAsyncThunk(
    'users/signin',
    async (userdto:userDTO, {rejectWithValue}) => {
        const {email, password} = userdto
        const response = await supabase.auth.signIn({email, password})
        if (response.error) {
            return rejectWithValue(response.error)
        }
        return response.user
        }
)

interface userState {
    user:User|null
}

const initialState = {
    user:supabase.auth.user(),
} as userState

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        logout:(state) => {
            state.user = null
            supabase.auth.signOut()
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(Signup.fulfilled, (state, action)=>{
            state.user = supabase.auth.user()
            
        }),
        builder.addCase(Signin.fulfilled, (state, action)=>{
            state.user = supabase.auth.user()
            
        }),
        builder.addCase(Signin.rejected, (state, action) => {
            
        })
    },
})

export default userSlice