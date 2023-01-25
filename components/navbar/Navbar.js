import Image from "next/image";
import Link from "next/link";
import Logo from "public/images/logo.png";
const Navbar = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1200px] py-2 w-[95%]">
        <div class="flex items-center gap-2">
          <Image src={Logo} alt="" width="80" height="80" />
          <h1 className="text-4xl font-bold">
            Indian Society For Technical Education Odisha
          </h1>
        </div>
        <div class="flex justify-center gap-4 bg-blue-800 p-2 my-2 rounded-md text-white text-lg">
          <Link href="http://www.isteonline.in" target="_blank">
            <p className="nav-menu cursor-pointer">ISTE Official</p>
          </Link>
          <Link href="/">
            <p className="nav-menu cursor-pointer">Home</p>
          </Link>
          <Link href="/committee">
            <p className="nav-menu cursor-pointer">Committee</p>
          </Link>
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="m-1 nav-menu">
              Membership
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-white text-gray-900 rounded-md w-52"
            >
              <li className="">
                <Link target="_blank" href="https://forms.gle/Ei9EVRhTt5mD3PHg6">
                  <p className="p-2">
                    ISTE Faculty Chapter Registration
                  </p>
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://forms.gle/dUvHZ6MA1wA3vpAm6">
                  <p className="p-2">
                    ISTE Students Chapter Registration
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <p className="nav-menu cursor-pointer">Gallery</p>
          <p className="nav-menu cursor-pointer">Notice</p>
          <p className="nav-menu cursor-pointer">Contact Us</p>
        </div>
      </div>
    </>
  );
};
export default Navbar;
