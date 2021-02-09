import React from 'react'
function Video(props) {
    return (
      <>
        <div className="video-section">
          <iframe
            src="https://www.youtube.com/embed/r3fE6FQT82s"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </>
    );
}



export default Video

