function FoodSchedule() {
  const meals = [
    {
      time: "07:30 AM",
      meal: "Breakfast",
      items: "Idli, sambar, fruit, warm milk",
      note: "Low oil, easy to digest"
    },
    {
      time: "01:00 PM",
      meal: "Lunch",
      items: "Rice, dal, vegetable curry, curd",
      note: "Balanced and nutritious"
    },
    {
      time: "04:30 PM",
      meal: "Evening Snacks",
      items: "Herbal tea, biscuits, fruits",
      note: "Light refreshment"
    },
    {
      time: "07:30 PM",
      meal: "Dinner",
      items: "Chapati, vegetables, soup",
      note: "Light and calming"
    }
  ];

  return (
    <div className="food-page">
      <h2 className="section-title">Daily Food Schedule</h2>

      <div className="food-list">
        {meals.map((meal, index) => (
          <div key={index} className="food-card">
            <div className="food-time">{meal.time}</div>

            <div className="food-content">
              <h3>{meal.meal}</h3>
              <p>{meal.items}</p>
              <small>{meal.note}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodSchedule;
