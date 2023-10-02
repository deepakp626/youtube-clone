import ReactPlayer from 'react-player';
import SocialIcon from './components/SocialIcon';
import DashBoardLayout from '../../components/DashBoardLayout';
const ShortsLayout = () => {
  
  return (
    <>
    <DashBoardLayout>
      <div className=" border-4 border-amber-400  ">
        <div className="border-4 border-red-600 h-[470px] sm:h-[570px]  w-[320px] mx-auto  relative">
              <ReactPlayer 
              // playing={false}
              muted={true}
              volume={10}
              controls
              width="100%"
              height="100%"
              url="https://www.youtube.com/shorts/QS_kuv8wyDU"
              />
        <SocialIcon />
        </div>
      </div>
    </DashBoardLayout>
    </>
  );
};

export default ShortsLayout;
