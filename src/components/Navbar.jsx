import { Link } from "react-router-dom";
import DarkModeButton from "./DarkModeButton";

const Navbar = () => {
  return (
    <nav className='sticky top-0 bg-gradient-to-r from-teal-500 from-10% via-teal-500 via-30% to-teal-800 to-90%  p-4'>
      <div className='flex items-center justify-between md:left-36'>
        <img src='/v.png' alt='Icon' className='w-[50px] h-[50px] rounded-lg' />

        <ul className='flex space-x-4'>
          <li class='text-white text-xl hover:text-customyellow hover:underline pt-2'>
            <Link to='/'>Home</Link>
          </li>
          <li class='text-white text-xl hover:text-customyellow hover:underline pt-2'>
            <Link to='/about'>About</Link>
          </li>
          <li class='text-white text-xl hover:text-customyellow hover:underline pt-2'>
            <Link to='/projects'>Projects</Link>
          </li>
          <li class='text-white text-xl hover:text-customyellow hover:underline pt-2'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <DarkModeButton />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
