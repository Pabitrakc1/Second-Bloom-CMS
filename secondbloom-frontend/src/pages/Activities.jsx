function Activities() {
  const activities = [
    {
      time: "06:30 – 07:30",
      title: "Morning Walk",
      description: "Gentle walk in the garden with fresh air."
    },
    {
      time: "08:00 – 09:00",
      title: "Yoga & Stretching",
      description: "Light movements for flexibility and balance."
    },
    {
      time: "10:30 – 12:00",
      title: "Creative Time",
      description: "Clay art, painting, and handcraft activities."
    },
    {
      time: "15:00 – 16:00",
      title: "Gardening",
      description: "Caring for plants and growing vegetables together."
    },
    {
      time: "17:30 – 18:30",
      title: "Story Sharing",
      description: "Listening, sharing, and connecting through stories."
    }
  ];

  return (
    <div className="activities-page">
      <h2 className="section-title">Daily Activities</h2>

      <div className="activity-list">
        {activities.map((activity, index) => (
          <div key={index} className="activity-card">
            <div className="activity-time">{activity.time}</div>
            <div>
              <h3 className="activity-title">{activity.title}</h3>
              <p className="activity-desc">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activities;
