// import PlayVideoLayout from "../pages/VideoPlay/PlayVideoLayout"
// import SearchPageLayout from "../pages/SearchPage/SearchPageLayout"
// import PropTypes from 'prop-types';
import NavBar from "./NavBar"
// import PhoneSearchBar from "./PhoneSearchBar"
import MIniSideNav  from './MIniSideNav'

const DashBoardLayout = ({children}) => {
  return (
    <>
      <div>
        <NavBar />
        <div className="flex ">
          <div className="w-16 hidden  sm:flex">
            <MIniSideNav />
          </div>
          <div className="  overflow-scroll scrollbar   w-full  justify-self-start">
               {children}      
          </div>
        </div>
      </div>
    </>
  )
}

export default DashBoardLayout



