// import HomeLayout from "../pages/HomePage/HomeLayout"
import PlayVideoLayout from "../pages/VideoPlay/PlayVideoLayout"
// import SearchPageLayout from "../pages/SearchPage/SearchPageLayout"
// import PropTypes from 'prop-types';
import NavBar from "./NavBar"
// import PhoneSearchBar from "./PhoneSearchBar"

const DashBoardLayout = () => {
  return (
    <>
      <div>
        <NavBar />
        <div className="  ">
              {/* <HomeLayout/> */}
              {/* <SearchPageLayout /> */}
              {/* <PhoneSearchBar /> */}
              <PlayVideoLayout />
        </div>
      </div>
    </>
  )
}

export default DashBoardLayout



