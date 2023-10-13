import { FaBars } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
// import { BsFillPersonFill } from 'react-icons/bs'
// import { BiSolidMicrophone } from 'react-icons/bi'
// import logo from "/logo/Frame.svg";
import logo from "/logo/download.png";

// import useDisclosure from "../hook/useDisclosure";
import Mike from "./Mike";
import { setSearch } from "../features/youtubeSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {toggleSideNav} from '../features/youtubeSlice'
import LogInSignIn from "./LogInSignIn";


function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { toggle } = useDisclosure();

  const setSearchData = (event) => {
    event.preventDefault();
    const data = event.target.search.value;
    dispatch(setSearch(data));
    navigate("/search");
  };

  const sideNavHandler = () =>{
      dispatch(toggleSideNav())
  }

  return (
    <>
      <nav className="px-2  xs:px-4 py-2  bg-white flex justify-between items-center w-full">
        <div className="flex gap-4 ">
          <FaBars
            onClick={sideNavHandler}
            className="react-icon w-[1.5rem] h-[1.5rem] cursor-pointer"
          />
          <img className="w-[2rem] " src={logo} />
        </div>
        <div className=" ">
          <div className="hidden sm:flex   gap-[0.5rem]  ">
            <div>
              <form
                onSubmit={setSearchData}
                className="border-2 flex  items-center rounded-2xl border-[#D3D3D3] overflow-hidden  max-w-[23rem] "
              >
                <input
                  name="search"
                  className="outline-none py-[0.44rem] px-[1.06rem]"
                  type="search"
                  placeholder="Search"
                />
                <GoSearch className="text-2xl mr-3 ml-3" />
              </form>
            </div>

            <Mike />
          </div>

          <Link to="/phonesearchbar">
            <GoSearch className="  sm:hidden react-icon w-[1.5rem] h-[1.5rem] cursor-pointer" />
          </Link>
        </div>

        <div className="flex items-center gap-3 text-[0.875rem] ">
            <LogInSignIn />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
