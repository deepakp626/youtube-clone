import ReactPlayer from 'react-player';
import SocialIcon from './components/SocialIcon';
import DashBoardLayout from '../../components/DashBoardLayout';
import {useShortsVideoQuery} from '../../services/fetchYoutubeData'
import { useParams } from 'react-router-dom';
const ShortsLayout = () => {
 const {id} = useParams()
//  console.log(id)
  const res  = useShortsVideoQuery(id)
  // console.log(res)

  if(res.isLoading){
    return <div>Loading ...</div>;
  }

  const videoId = `https://www.youtube.com/shorts/${res.data.items[0].id}`
  
  return (
    <>
    <DashBoardLayout>
      <div className=" ">
        <div className=" h-[470px] sm:h-[570px]  w-[320px] mx-auto  relative">
              <ReactPlayer 
              url={videoId}
              // playing={false}
              muted={true}
              volume={10}
              controls
              width="100%"
              height="100%"
              />
        <SocialIcon />
        </div>
      </div>
    </DashBoardLayout>
    </>
  );
};

export default ShortsLayout;
