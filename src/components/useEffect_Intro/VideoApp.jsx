import React, { useState, useRef, useEffect } from 'react'

const VideoApp = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [text, setText] = useState("");

  return (
    <div>
        <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
        /><br />
        <button onClick={() => setIsPlaying(!isPlaying)} style={{margin: "20px 0"}}>
            {isPlaying ? "Pause" : "Play"} Video
        </button>

        <VideoPlayer 
            isPlaying={isPlaying}
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
      
    </div>
  )
}

export default VideoApp

const VideoPlayer = ({ isPlaying, src }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            videoRef.current.play();
            console.log("Video is playing");
        } else {
            videoRef.current.pause();
            console.log("Video is paused"); 
        }
    }, [isPlaying]);

    return (
        <div style={{ width: "300px" }}>
            <video 
                src={src} 
                ref={videoRef} 
                style={{ width: "100%" }}
                loop 
                playsInline 
                controls 
            />
        </div>
    )
}