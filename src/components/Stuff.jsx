import React from 'react'

function Stuff({src, name, type}) {
  return (
    <div className='flex gap-x-3 items-center lg:ml-5'>
      {type === "objects" && (
        <div>
          <img src={src} alt="todo" />
        </div>
      )}

      <a href="#" className='text-neutral-med-gray'>{name}</a>
    </div>
  );
}

export default Stuff;