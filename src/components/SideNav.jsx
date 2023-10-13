import { BiSolidHome } from "react-icons/bi";
import Shorts from "/icon/shorts.svg";
import Subscription from "/icon/Subscriptions.svg";
import history from "/icon/history.svg";
import { useSelector } from "react-redux";
import Library from '/icon/Library.svg'
import { Link } from "react-router-dom";

const SideNav = () => {
  const { sideNav_toggled } = useSelector((state) => state.youtube);
  console.log({ sideNav_toggled });
  // const watch = [
  //   {
  //     text: "Home",
  //     icon: `${BiSolidHome}`,
  //     path: "/",
  //   },
  //   {
  //     text: "Shorts",
  //     icon: `${Shorts}`,
  //     path: "/",
  //   },
  // ]

  return (
    <>
      <div
        className={`${
          sideNav_toggled ? "w-60" : "w-0"
        }  h-full  absolute  z-10    bg-white transition duration-150 ease-in-out`}
      >
        {/* Side  Top Nav */}
        <div className="p-3 gap-1 ">
          <Link to="/">
          <button className="sideNav-button">
            <BiSolidHome className="icon" />
            Home
          </button>
          </Link>
        <Link to="/shorts">
          <button className="sideNav-button">
            <img className="icon" src={Shorts} />
            Shorts
          </button>
        </Link>

          <button className="sideNav-button">
            <img className="icon" src={Subscription} />
            Subscriptions
          </button>
        </div>

        {/*  */}
        <div className="p-[0.75rem]">
          <button className="sideNav-button">
            <img className="icon"
            src={Library}
              />
            Library
          </button>

          <button className="sideNav-button">
            <img className="icon" src={history} />
            History
          </button>
        </div>
      </div>
    </>
  );
};

export default SideNav;
