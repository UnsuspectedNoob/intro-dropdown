import React, { useState } from 'react'
import { closeMenu, heroDesktop, heroMobile, logo, menu } from './assets/images';
import images from './constants/brands';
import Overlay from './components/Overlay';
import SlideIn from './components/SlideIn';
import { menuDrop } from './constants/dropdown';
import DropLink from './components/DropLink';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className=''>
      {/* Blur overlay */}
      <Overlay 
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Slide in menu */}
      <SlideIn menuOpen={menuOpen}/>

      <nav className='p-5 flex justify-between items-center w-full'>
        <div className='flex gap-x-14'>
          <div>
            <img src={logo} alt="logo" />
          </div>


          <div className='hidden lg:flex text-neutral-med-gray gap-x-12'>
            {menuDrop.map(droplink => (
              <DropLink 
                key={droplink.name}
                name={droplink.name}
                stuff={droplink.stuff}
                type={droplink.type}
              />
            ))}

            <a href="#" className='hover:text-neutral-almost-black'>Careers</a>

            <a href="#" className='hover:text-neutral-almost-black'>About</a>
          </div>
        </div>

        <div className='hidden lg:flex gap-x-6 items-center text-neutral-med-gray'>
          <a href="#" className='text-sm hover:text-neutral-almost-black transition'>Login</a>

          <button className='border border-neutral-med-gray px-3 py-2 rounded-xl text-sm hover:text-neutral-almost-black hover:border-neutral-almost-black transition'>
            Register
          </button>
        </div>

        <div className='lg:hidden'>
          <img
            src={!menuOpen ? menu : closeMenu}
            alt="menu-button"
            onClick={() => setMenuOpen(prev => !prev)}
            className='-mt-2 relative z-50'
          />
        </div>
      </nav>
      
      {/* Hero image */}
      <img src={heroMobile} alt="hero-image" className='md:mx-auto lg:hidden' />

      {/* Hero section */}
      <div className='lg:grid grid-cols-2 lg:max-w-6xl gap-x-32 mx-auto'>

        <div className='text-center lg:text-left px-3 self-center'>
          <h1 className='text-neutral-almost-black text-4xl lg:text-7xl font-bold mt-8'>
            Make remote work
          </h1>
          <p className='text-neutral-med-gray mt-8 lg:text-base lg:pr-10'>
            Get your team in sync, no matter your location. Streamline processes, create team rituals,
            and watch productivity soar.
          </p>

          <button
            className='border border-transparent bg-neutral-almost-black text-neutral-almost-white py-3 rounded-xl px-6 my-8 font-bold hover:bg-transparent hover:text-neutral-almost-black hover:border-neutral-almost-black transition'
          >
            Learn more
          </button>

          <div className='flex gap-x-5 justify-between items-center px-3 mt-5 lg:mt-20'>
            {images.map(({src, name}) => (
              <div key={name}>
                <img src={src} alt={name} />
              </div>
            ))}
          </div>
        </div>

        <div className='hidden lg:block'>
          <img src={heroDesktop} alt="hero-desktop" />
        </div>
      </div>


    </div>
  );
}

export default App;