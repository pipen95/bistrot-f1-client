import React from 'react';
function News() {
  return (
    <div className="News">
      <h3>News</h3>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/c2jEcjLsk-s"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default News;
