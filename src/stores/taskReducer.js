import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    tasks: JSON.parse(localStorage.getItem("taskItems")) || [],
};

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const task = {
                id: uuidv4(),
                text: action.payload.text,
                date: action.payload.date,
                priority: action.payload.priority,
                status:action.payload.status,
            };
            state.tasks.push(task);
            localStorage.setItem("taskItems", JSON.stringify(state.tasks));
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
            localStorage.setItem("taskItems", JSON.stringify(state.tasks));
        },
        updateTask: (state, action) => { 
            const { id, text, date, priority, status } = action.payload; 
            const taskIndex = state.tasks.findIndex(task => task.id === id); 
            if (taskIndex >= 0) 
                { 
                    state.tasks[taskIndex] = { ...state.tasks[taskIndex], text, date, priority, status }; 
                    localStorage.setItem("taskItems", JSON.stringify(state.tasks)); 
                } 
            }
    },
});

export const { addTask, removeTask, updateTask} = taskSlice.actions;
export default taskSlice.reducer;
