import DropLink from './DropLink';
import { menuDrop } from '../constants/dropdown';

function SlideIn({menuOpen}) {
  return (
    <div className={`lg:hidden fixed z-20 top-0 right-0 h-full bg-white w-2/3 transition-transform ${
      menuOpen ? "translate-x-0" : "translate-x-full"
    } flex flex-col items-start px-6 pt-16 gap-y-5`}>
      {menuDrop.map(droplink => (
        <DropLink 
          key={droplink.name}
          name={droplink.name}
          stuff={droplink.stuff}
          type={droplink.type}
        />
      ))}

      <a href="#" className='block text-neutral-med-gray'>
        Careers
      </a>
      
      <a href="#" className='block text-neutral-med-gray'>
        About
      </a>

      <div className='flex flex-col w-full gap-y-3'>
        <button className='text-neutral-med-gray'>
          Login
        </button>

        <button className='text-neutral-med-gray border border-neutral-med-gray rounded-lg py-2 px-3'>
          Register
        </button>
      </div>
    </div>
  );
}

export default SlideIn;