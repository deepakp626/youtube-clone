import DashBoardLayout from "../../components/DashBoardLayout";
import FilterBar from "../../components/FilterBar";
// import Main from "./components/Main";
// import SideNav from '../../components/SideNav'
import VideoCmp from '../../components/VideoCmp'

// import { useGetAllDataQuery } from "../../services/fetchYoutubeData";


const HomeLayout = () => {
  // const res = useGetAllDataQuery();
  // console.log(res)


  return (
    <>
      <DashBoardLayout>
        <div className="grid  grid-flow-col">
          <div className="">
            {/* <SideNav /> */}
          </div>
          <div className=" h-[50rem] overflow-scroll scrollbar">
            <FilterBar />
            <div>
            <VideoCmp />
            </div>
          </div>
        </div>
      </DashBoardLayout>
    </>
  );
};

export default HomeLayout;
