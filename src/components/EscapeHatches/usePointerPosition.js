import { useState, useEffect } from 'react'

export const usePointerPosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ 
        // x: e.clientX, 
        // y: e.clientY 
        x: e.pageX, 
        y: e.pageY
      });
    }

    window.addEventListener("pointermove", handleMove);
    // Cleanup function to remove the event listener
    return () => removeEventListener("pointermove", handleMove);
  }, []);

  return position;
}