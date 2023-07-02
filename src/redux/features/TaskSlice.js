import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

export const TaskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.items.push(action.payload);
        },
        changeTask: (state, action) => {
            state.items = action.payload;
        }
    },
})

export const { addTask, changeTask } = TaskSlice.actions;
export default TaskSlice.reducer;