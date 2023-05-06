import React from 'react'

function Overlay({menuOpen, setMenuOpen}) {
  return (
    <div 
      className={`lg:hidden fixed left-0 top-0 w-full h-full bg-neutral-almost-black ${
        menuOpen ? "opacity-70 z-10 transition" : "opacity-0 -z-10"
      }`}

      onClick={() => {
        if (menuOpen) {
          setMenuOpen(prev => !prev);
        }
      }}
    />
  );
}

export default Overlay;