import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [note, setNote] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("note", note);
    const { data } = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/notes/create/`,
      { note }
    );
    console.log("data: " + JSON.stringify(data));
    navigate("/");
  };

  return (
    <div className="text-white">
      <h1 className="text-center py-2 font-bold text-xl">Create Note</h1>
      <form className="w-full px-2" onSubmit={handleSubmit}>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full h-[230px] bg-transparent outline-none border-[0.5px] border-blue-500 px-4 py-2"
        ></textarea>
        <div className="flex justify-center">
          <button type="submit" className="px-12 py-2 rounded bg-blue-400 mb-1">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
