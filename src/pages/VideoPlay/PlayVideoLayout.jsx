import ReactPlayer from "react-player";
import Description from "./components/Description";
import Comment from "./components/Comment";
import SuggestionVideo from "./components/SuggestionVideo";
import VideoInfo from "./components/VideoInfo";
import DashBoardLayout from "../../components/DashBoardLayout";
const PlayVideoLayout = () => {
  return (
    <>
      <DashBoardLayout>
        <div className="lg:flex justify-center">
          <div className="border-4 border-red-500 sm:w-full lg:w-[60rem]  sm:p-[1.5rem] ">
            <div className="sm:h-[33rem] ">
              <ReactPlayer
                controls
                url="https://www.youtube.com/watch?v=jXOYj1T6l3s"
                width="100%"
                height="100%"
              />
            </div>

            <VideoInfo />
            <Description />
            <Comment />
          </div>
          <div>
            <SuggestionVideo />
          </div>
        </div>
      </DashBoardLayout>
    </>
  );
};

export default PlayVideoLayout;
