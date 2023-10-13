import { useSelector } from "react-redux";
import { useFetchSuggestionVideoQuery } from "../../../services/fetchYoutubeData";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "../../../features/youtubeSlice";
import {BeatLoader} from 'react-spinners'

const SuggestionVideo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { suggestVideoTitle } = useSelector((state) => state.youtube);
  const { data, isLoading } = useFetchSuggestionVideoQuery(suggestVideoTitle);
  // console.log(data)

  const watchHandler = (id, categoryId) => {
    // console.log("video id", id);
    navigate(`/watch/${id.videoId}`);
    // console.log("debug");
    dispatch(setCategory(categoryId));
  };

  if (isLoading) {
    return (
      <div className=" mt-28 flex justify-center">
        <BeatLoader className="mx-auto " color="#181a1a" size={17} />
      </div>
    );
  }
  return (
    <>
      <div className="custom-grid w-full lg:w-[20rem]  grid grid-cols-1 xs:grid-cols-2 gap-4 p-4 lg:grid-cols-1">
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
            <div className="flex p-3 pb-0  ">
              <div className=" rounded-2xl overflow-hidden  h-[8rem]  w-12 ">
                <img
                  className="rounded-full  h-12"
                  src={item.snippet.thumbnails.medium.url}
                />
              </div>
              <div className=" flex-1">
                <h2 className="text-base font-medium  h-[3.5rem] overflow-hidden text-ellipsis ">
                  {item.snippet.title}
                </h2>
                <div className="text-[0.875rem] text-[#606060] font-normal ">
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
};

export default SuggestionVideo;
