import { FaBars } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
// import { BsThreeDotsVertical } from "react-icons/bs"
// import { BsFillPersonFill } from 'react-icons/bs'
// import { BiSolidMicrophone } from 'react-icons/bi'
import logo from "/logo/Frame.svg";
import Avatar from "react-avatar";
import signIn from "/SignIn/SVG.svg";
import useDisclosure from "../hook/useDisclosure";
import Mike from "./Mike";
import { setSearch } from "../features/youtubeSlice";
import {useDispatch} from 'react-redux'

function NavBar() {
  const dispatch = useDispatch()
  const { toggle } = useDisclosure();

  const searchHandler = (event)=>{
    const searchItem = event.target.value;
    dispatch(setSearch(searchItem))
  }

  return (
    <>
      <nav className="px-4 py-2  bg-white flex justify-between items-center w-full">
        <div className="flex gap-4 ">
          <FaBars
            onClick={toggle}
            className="react-icon w-[1.5rem] h-[1.5rem] cursor-pointer"
          />
          <img className="w-[5.6rem] " src={logo} />
        </div>
        <div className=" ">
          <div className="hidden sm:flex   gap-[0.5rem]  ">
            <div>
              <div className="border-2 flex  items-center rounded-2xl border-[#D3D3D3] overflow-hidden  max-w-[23rem] ">
                <input
                  onChange={searchHandler}
                  className="outline-none py-[0.44rem] px-[1.06rem]"
                  type="search"
                  placeholder="Search"
                />
                <GoSearch className="text-2xl mr-3 ml-3" />
              </div>
            </div>

            <Mike />
          </div>

          <GoSearch className=" sm:hidden react-icon w-[1.5rem] h-[1.5rem] cursor-pointer" />
        </div>
        <div className="flex items-center gap-3 text-[0.875rem] ">
          {/* <BsThreeDotsVertical className="react-icon w-[1.5rem] h-[1.5rem] cursor-pointer" /> */}
          <button className="px-[0.5rem] py-[0.5rem]  text-[#065FD4] border-2  rounded-[1.125rem] ">
            <Avatar size="30" round={true} src={signIn} /> Sign in
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
