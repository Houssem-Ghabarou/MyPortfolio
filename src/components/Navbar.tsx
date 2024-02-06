import Mode from "./Mode";
const Navbar = () => {
  return (
    <nav className='bg-gray-500  flex border-solid  border-b-borderColor border-b-2  '>
      <div className='flex justify-between w-[100%]'>
        <ul className='flex text-primary text-base  	 '>
          <li className='border-r-borderColor border-r-2 pt-4 pb-4 pl-4 pr-40 	 '>
            <a href='/contact'>Houssem Ghabarou</a>
          </li>
          <li className='li-style border-bottom-effect'>
            <a href='/hello'>_hello</a>
          </li>
          <li className='li-style border-bottom-effect '>
            <a href='/about'>_about-me</a>
          </li>
          <li className='li-style border-bottom-effect '>
            <a href='/projects'>_projects</a>
          </li>
        </ul>

        <div className='flex'>
          <ul className='flex text-primary text-base 	'>
            <li className='p-4 border-l-2 border-r-2 border-bottom-effect  border-borderColor hover:text-secondary '>
              <a href='/contact'>_contact-me</a>
            </li>
          </ul>
          {/* dark, light, system mode */}
          <Mode />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
