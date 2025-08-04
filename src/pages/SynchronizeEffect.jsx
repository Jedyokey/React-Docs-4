import React from 'react'
import VideoApp from '../components/useEffect_Intro/VideoApp'
import MyChatRoom from '../components/useEffect_Intro/MyChatRoom'
import PlayApp from '../components/useEffect_Intro/PlayApp'
import Challenge1 from '../components/useEffect_Intro/Challenge1'
import Challenge2 from '../components/useEffect_Intro/Challenge2'
import Challenge3 from '../components/useEffect_Intro/Challenge3'
import Challenge4 from '../components/useEffect_Intro/Challenge4'

const SynchronizeEffect = () => {
  return (
    <div>
        <h1>Synchronizing with useEffect</h1>
        <VideoApp />
        <MyChatRoom />
        <PlayApp /><br />
        <Challenge1 />
        <Challenge2 />
        <Challenge3 />
        <Challenge4 />
    </div>
  )
}

export default SynchronizeEffect
