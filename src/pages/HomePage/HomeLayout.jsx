import DashBoardLayout from "../../components/DashBoardLayout";
import FilterBar from "../../components/FilterBar";
import Main from "./components/Main";
// import SideNav from '../../components/SideNav'

const HomeLayout = () => {
  return (
    <>
      <DashBoardLayout>
        <div className="grid  grid-flow-col">
          <div className="">
            {/* <SideNav /> */}
          </div>
          <div className=" h-[50rem] overflow-scroll scrollbar">
            <FilterBar />
            <Main />
          </div>
        </div>
      </DashBoardLayout>
    </>
  );
};

export default HomeLayout;
