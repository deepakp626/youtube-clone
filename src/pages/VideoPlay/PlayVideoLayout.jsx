import Avatar from 'react-avatar';
import ReactPlayer from 'react-player';
import {BiLike,BiDislike} from 'react-icons/bi'
import {FaShare} from 'react-icons/fa'
import Description from './components/Description';
import Comment from './components/Comment';
import SuggestionVideo from './components/SuggestionVideo';
const PlayVideoLayout = () => {
  return (
    <>
    <div className='lg:flex '>
      <div className='border-4 border-red-500 sm:w-full lg:w-[60rem]  sm:p-[1.5rem] '>
        <div className='sm:h-[33rem] '>
          <ReactPlayer
            controls
            url="https://www.youtube.com/watch?v=jXOYj1T6l3s"
            width="100%"
            height="100%"
            />
        </div>
        <div>
          <h2 className='text-[1.181rem] font-semibold'>Captivating Aquatic Gallery | PM Modi witnesses
            marine marvels at Gujarat Science City</h2>
            <div className='sm:flex py-[0.5rem]'>
               <div className='flex  border-2 border-orange-600 items-center '>
                  <Avatar size='4rem' className='rounded-full mr-4'  />
                  <div>
                      <h2 className='font-medium   '>Narendra Modi</h2>
                      <p className='text-[0.75rem] font-normal text-p'>17.9M subscribers</p>
                  </div>
                  <div className='border-2 ml-16'>
                    <button className='text-white bg-black rounded-[1.125rem] px-[0.98rem] py-[0.50rem]  text-[0.875rem] place-self-end
                    '>Subscribe</button>
                  </div>
               </div>
               <div className='flex gap-2 py-[0.5rem] items-center'>
                  <button  className='flex items-center gap-2'>
                    <BiLike className='icon' />  1000
                  </button>
                  <button >
                    <BiDislike className='icon' />
                  </button>
                  <button >
                    <FaShare className='icon' />
                  </button> 
               </div>
            </div>
        </div>

        <Description />
        <Comment />
      </div>
      <div>
        <SuggestionVideo />
      </div>
    </div>
    </>
  )
}

export default PlayVideoLayout