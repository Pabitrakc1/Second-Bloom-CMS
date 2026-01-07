import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import StoryWall from "./pages/StoryWall";
import AddStory from "./pages/AddStory";
import Activities from "./pages/Activities";
import FoodSchedule from "./pages/FoodSchedule";
import Residents from "./pages/Residents";
import AssignInterests from "./pages/AssignInterests";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<StoryWall />} />
        <Route path="/add-story" element={<AddStory />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/food" element={<FoodSchedule />} />
        <Route path="/residents" element={<Residents />} />
        <Route path="/assign-interests" element={<AssignInterests />} />
      </Routes>
    </>
  );
}

export default App;
