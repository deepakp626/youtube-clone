import Mike from "./Mike";
import { BiArrowBack } from "react-icons/bi";
import { setSearch } from "../features/youtubeSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const PhoneSearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setSearchData = (event) => {
    event.preventDefault();
    const item = event.target.search.value;
    // console.log(item)
    dispatch(setSearch(item));
    navigate("/search");
  };
  return (
    <>
      <div className=" w-full  flex  justify-center items-center gap-2 py-2 border-2">
        <div className="rounded-[1.25rem] bg-[#D3D3D3] p-[0.5rem] ">
          <Link to="/">
          <BiArrowBack className="   sm:w-[2rem] sm:h-[2rem] " />
          </Link>
        </div>
        <form onSubmit={setSearchData} className=" bg-[#D3D3D3] outline-none">
          <input
            type="search"
            name="search"
            className="px-2 py-[0.2rem] max-w-[14rem]"
            placeholder="Search Youtube"
          />
        </form>
        <div>
          <Mike />
        </div>
      </div>
    </>
  );
};

export default PhoneSearchBar;
