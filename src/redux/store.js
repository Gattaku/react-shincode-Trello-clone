import { configureStore } from "@reduxjs/toolkit";
import taskReducedr from "./features/TaskSlice";

export const store = configureStore({
    reducer: {
        task: taskReducedr,
    },
})