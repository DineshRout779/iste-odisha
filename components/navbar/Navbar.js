import useWindowDimensions from 'helpers/useWindowDimensions';
import Image from 'next/image';
import Link from 'next/link';
import Logo from 'public/images/logo.png';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const { width } = useWindowDimensions();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let menuClass = isMenuOpen
    ? 'flex justify-center flex-col md:flex-row gap-1 md:gap-4 bg-blue-800 p-4 md:p-2 my-2 rounded-md text-white text-lg'
    : 'hidden';

  useEffect(() => {
    if (width > 768) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  }, [width]);

  return (
    <>
      <div className='container mx-auto max-w-[1200px] py-2 w-[95%]'>
        <div className='flex items-center justify-between md:justify-start gap-2'>
          <Image src={Logo} alt='' width='80' height='80' />
          <h1 className='text-xl text-center md:text-left md:text-4xl font-bold'>
            Indian Society For Technical Education Odisha
          </h1>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='btn btn-square bg-gray-100 hover:bg-gray-300 md:hidden border-none'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-5 h-5 stroke-current'
            >
              <path
                color='#333'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </button>
        </div>

        <div className={menuClass}>
          <Link
            href='http://www.isteonline.in'
            target='_blank'
            className='nav-menu p-1'
          >
            ISTE Official
          </Link>
          <Link href='/' className='nav-menu p-1'>
            Home
          </Link>
          <Link href='/committee' className='nav-menu p-1'>
            Committee
          </Link>
          <div className='dropdown dropdown-hover p-1'>
            <label tabIndex={0} className=' nav-menu cursor-pointer'>
              Membership
            </label>
            <ul
              tabIndex={0}
              className='dropdown-content w-72 menu shadow p-2 text-sm bg-white text-gray-900 rounded-md'
            >
              <li className=''>
                <Link
                  target='_blank'
                  href='https://forms.gle/Ei9EVRhTt5mD3PHg6'
                  className='text-zinc-900 font-bold hover:text-blue-800'
                >
                  ISTE Faculty Chapter Registration
                </Link>
              </li>
              <li>
                <Link
                  target='_blank'
                  href='https://forms.gle/dUvHZ6MA1wA3vpAm6'
                  className='text-zinc-900 font-bold hover:text-blue-800'
                >
                  ISTE Students Chapter Registration
                </Link>
              </li>
            </ul>
          </div>
          <Link href='/photoGallery' className='nav-menu cursor-pointer p-1'>Photo Gallery</Link>
          <p className='nav-menu cursor-pointer p-1'>Notice</p>
          <p className='nav-menu cursor-pointer p-1'>Chapters</p>
          <p className='nav-menu cursor-pointer p-1'>Contact Us</p>
        </div>
      </div>
    </>
  );
};
export default Navbar;
