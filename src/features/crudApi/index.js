import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  db: [],
};

const crudApiSlice = createSlice({
  name: "crudApi",
  initialState,
  reducers: {
    readAllAction: (state, action) => {
      state.db = action.payload;
    },
    createAction: (state, action) => {
      state.db.push(action.payload);
    },
    deleteAction: (state, action) => {
        return {...state, db: state.db.filter((el)=> el.id !== action.payload)}
      
    },
    updateAction: (state, action) => {
      state.db.map((el) =>
        el.id === action.payload.id
          ? ((el.name = action.payload.name),
            (el.constellation = action.payload.constellation))
          : el
      );
    },
    noAction: (state, action) => {
      state = initialState
    },
  },
});

export default crudApiSlice.reducer;

export const {
  createAction,
  readAllAction,
  deleteAction,
  updateAction,
  noAction,
} = crudApiSlice.actions;
