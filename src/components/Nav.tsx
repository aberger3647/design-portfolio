import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className='flex h-16 items-center justify-between p-4 border border-b-1 bg-white'>
      <Link to='/'><h2 className='flex'>Alex Berger</h2></Link>
      <ul className='flex gap-4'>
        <li><Link to='/development'>Web Development</Link></li>
        <li><Link to='/'>Motion Design</Link></li>
        <li><Link to='/illustration'>Illustration</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  );
};
