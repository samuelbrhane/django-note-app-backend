import React, { useEffect, useState } from "react";
import axios from "axios";
import { NoteList } from "../components";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  const [notes, setNotes] = useState([]);

  // get all notes
  const getNotes = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/notes/`
    );
    setNotes(data);
  };

  // handle delete note
  const handleDelete = async (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    await axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}/api/notes/delete/${id}/`
    );
  };

  // fetch data at first render
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <section className="min-h-[350px] w-full relative">
      <div className="flex flex-col">
        {notes?.map((note) => (
          <NoteList key={note.id} note={note} handleDelete={handleDelete} />
        ))}
      </div>
      <Link to="/create">
        <AiOutlinePlus className="absolute right-2 bottom-2 text-4xl bg-blue-500 cursor-pointer rounded-full w-12 h-12 p-3 shadow-xl text-white" />
      </Link>
    </section>
  );
};

export default Home;
