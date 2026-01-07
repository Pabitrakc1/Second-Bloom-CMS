import { useEffect, useState } from "react";
import api from "../services/api";
import { getAllResidents } from "../services/residentService";

function AddStory() {
  const [residents, setResidents] = useState([]);
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    mood: "",
    residentId: ""
  });

  useEffect(() => {
    getAllResidents()
      .then(data => setResidents(data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post(
        `/stories/resident/${form.residentId}`,
        {
          title: form.title,
          content: form.content,
          category: form.category,
          mood: form.mood
        }
      );

      alert("Story shared with care 🌸");

      setForm({
        title: "",
        content: "",
        category: "",
        mood: "",
        residentId: ""
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="form-page">
      <h2>Share a Story</h2>

      <form onSubmit={handleSubmit} className="story-form">

        {/* Resident Dropdown */}
        <select
          name="residentId"
          value={form.residentId}
          onChange={handleChange}
          required
        >
          <option value="">Select Resident</option>
          {residents.map(resident => (
            <option key={resident.id} value={resident.id}>
              {resident.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="title"
          placeholder="Story title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="content"
          placeholder="The story..."
          rows="6"
          value={form.content}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category (e.g. Peaceful Moments)"
          value={form.category}
          onChange={handleChange}
        />

        <input
          type="text"
          name="mood"
          placeholder="Mood (e.g. Reflective)"
          value={form.mood}
          onChange={handleChange}
        />

        <button type="submit">Share Story</button>
      </form>
    </div>
  );
}

export default AddStory;
