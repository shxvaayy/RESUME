import { useEffect } from "react";

export default function StarsBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('/ai-chip-bg.png')"
    }}>
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}
