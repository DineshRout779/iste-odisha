import Image from "next/image";
import Logo from "public/images/logo.png";
const Navbar = () => {
  return (
    <>
      <div className="container mx-auto px-10 py-2">
        <div class="flex items-center gap-2">
          <Image src={Logo} alt="" width="80" height="80" />
          <h1 className="text-4xl font-bold">
            Indian Society For Technical Education Odisha
          </h1>
        </div>
        <div class="flex justify-center gap-4 bg-blue-500 p-2 my-2 rounded-md text-white text-lg">
          <p className="nav-menu cursor-pointer">Home</p>
          <p className="nav-menu cursor-pointer">Management</p>
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="m-1 nav-menu">
              Membership
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-gray-100 text-gray-900 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
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
