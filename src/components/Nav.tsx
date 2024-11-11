import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from "react-router-dom";

interface NavLinksProps {
  isMobile: boolean;
  toggleNavbar?: () => void;
}

const NavLinks = ({ isMobile, toggleNavbar }: NavLinksProps) => {
  return (
    <>
        <li className={`${isMobile ? 'w-full border-b py-3' : ''}`}><NavLink to='/development' className={`${isMobile ? 'block text-center' : ''}`} onClick={toggleNavbar}>Web Development</NavLink></li>
        <li className={`${isMobile ? 'w-full border-b py-3' : ''}`}><NavLink to='/' className={`${isMobile ? 'block text-center' : ''}`} onClick={toggleNavbar}>Motion Design</NavLink></li>
        <li className={`${isMobile ? 'w-full border-b py-3' : ''}`}><NavLink to='/illustration' className={`${isMobile ? 'block text-center' : ''}`} onClick={toggleNavbar}>Illustration</NavLink></li>
        <li className={`${isMobile ? 'w-full border-b py-3' : ''}`}><NavLink to='/about' className={`${isMobile ? 'block text-center' : ''}`} onClick={toggleNavbar}>About</NavLink></li>
    </>
  );
};

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth)


  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return function cleanup() {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = width <= 768;


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
    <nav className='sticky top-0 z-[20] mx-auto flex h-16 items-center justify-between p-4 border border-b-1 bg-white'>
      <NavLink to='/'><h2 className='flex'>Alex Berger</h2></NavLink>

      <ul className='hidden md:flex gap-4'>
        <NavLinks isMobile={false} />
      </ul>

      <div className='md:hidden flex items-center'>
        <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
      </div>
    </nav>

    {isOpen && isSmallScreen && (
      <ul className='flex flex-col items-center bg-white border-b'>
        <NavLinks isMobile={true} toggleNavbar={toggleNavbar}/>
      </ul>
    )}
    </>
  );
};
