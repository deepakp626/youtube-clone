// import PlayVideoLayout from "../pages/VideoPlay/PlayVideoLayout"
// import SearchPageLayout from "../pages/SearchPage/SearchPageLayout"
// import PropTypes from 'prop-types';
import NavBar from "./NavBar";
// import PhoneSearchBar from "./PhoneSearchBar"
import MIniSideNav from "./MIniSideNav";
import SideNav from "./SideNav";
import {useSelector} from "react-redux"

const DashBoardLayout = ({ children }) => {
  const {sideNav_toggled} = useSelector((state) => state.youtube)
  return (
    <>
      <div>
        <NavBar />
        <div className="flex ">
          <div className="relative bg-white">
           { sideNav_toggled &&  <SideNav />  }
          </div>
          <div className="w-16 hidden  sm:flex">
            <MIniSideNav />
          </div>
          <div className="  overflow-scroll scrollbar   w-full  justify-self-start">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardLayout;
