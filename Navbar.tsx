
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

          <span className="ml-3 text-xl font-semibold">Hekto</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/home"} className="mr-5 text-[#FB2E86]">Home</Link>
          <Link href={"/"} className="mr-5 text-[#0D0E43] ">Pages</Link >
          <Link href={"/products"} className="mr-5 text-[#0D0E43] ">Products</Link >
          <Link href={"/blogs"}  className="mr-5 text-[#0D0E43] ">Blog</Link >
          <Link href={"/shop"} className="mr-5 text-[#0D0E43]">Shop</Link > 
          <Link href={"/contact"} className="mr-5 text-[#0D0E43] ">Contact</Link >
          <Link href={"/profile"} className="mr-5 text-[#0D0E43] ">Your Profile</Link >
        </nav>
        <input type="text" placeholder="search here" className="w-[200px]"></input>
        <IoSearchOutline />
      </div>
    </header>
  );
};

export default Navbar;
