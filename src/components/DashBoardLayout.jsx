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
        <div className="flex border-2 border-blue-700 ">
          <div className="border-2 border-orange-500 w-16">
            <MIniSideNav />
          </div>
          <div className="  overflow-scroll scrollbar  border-4 border-red-500 w-full  justify-self-start">
               {children}      
          </div>
        </div>
      </div>
    </>
  )
}

export default DashBoardLayout



