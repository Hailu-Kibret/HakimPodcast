import React from "react";
import { Card, Row, Col, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";

// Array of episode data
const episodes = [
  {
    videoId: "moGKHUi8dqQ", // YouTube video ID
    title: "የኢትዮጵያ ከተማ ግንባታ እና ፋብሪካ",
    description: "የኢትዮጵያ ከተማ ግንባታ እና ፋብሪካ",
  },

  {
    videoId: "cGjuPbAWVzU",
    title: "ያሰር ባገርሽ - ሲኢኦ ኦፍ ካክተስ አድቨርታይዚንግ",
    description: "ያሰር ባገርሽ - ሲኢኦ ኦፍ ካክተስ አድቨርታይዚንግ እና ማርኬቲንግ",
  },
  {
    videoId: "cGjuPbAWVzU",
    title: "ያሰር ባገርሽ - ሲኢኦ ኦፍ ካክተስ አድቨርታይዚንግ",
    description: "ያሰር ባገርሽ - ሲኢኦ ኦፍ ካክተስ አድቨርታይዚንግ እና ማርኬቲንግ",
  },
];

// Card component to display each episode
const EpisodeCard = ({ videoId, title, description, onClick }) => (
  <Card
    hoverable
    onClick={onClick}
    className="w-full flex flex-col justify-between"
    style={{ height: "100%", backgroundColor: "#f0f0f0" }}
  >
    {/* Embed YouTube video */}
    <iframe
      className="w-full h-48 mb-4"
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    ></iframe>

    {/* Title and Description */}
    <div className="flex flex-col flex-grow">
      <Link to={`/episode/${title}`} className="text-lg font-bold mb-2">
        {title}
      </Link>
      <p>{description}</p>
    </div>
  </Card>
);

const EpisodesGrid = () => {
  const navigate = useNavigate();

  // Function to navigate to the episode page
  const handleCardClick = (title) => {
    navigate(`/episode/${title}`);
  };

  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      {/* Page Title */}
      <div className="relative mb-8">
        <h2 className="text-center text-3xl font-bold mb-8">
          Explore all episodes
        </h2>
        {/* See More Button */}
        <Link to="/all-podcasts">
          <Button
            className="absolute top-0 right-0 mb-4 mr-4"
            type="primary"
            shape="round"
          >
            See More
          </Button>
        </Link>
      </div>

      {/* Grid Container */}
      <div className="max-w-6xl mx-auto">
        <Row gutter={[16, 16]}>
          {episodes.map((episode, index) => (
            <Col
              key={index}
              xs={24}
              sm={12}
              md={8} // Change this to "md={8}" to create 3 columns on medium screens
              className="flex"
            >
              <EpisodeCard
                videoId={episode.videoId}
                title={episode.title}
                description={episode.description}
                onClick={() => handleCardClick(episode.title)}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default EpisodesGrid;
