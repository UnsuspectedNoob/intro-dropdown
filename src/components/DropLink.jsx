import React, { useState } from 'react'
import { arrowDown, arrowUp } from '../assets/images';
import Stuff from './Stuff';

function DropLink({name, stuff, type}) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className='relative'>
      <div className='flex items-center group' onClick={() => setClicked(prev => !prev)}>
        
        <button className='text-neutral-med-gray group-hover:text-neutral-almost-black'>
          {name}
        </button>
        
        <div>
          <img src={!clicked ? arrowDown : arrowUp} alt="arrow" className='ml-3 group-hover:fill-neutral-almost-black'/>
        </div>
      </div>

      <div
        className={
          `${
            clicked ? 'flex' : "hidden"
          } pl-6 flex-col gap-y-4 mt-6 lg:shadow-xl lg:absolute bg-white lg:pl-0 rounded-lg lg:justify-center lg:w-36 lg:p-3 ${
            name=="Features" ? "-left-10": ''
          }`
        }
      >
        {stuff.map(({icon, stuffName}) => (
          <Stuff
            key={stuffName}
            name={stuffName}
            src={icon}
            type={type}
          />
        ))}
      </div>
    </div>
  );
}

export default DropLink;