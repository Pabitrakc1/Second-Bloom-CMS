import { useEffect, useState } from "react";
import { getAllResidents } from "../services/residentService";
import {
  getAllInterests,
  assignInterestsToResident
} from "../services/interestService";

function AssignInterests() {
  const [residents, setResidents] = useState([]);
  const [interests, setInterests] = useState([]);
  const [selectedResident, setSelectedResident] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]);

  useEffect(() => {
    // ✅ Fetch residents
    getAllResidents()
      .then((data) => {
        console.log("Residents fetched:", data);
        setResidents(data);
      })
      .catch((err) => console.error("Residents error:", err));

    // ✅ Fetch interests
    getAllInterests()
      .then((data) => {
        console.log("Interests fetched:", data);
        setInterests(data);
      })
      .catch((err) => console.error("Interests error:", err));
  }, []);

  const toggleInterest = (id) => {
    setSelectedInterests((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    );
  };

  const handleSave = async () => {
    if (!selectedResident) {
      alert("Please select a resident");
      return;
    }

    await assignInterestsToResident(selectedResident, selectedInterests);
    alert("Interests assigned successfully");
    setSelectedInterests([]);
  };

  return (
    <div className="form-page">
      <h2>Assign Interests</h2>

      {/* ✅ RESIDENT DROPDOWN */}
      <select
        value={selectedResident}
        onChange={(e) => setSelectedResident(e.target.value)}
      >
        <option value="">Select Resident</option>
        {residents.map((resident) => (
          <option key={resident.id} value={resident.id}>
            {resident.name}
          </option>
        ))}
      </select>

      {/* ✅ INTEREST CHECKBOXES */}
      <div className="interest-list">
        {interests.map((interest) => (
          <label key={interest.id}>
            <input
              type="checkbox"
              checked={selectedInterests.includes(interest.id)}
              onChange={() => toggleInterest(interest.id)}
            />
            {interest.name}
          </label>
        ))}
      </div>

      <button onClick={handleSave}>Save Interests</button>
    </div>
  );
}

export default AssignInterests;
