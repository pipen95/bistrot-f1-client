import React from 'react';
function News() {
  return (
    <div className="News">
      <div className="twitter">
        <a
          className="twitter-timeline"
          data-height="600"
          data-theme="dark"
          href="https://twitter.com/F1?ref_src=twsrc%5Etfw"
        >
          Tweets by F1
        </a>
        ;
      </div>
    </div>
  );
}

export default News;
