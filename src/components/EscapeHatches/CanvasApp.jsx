import React from 'react'
import { usePointerPosition } from './usePointerPosition'
import { useDelayedValue } from './useDelayedValue'

const CanvasApp = () => {
    const position1 = usePointerPosition();
    const position2 = useDelayedValue(position1, 100);
    const position3 = useDelayedValue(position2, 200);
    const position4 = useDelayedValue(position3, 100);
    const position5 = useDelayedValue(position4, 50);
 
  return (
    <div style={{minHeight: "100vh"}}>
        <Dot position={position1} opacity={1} />
        <Dot position={position2} opacity={0.8} />
        <Dot position={position3} opacity={0.6} />
        <Dot position={position4} opacity={0.4} />
        <Dot position={position5} opacity={0.2} /> 
    </div>
  )
}

export default CanvasApp


const Dot = ({ position, opacity }) => {

  return (
    <div style={{
        position: "absolute",
        backgroundColor: "red",
        borderRadius: "50%",
        opacity,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: "none",
        left: -20,
        top: -20,
        width: 40,
        height: 40,
    }} />
      
  )
}