import React, { useState, useRef } from 'react'

const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleClick = () => {
        const nextIsPlaying = !isPlaying;
        setIsPlaying(nextIsPlaying);

        const videoEl = videoRef.current;
        if (nextIsPlaying) {
            videoEl.play();
        } else {
            videoEl.pause();
        }
    }

  return (
    <div>
        <button onClick={handleClick}>
            {isPlaying ? "Pause Video" : "Play Video"}
        </button><br /><br />
      
        <video 
            width="250" 
            ref={videoRef} 
            controls
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
        >
            <source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            type="video/mp4"
            />
        </video>
    </div>
  )
}

export default VideoPlayer
