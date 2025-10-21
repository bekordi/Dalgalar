import { useRef } from "react";

export default function WaterRipple() {
  const containerRef = useRef(null);

  const handleClick = (e) => {
    const container = containerRef.current;
    const ripple = document.createElement("span");
    const rect = container.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = "absolute bg-ocean-dark rounded-full animate-ripple w-8 h-8 opacity-70 pointer-events-none";
    container.appendChild(ripple);

    setTimeout(() => ripple.remove(), 800);
  };

  return (
    <main
      ref={containerRef}
      onClick={handleClick}
      className="relative flex items-center justify-center min-h-screen bg-ocean-light overflow-hidden select-none"
    >
      <h1 className="text-4xl font-bold text-ocean-dark drop-shadow-md">🌊 Dokun ve Dalgayı Gör</h1>
    </main>
  );
}