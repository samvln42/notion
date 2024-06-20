import React, { useState } from "react";
import axios from "axios";

const AddNoteForm = () => {
  const [formData, setFormData] = useState({
    storeid: "",
    goodsid: "",
    userid: "",
    commend: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.API_DJANGO}
        /api/goodsnote/`,
        formData
      );
      console.log(response.data); // Handle the response as need
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Store ID:
        <input
          type="text"
          name="storeid"
          value={formData.storeid}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Goods ID:
        <input
          type="text"
          name="goodsid"
          value={formData.goodsid}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        User ID:
        <input
          type="text"
          name="userid"
          value={formData.userid}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Comment:
        <textarea
          name="commend"
          value={formData.commend}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default AddNoteForm;
