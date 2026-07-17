import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-0 h-64 w-64 rounded-full bg-pink-400/10 blur-3xl transition-all duration-300"
      style={{
        left: pos.x - 120,
        top: pos.y - 120,
      }}
    />
  );
}