import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Note = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [noteData, setNoteData] = useState("");
  const { id } = params;

  // get single note data
  const getNoteData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/notes/${id}/`
    );
    setNoteData(data?.body);
  };

  // handle note update
  const handleEdit = async (e) => {
    e.preventDefault();
    await axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/api/notes/update/${id}/`,
      { body: noteData }
    );
    navigate("/");
  };

  // fetch data
  useEffect(() => {
    getNoteData();
  }, [id]);

  return (
    <form onSubmit={handleEdit}>
      <textarea
        className="min-h-[350px] text-white bg-transparent p-3 outline-none w-full"
        value={noteData}
        onChange={(e) => setNoteData(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="bg-green-400 rounded text-white w-full py-2 text-center font-bold text-xl"
      >
        Edit
      </button>
    </form>
  );
};

export default Note;
