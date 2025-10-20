import { useEffect, useState } from "react";

export default function CursorTrail() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      const newTrail = {
        id: Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setTrails((prev) => [...prev, newTrail]);

      // remove trail after fade animation
      setTimeout(() => {
        setTrails((prev) => prev.filter((t) => t.id !== newTrail.id));
      }, 800);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`body { cursor: none; }`}</style>

      {/* White circle cursor */}
      <div
        style={{
          position: "fixed",
          top: pos.y,
          left: pos.x,
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          backgroundColor: "white",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          boxShadow: "0 0 10px rgba(255,255,255,0.8)",
          transition: "top 0.05s ease-out, left 0.05s ease-out",
        }}
      />

      {/* Smoke trail particles */}
      {trails.map((trail) => (
        <span
          key={trail.id}
          style={{
            position: "fixed",
            top: trail.y,
            left: trail.x,
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            backgroundColor: "#4db5ff",
            pointerEvents: "none",
            transform: "translate(-50%, -50%) scale(1)",
            animation: "smokeFade 0.8s ease-out forwards",
            zIndex: 9998,
            filter: "blur(4px)",
          }}
        />
      ))}

      {/* Smoke animation */}
      <style>{`
        @keyframes smokeFade {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
            filter: blur(4px);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(2.5);
            filter: blur(12px);
          }
        }
      `}</style>
    </>
  );
}
