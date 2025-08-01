import React, { useState, useRef, useEffect } from 'react'

const VideoApp = () => {
    const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
        <button onClick={() => setIsPlaying(!isPlaying)} className='play-btn'>
            {isPlaying ? "Pause" : "Play"}
        </button>

        <VideoPlayer
            isPlaying={isPlaying} 
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
    </div>
  )
}

export default VideoApp


const VideoPlayer = ({ src, isPlaying }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }, [isPlaying]);

    return (
        <video ref={ref} src={src} loop playsInline className='video' />
    )
}