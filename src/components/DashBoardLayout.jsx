import HomeLayout from "../pages/HomePage/HomeLayout"
// import SearchPageLayout from "../pages/SearchPage/SearchPageLayout"
// import PropTypes from 'prop-types';
import NavBar from "./NavBar"

const DashBoardLayout = () => {
  return (
    <>
      <div>
        <NavBar />
        <div className="  ">
              <HomeLayout/>
              {/* <SearchPageLayout /> */}
        </div>
      </div>
    </>
  )
}

export default DashBoardLayout

// DashBoardLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

