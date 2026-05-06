import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteNote, setEditNote } from '../redux/notesSlice';
import { FaTrash, FaEdit } from "react-icons/fa";

function NotesList() {
    const notes = useSelector(state => state.notes.usernotes);

    const dispatch = useDispatch();

    if (notes.length === 0) {
        return (
            <div className='text-center text-gray-500 mt-4'>
                No Notes Yet . Start Adding Now
            </div>
        )
    }
    console.log(notes);
    return (
        <div className='mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                notes.map(data => (


                    <div key={data.id} className='bg-white relative shadow-md rounded-2xl p-5 h-[250px] max-w-[300px] flex flex-col justify-between overflow-hidden border-t-4 border-indigo-500 '>
                        <h3 className='text-lg font-semibold text-gray-800 line-clamp-2'>{data.title}</h3>
                        <p className='text-gray-600 text-sm line-clamp-3'>{data.description}</p>
                        <span className='absolute top-1 right-4 mt-4 w-fit inline-block text-xs bg-indigo-600 text-white px-2 py-1 rounded-full'>{data.category}</span>

                        <div className='flex gap-3 justify-between'>
                            <button onClick={() => dispatch(deleteNote(data.id))} className='mt-2 w-full bg-red-100 text-red-600 rounded-lg text-sm py-2 flex justify-around cursor-pointer'><FaTrash /> Delete</button>
                            <button onClick={() => dispatch(setEditNote(data))} className="mt-2 w-full bg-blue-100 text-blue-600 rounded-lg text-sm py-2 flex justify-around cursor-pointer ">
                               <FaEdit /> Edit
                            </button>
                        </div>

                    </div>
                ))
            }

        </div>
    )
}

export default NotesList