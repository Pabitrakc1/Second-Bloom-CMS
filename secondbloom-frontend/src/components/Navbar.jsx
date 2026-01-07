import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">SecondBloom</div>

      <div className="nav-links">
       <Link to="/">Home</Link>
       <Link to="/stories">Stories</Link>
       <Link to="/add-story">Add Story</Link>
       <Link to="/activities">Activities</Link>
       <Link to="/food">Food</Link>
       <Link to="/residents">Residents</Link>
       <Link to="/assign-interests">Interests</Link>



      </div>

    </nav>
  );
}

export default Navbar;
