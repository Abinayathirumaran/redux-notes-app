import React, { useState, useEffect } from 'react'
import { addNote, updateNote } from '../redux/notesSlice';
import { useDispatch, useSelector } from 'react-redux';

function NotesForm() {

    const dispatch = useDispatch();
    const editNote = useSelector(state => state.notes.editNote);

    const [form, setForm] = useState({
        id: null,
        title: "",
        description: "",
        category: ""
    });

    useEffect(() => {
        if (editNote) {
            setForm({ ...editNote });          //When editNote changes, copy its data into the form
        }
    }, [editNote]);


    const handleSubmit = (e) => {
        e.preventDefault();


        if (!form.title || !form.description) return;


        if (editNote) {
            dispatch(updateNote(form));
        } else {
            dispatch(addNote({ ...form, id: Date.now() }));
        }



        console.log(form);
        setForm({
            id: null,
            title: "",
            description: "",
            category: ""
        });
    };


    return (
        <div className='bg-white shadow-xl rounded-2xl p-6 w-full max-w-xl mx-auto '>
            <h2 className='text-xl font-semibold mb-4 text-gray-800'>Create Note</h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className='w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none' type="text" placeholder='Title' />
                <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className='w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none' placeholder='Description'></textarea>
                <input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className='w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none' type="text" placeholder='Category' />
                <button className={`w-full  text-white rounded-lg font-md py-3 cursor-pointer ${editNote ? "bg-green-500  font-bold hover:bg-green-700 transition"  : "bg-indigo-500 font-bold hover:bg-indigo-700 transition"}`}>
                    {editNote ? "Update Note" : "Add Note"}
                </button>
            </form>
        </div>
    )
}

export default NotesForm