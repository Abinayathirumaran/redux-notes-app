import { createSlice } from "@reduxjs/toolkit";

//Global state
const initialState = {
    usernotes: [],
    editNote: null
};

const notesSlice = createSlice({
    // 3 parameters
    name: "notes",
    initialState,
    reducers: {
        //CRUD
        //addNote , useSelector, updateNote, Delete
        addNote: (state, action) => {
            state.usernotes.push(action.payload);
        },
        deleteNote: (state, action) => {
            state.usernotes = state.usernotes.filter(
                (data) => data.id !== action.payload);
        },
        setEditNote: (state, action) => {
            state.editNote = action.payload;
        },
        updateNote: (state, action) => {
            const index = state.usernotes.findIndex(
                note => note.id === action.payload.id
            );

            if (index !== -1) {
                state.usernotes[index] = { ...action.payload };
            }
            state.editNote = null;
        }

    }
});

export const { addNote, deleteNote, setEditNote, updateNote } = notesSlice.actions;
export default notesSlice.reducer;
