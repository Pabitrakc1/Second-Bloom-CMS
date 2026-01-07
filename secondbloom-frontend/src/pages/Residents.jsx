import { useEffect, useState } from "react";
import { getAllResidents } from "../services/residentService";

function Residents() {
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllResidents()
      .then((data) => {
        console.log("Residents loaded:", data);
        setResidents(data);
      })
      .catch((err) => {
        console.error("Residents error:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading residents...</p>;
  }

  return (
    <div className="residents-page">
      <h2 className="section-title">Our Residents</h2>

      {residents.length === 0 ? (
        <p className="empty-text">
          No residents added yet 🌱
        </p>
      ) : (
        <div className="residents-grid">
          {residents.map((resident) => (
            <div key={resident.id} className="resident-card">
              <img
                src="/images/elder-avatar.png"
                alt="resident"
                className="resident-avatar"
              />

              <h3>{resident.name}</h3>
              <p>Age: {resident.age}</p>
              <p>Room: {resident.roomNumber}</p>

              {resident.healthNotes && (
                <small className="health-note">
                  {resident.healthNotes}
                </small>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Residents;
