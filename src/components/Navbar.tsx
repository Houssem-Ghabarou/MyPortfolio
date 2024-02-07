// import Mode from "./Mode";
import menuClose from "../assets/menuClose.svg";
import menuOpen from "../assets/menuOpen.svg";
import { useState } from "react";
const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(true);
  const openMenuHandler = () => {
    setMenu(true);
  };

  const closeMenuHandler = () => {
    setMenu(false);
  };
  return (
    <nav className=' border-solid  md:flex md:border-b-borderColor md:border-b-2   '>
      <div className='flex flex-col md:flex-row justify-between w-[100%]'>
        <ul className='flex flex-col md:flex-row text-primary text-base   	 '>
          <li className='flex justify-between border-b-2 border-b-borderColor md:border-b-0 md:border-r-borderColor md:border-r-2 pt-4 pb-4  pl-4 pr-4 md:pl-4 md:pr-40 	 '>
            <a href='/contact'>Houssem Ghabarou</a>

            {!menu && (
              <button onClick={openMenuHandler}>
                <img src={menuOpen} alt='open-menu' className='md:hidden ' />
              </button>
            )}
            {menu && (
              <button onClick={closeMenuHandler}>
                <img src={menuClose} alt='open-menu' className='md:hidden ' />
              </button>
            )}
          </li>
          <li
            className={`${menu && "block  "} li-style  border-bottom-effect `}
          >
            <a href='/hello'>_hello</a>
          </li>
          <li className={`${menu && "block "} li-style  border-bottom-effect`}>
            <a href='/about'>_about-me</a>
          </li>
          <li className={`${menu && "block "} li-style  border-bottom-effect`}>
            <a href='/projects'>_projects</a>
          </li>
        </ul>

        <div className='flex '>
          <ul className='flex text-primary text-base  w-[100%]	'>
            <li className='contact-style'>
              <a href='/contact'>_contact-me</a>
            </li>
          </ul>
          {/* dark, light, system mode */}
          {/* <Mode /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
