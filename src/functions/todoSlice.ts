import { createAsyncThunk, createSlice, isPending } from "@reduxjs/toolkit";
import { User } from "@supabase/supabase-js";
import supabase from "../utils/supabase";


export const GetTodos = createAsyncThunk(
    'todos/get',
    async ()  => {
        const todos = await supabase.from<Todo>("todos").select("*")
        return todos.data
      }
)

export const CompleteTodo = createAsyncThunk(
    'todos/complete', 
    async(id:string) => {
        const todos = await supabase.from<Todo>('todos').
        update({completed:true})
        .match({id:id})
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
    loading:"idle"|"loading"
}

const initialState = {
    todos:[],
    loading:"idle"
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
                state.loading = "idle"
            }
        }),
        builder.addCase(GetTodos.pending, (state) => {
            state.loading = "loading"
        })
        builder.addCase(CreateTodo.fulfilled, (state,action) => {
            if (action.payload) {
                
                state.todos = [...state.todos, ...action.payload]
            }
            state.loading= "idle"

        })
        builder.addCase(CreateTodo.pending, (state) => {
            state.loading = "loading"
        }),

        builder.addCase(CompleteTodo.fulfilled, (state, action) => {
            if (action.payload) {
                const itemid = action.payload[0].id 
                state.todos = state.todos.filter((item) => {!(item.id == itemid)})
                state.todos = [...action.payload, ...state.todos]
            }
        })
    },
})

export default todoSlice