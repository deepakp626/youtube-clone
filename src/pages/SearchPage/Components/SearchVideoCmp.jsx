import { useSelector } from "react-redux";
import { useSearchVideosQuery } from "../../../services/fetchYoutubeData";
import {  useNavigate } from 'react-router-dom'

const SearchVideoCmp = () => {
  const navigate = useNavigate()
  const { searchData } = useSelector((state) => state.youtube);
  // console.log(searchData);

  const { data, isLoading } = useSearchVideosQuery(searchData);
  console.log(data);

  const videoPlayHandler = (id) => {
    console.log(id)
    navigate(`/watch/${id}`)
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {data.items.map((item, id) => (
        <div
          key={id}
          onClick={()=> videoPlayHandler(item.id.videoId)}
          className=" flex flex-col  sm:flex-row    rounded-2xl overflow-hidden "
         >
          <div>
            <div className=" sm:w-[380px]  h-[201px] ">
              <img
                className="h-full w-full"
                src={item.snippet.thumbnails.high.url}
              />
            </div>
          </div>

          <div className="flex p-3 pb-0  gap-4  sm:justify-evenly">
            <div className="w-[6rem] h-[2.5rem] overflow-hidden rounded-full   sm:hidden">
              <img
                className="w-full h-full"
                src=""
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <h2 className="text-[0.875rem]  sm:text-base font-medium  h-[3rem]   overflow-hidden text-ellipsis">
                {item.snippet.title}
              </h2>
              <div className="text-[12px] sm:text-sm   text-[#606060] font-normal   sm:flex gap-2">
                <p>{item.snippet.publishTime}</p>
              </div>
              <div className="hidden sm:flex  rounded-2xl  items-center gap-2  text-[#606060]">
                <img
                  className="rounded-full  w-[2rem] h-[2rem]"
                  src="https://avatars.githubusercontent.com/u/95975241?v=4"
                />
                <h1 className="hidden sm:flex">{item.snippet.channelTitle}</h1>
              </div>
              <div className=" text-[#606060]  h-0 sm:h-12 overflow-hidden ">
                <p className="hidden sm:flex">{item.snippet.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchVideoCmp;
