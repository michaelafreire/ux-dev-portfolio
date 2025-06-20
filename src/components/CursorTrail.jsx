import React, { useEffect, useState, useRef } from 'react';

const CursorTrail = () => {
  const trailLength = 12;
  const [positions, setPositions] = useState(
    Array(trailLength).fill({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  );
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      setPositions((prevPositions) => {
        const newPositions = [];
        let x = mousePos.current.x;
        let y = mousePos.current.y;

        for (let i = 0; i < trailLength; i++) {
          const prev = prevPositions[i];
          const nextX = prev.x + (x - prev.x) * 0.3;
          const nextY = prev.y + (y - prev.y) * 0.3;
          newPositions.push({ x: nextX, y: nextY });
          x = nextX;
          y = nextY;
        }

        return newPositions;
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <>
      {positions.map((pos, idx) => (
        <div
          key={idx}
          style={{
            position: 'fixed',
            left: pos.x,
            top: pos.y,
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: '#D10074',
            opacity: 0.5,
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)',
            zIndex: 9999,
            transition: 'background-color 0.3s ease',
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
