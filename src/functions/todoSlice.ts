import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "@supabase/supabase-js";
import supabase from "../utils/supabase";


export const GetTodos = createAsyncThunk(
    'todos/get',
    async ()  => {
        const todos = await supabase.from<Todo>("todos").select("*")
        return todos.data
      }
)

export const CreateTodo = createAsyncThunk(
    'todos/create',
    async(text:string) => {
        const todo = await supabase.from<Todo>("todos").insert({text})
        return todo.data
      }
)

interface TodoState {
    todos:Todo[],
}

const initialState = {
    todos:[]
} as TodoState

const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {
        builder.addCase(GetTodos.fulfilled, (state,action) => {
            if (action.payload) {
                state.todos = action.payload
            }
        }),
        builder.addCase(CreateTodo.fulfilled, (state,action) => {
            if (action.payload) {

                state.todos = [...state.todos, ...action.payload]
            }
        })
    },
})

export default todoSlice