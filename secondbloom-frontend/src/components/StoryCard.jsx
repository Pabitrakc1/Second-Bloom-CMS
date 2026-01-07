function StoryCard({ story }) {
  return (
    <div className="story-card">
      <h3 className="story-title">{story.title}</h3>

      <p className="story-content">
        {story.content}
      </p>

      <div className="story-footer">
        <span>— {story.resident?.name}</span>
        <span>{story.category}</span>
      </div>
    </div>
  );
}

export default StoryCard;
