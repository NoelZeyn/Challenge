import React, { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/particles.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS.load('particles-js', 'particles.json', () => {
          console.log('particles.js config loaded');
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
      <div id="particles-js" className="fixed top-0 left-0 w-full h-full"></div>
  );
};

export default Test;
