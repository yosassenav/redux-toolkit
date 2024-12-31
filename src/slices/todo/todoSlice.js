import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {}
    }
})

//Action creators are generated for each reducer function
export const { addTodo } = todoSlice.actions;