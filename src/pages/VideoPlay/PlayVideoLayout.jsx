import ReactPlayer from "react-player";
import Description from "./components/Description";
import Comment from "./components/Comment";
import SuggestionVideo from "./components/SuggestionVideo";
import VideoInfo from "./components/VideoInfo";
import DashBoardLayout from "../../components/DashBoardLayout";
import { useParams } from "react-router-dom";
import {useVideoInfoByIdQuery} from "../../services/fetchYoutubeData"
const PlayVideoLayout = () => {
  const para = useParams()
  console.log({para})
  const {data,isSuccess} = useVideoInfoByIdQuery(para.id)
  // console.log(data)
  const videourl = `https://www.youtube.com/watch?v=${para.id}`
  if(isSuccess) {
    return (
      <>
        <DashBoardLayout>
           <div className="lg:flex justify-center">
            <div className="sm:w-full lg:w-[60rem]  sm:p-[1.5rem] ">
              <div className="sm:h-[33rem] ">
                <ReactPlayer
                  controls
                  // url={`https://www.youtube.com/watch?v=jXOYj1T6l3s`}
                  url={videourl}
                  width="100%"
                  height="100%"
                  />
              </div>
  
              <VideoInfo data={data}  />
              <Description data={data} />  
              {/* <Comment /> */}
            </div>
            <div>
              <SuggestionVideo />
            </div>
          </div>
        </DashBoardLayout>
      </>
    );
  }
 
};

export default PlayVideoLayout;
