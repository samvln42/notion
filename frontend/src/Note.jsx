import React, { useState, useEffect } from "react";

const Note = () => {
  const [notes, setNotes] = useState([]);
  const [storeid, setStoreid] = useState("");
  const [goodsid, setGoodsid] = useState("");
  const [userid, setUserid] = useState("");
  const [content, setContent] = useState("");

  const addNote = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/note/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ storeid, goodsid, userid }),
      });

      if (response.ok) {
        const newNote = await response.json();
        setNotes([...notes, newNote]);
        setStoreid("");
        setGoodsid("");
        setUserid("");
        setContent("");
      } else {
        console.error("Failed to add note");
      }
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const fetchNotes = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/note/");
      if (response.ok) {
        setNotes(await response.json());
      } else {
        console.error("Failed to fetch notes");
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <h1>Notes App</h1>
      <div>
        <h2>Add Note</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addNote();
          }}
        >
          <label htmlFor="storeid">Store ID:</label>
          <input
            type="text"
            id="storeid"
            value={storeid}
            onChange={(e) => setStoreid(e.target.value)}
            required
          />
          <br />
          <label htmlFor="goodsid">Good ID:</label>
          <input
            type="text"
            id="goodsid"
            value={goodsid}
            onChange={(e) => setGoodsid(e.target.value)}
            required
          />
          <br />
          <label htmlFor="userid">User ID:</label>
          <input
            type="text"
            id="userid"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
            required
          />
          <br />
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
          <br />
          <button type="submit">Add Note</button>
        </form>
      </div>
      <div>
        <h2>Notes</h2>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              {/* <strong>{note.title}</strong>: {note.content} */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Note;
