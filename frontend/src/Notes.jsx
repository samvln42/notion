import React, { useState, useEffect } from "react";

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [storeId, setStoreId] = useState("");
    const [goodsId, setGoodsId] = useState("");
    const [userId, setUserId] = useState(""); 

  const addNote = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/note/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, storeId, goodsId, userId }),
      });

      if (response.ok) {
        const newNote = await response.json();
        setNotes([...notes, newNote]);
        setTitle("");
        setContent("");
        setStoreId("")
        setGoodsId("")
        setUserId("")
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
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
          <label htmlFor="storeId">Store ID:</label>
          <input
            type="text"
            id="storeId"
            value={storeId}
            onChange={(e) => setStoreId(e.target.value)}
            required
          />
          <br />
          <label htmlFor="goodsId">Goods ID:</label>
          <input
            type="text"
            id="goodsId"
            value={goodsId}
            onChange={(e) => setGoodsId(e.target.value)}
            required
          />
          <br />
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
          <br />
          <button type="submit">Add Note</button>
        </form>
      </div>
      <div>
        <h2>Notes</h2>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <strong>{note.title}</strong>: {note.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notes;
