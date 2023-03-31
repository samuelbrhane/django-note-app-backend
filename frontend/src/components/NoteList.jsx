import React from "react";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

const NoteList = ({ note, handleDelete }) => {
  const { id, body } = note;

  return (
    <div className="flex items-center border-b-2 justify-between hover:bg-gray-500">
      <Link className="px-4 text-white py-2 text-xl  flex-1" to={`/note/${id}`}>
        {body.length > 100 ? body.slice(0, 100) + "..." : body}
      </Link>
      <AiFillDelete
        className="w-5 text-red-400 cursor-pointer hover:scale-[1.03]"
        onClick={() => handleDelete(id)}
      />
    </div>
  );
};

export default NoteList;
