import { GoHome, GoPerson } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import logo from '/logo.png'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="">
      <div className="flex justify-around py-3 bg-black bg-opacity-10">
        <Link to={'/'}>
          <img src={logo} alt="logo" />
        </Link>

        <ul className="flex gap-x-12 items-center text-white">
          <Link to={'/'}> 
          <li className=" hover:border-b-2 rounded-xl border-[#c770f0] p-1 hover:text-[#cc70f0] focus-within:text-[#cc7060] text-xl items-center flex gap-x-1"><span><GoHome /></span>Home</li>
          </Link>

          <Link to={"/about"}> 
          <li className=" hover:border-b-2 rounded-xl border-[#c770f0] p-1 hover:text-[#cc70f0] focus-within:text-[#cc7060] text-xl items-center flex gap-x-1"><span><GoPerson /></span>About</li>
          </Link>

          <Link to={"/project"}> 
          <li className=" hover:border-b-2 rounded-xl border-[#c770f0] p-1 hover:text-[#cc70f0] focus-within:text-[#cc7060] text-xl items-center flex gap-x-1"><span><AiOutlineFundProjectionScreen /></span>Project</li>
          </Link>

          <Link to={"/resume"}> 
          <li className=" hover:border-b-2 rounded-xl border-[#c770f0] p-1 hover:text-[#cc70f0] focus-within:text-[#cc7060] text-xl items-center flex gap-x-1"><span><IoDocumentTextOutline /></span>Resume</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar