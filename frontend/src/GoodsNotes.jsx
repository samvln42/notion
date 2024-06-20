import React, { useState, useEffect } from "react";

const GoodsNotes = () => {
  const [notes, setNotes] = useState([]);
  const [storeID, setStoreID] = useState("");
  const [goodsID, setGoodsID] = useState("");
  const [userID, setUserID] = useState("");
  const [content, setContent] = useState("");

  const addNote = async () => {
    try {
      const payload = { storeID, goodsID, userID, content };
      console.log("Request Payload:", payload);
      const response = await fetch(import.meta.env.API_DJANGO + "/api/notes/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const newNote = await response.json();
        setNotes([...notes, newNote]);
        setStoreID("");
        setGoodsID("");
        setUserID("");
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
      const response = await fetch(import.meta.env.API_DJANGO + "/api/notes/");
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
      <h1>Notes Goods App</h1>
      <div>
        <h2>Add Note</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addNote();
          }}
        >
          <label htmlFor="storeID">store ID:</label>
          <input
            type="text"
            id="storeID"
            value={storeID}
            onChange={(e) => setStoreID(e.target.value)}
            required
          />
          <br />
          <label htmlFor="goodsID">goods ID:</label>
          <input
            type="text"
            id="goodsID"
            value={goodsID}
            onChange={(e) => setGoodsID(e.target.value)}
            required
          />
          <br />
          <label htmlFor="userID">user ID:</label>
          <input
            type="text"
            id="userID"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
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
              <span>store ID: {note.store_id}</span>
              <span>goods ID: {note.goods_id}</span>
              <span>user ID: {note.user_id}</span>
              <span>commend: {note.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GoodsNotes;
