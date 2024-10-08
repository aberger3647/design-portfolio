import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className='flex h-16 justify-between p-4 border border-b-1'>
      <h2 className='flex items-center'>Alex Berger</h2>
      <ul className='flex gap-4 items-center'>
        <li><Link to='/'>Motion Design</Link></li>
        <li><Link to='/illustration'>Illustration</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  );
};
