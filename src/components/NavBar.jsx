import { FaBars } from "react-icons/fa"
import { GoSearch } from "react-icons/go"
import { BsThreeDotsVertical } from "react-icons/bs"
import { BsFillPersonFill } from 'react-icons/bs'
import { BiSolidMicrophone } from 'react-icons/bi'
import logo from "/logo/Frame.png"
import Avatar from 'react-avatar';
import signIn from "/SignIn/SVG.svg"
function NavBar() {

  return (
    <>
      <nav className="px-4 py-2  bg-white flex justify-between items-center w-full">
        <div className="flex gap-4 border-2 border-blue-600">
          <FaBars className="react-icon w-[1.5rem] h-[1.5rem] cursor-pointer" />
          <img className="w-[5.6rem] " src={logo} />
        </div>
        <div className="border-2 border-red-500  ">

          {/* <div className="border-2 border-blue-600 flex  items-center gap-[0.5rem]  ">
            <div>
              <div className="border-2 flex  items-center rounded-2xl border-[#D3D3D3] overflow-hidden  max-w-[23rem] ">
                <input className="outline-none py-[0.44rem] px-[1.06rem]"
                  type="search" placeholder="Search" />
                <GoSearch className="text-2xl mr-5" />
              </div>
            </div>


            <div className="rounded-[1.25rem] bg-[#D3D3D3] p-[0.5rem]">
              <BiSolidMicrophone className="w-[2rem] h-[2rem] " />
            </div>

          </div> */}

          <GoSearch className="react-icon w-[1.5rem] h-[1.5rem] cursor-pointer" />

        </div>
        <div className="flex items-center gap-3 text-[0.875rem] border-2 border-orange-700 ">
          {/* <BsThreeDotsVertical className="react-icon w-[1.5rem] h-[1.5rem] cursor-pointer" /> */}
          <button className="px-[0.5rem] py-[0.5rem]  text-[#065FD4] border-2  rounded-[1.125rem] ">
            <Avatar size="30" round={true} src={signIn} />   Sign in</button>
        </div>
      </nav>
    </>
  )
}

export default NavBar
