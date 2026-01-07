import { useEffect, useState } from "react";
import { getAllStories } from "../services/storyService";
import StoryCard from "../components/StoryCard";

function StoryWall() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getAllStories()
      .then(data => setStories(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="story-wall">
      <h2 className="section-title">Story Wall</h2>

      {stories.length === 0 && <p>No stories yet.</p>}

      <div className="story-grid">
        {stories.map(story => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
}

export default StoryWall;
