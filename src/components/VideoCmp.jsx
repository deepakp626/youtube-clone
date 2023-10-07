import { useDispatch } from "react-redux";
import { useGetAllDataQuery } from "../services/fetchYoutubeData";
import { useNavigate } from "react-router-dom";
import { setCategory } from "../features/youtubeSlice";
const VideoCmp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const res = useGetAllDataQuery();
  console.log(res)
  const { data, isLoading, isSuccess } = useGetAllDataQuery();
  console.log(data, isLoading);
  
  const watchHandler = (id, categoryId) => {
    // console.log("video id", id);
    navigate(`/watch/${id}`, { videoId: id });
    dispatch(setCategory(categoryId));
  };

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (isSuccess) {
    return (
      <>
        <div className=" grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  p-4 gap-4">
          {data.items.map((item, id) => (
              <div
                key={id}
                onClick={() => watchHandler(item.id, item.snippet.categoryId)}
                className=" rounded-2xl overflow-hidden "
              >
                <div className=" h-[10rem] ">
                  <img
                    className="h-full w-full"
                    src={item.snippet.thumbnails.medium.url}
                  />
                </div>
                <div className="flex p-3 pb-0  gap-4 ">
                  <div className=" rounded-2xl overflow-hidden w-[8rem] h-[8rem]">
                    <img
                      className="rounded-full"
                      src="https://avatars.githubusercontent.com/u/95975241?v=4"
                    />
                  </div>
                  <div className="">
                    <h2 className="text-base font-medium  h-[3.5rem] overflow-hidden text-ellipsis">
                      {item.snippet.title}
                    </h2>
                    <div className="text-[0.875rem] text-[#606060] font-normal">
                      <p>{item.snippet.channelTitle}</p>
                      <p>{item.snippet.publishedAt}</p>
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </>
    );
  }
};

export default VideoCmp;
