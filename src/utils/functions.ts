import supabase from './supabase';
import React from 'react'

export const Signup = async (email: string, password:string) => {
  let { user, error } = await supabase.auth.signUp({
    email,
    password
  });
  if (user) {
    console.log(` Success ${user}`)
  } else {
    console.log(error)
  }
};

export const Signin = async (email: string, password:string) => {
  
let { user, error } = await supabase.auth.signIn({
  email,
  password
})

  if (user) {
    console.log(` Success ${user}`)
  } else {
    console.log(error)
  }
};

export const GetTodos = async ()  => {
  const todos = await supabase.from<Todo>("todos").select("*")
  if (todos.data) {
    return todos.data
    
  } else {
    console.log({todos})
  }
}

export const CreateTodo = async(text:string) => {
  const todo = await supabase.from<Todo>("todos").insert({text})
  console.log(todo)
}
