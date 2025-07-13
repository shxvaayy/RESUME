import { useEffect } from "react";

export default function StarsBackground() {
  useEffect(() => {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;

    const numberOfStars = 200;
    
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 4 + 's';
      starsContainer.appendChild(star);
    }

    return () => {
      if (starsContainer) {
        starsContainer.innerHTML = '';
      }
    };
  }, []);

  return <div className="stars" id="stars" />;
}
