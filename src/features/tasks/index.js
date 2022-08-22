import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "tarea1", description: "Priera description de la tarea 1" },
  { id: "2", name: "tarea2", description: "Priera description de la tarea 2" },
  { id: "3", name: "tarea3", description: "Priera description de la tarea 3" },
  { id: "4", name: "tarea4", description: "Priera description de la tarea 4" },
  { id: "5", name: "tarea5", description: "Priera description de la tarea 5" },
];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      let newTask = action.payload;
      state.push(newTask);
    },
    editTask: (state, action) => {
      state.map((el) =>
        el.id === action.payload.id
          ? ((el.name = action.payload.name),
            (el.description = action.payload.description))
          : el
      );
    },
    deleteTask: (state, action) => {
      return state.filter((el) => el.id !== action.payload);
    },
  },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
