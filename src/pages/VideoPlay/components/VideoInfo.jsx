import Avatar from 'react-avatar'
import {BiLike,BiDislike} from 'react-icons/bi'
import {FaShare} from 'react-icons/fa'
const VideoInfo = ({data}) => {
  console.log({data})
  return (
    <>
         <div>
          <h2 className='text-[1.181rem] font-semibold'>
             {data.items[0].snippet.title}
            </h2>
            <div className='sm:flex py-[0.5rem]'>
               <div className='flex items-center '>
                  <Avatar size='4rem' className='rounded-full mr-4'  />
                  <div>
                      <h2 className='font-medium'>{data.items[0].snippet.channelTitle}</h2>
                      {/* <p className='text-[0.75rem] font-normal text-p'>17.9M subscribers</p> */}
                  </div>
                  <div className='ml-16'>
                    <button className='text-white bg-black rounded-[1.125rem] px-[0.98rem] py-[0.50rem]  text-[0.875rem] place-self-end
                    '>Subscribe</button>
                  </div>
               </div>
               <div className='flex gap-2 py-[0.5rem] items-center'>
                  <button  className='flex items-center gap-2'>
                    <BiLike className='icon' />  
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
    </>
  )
}

export default VideoInfo