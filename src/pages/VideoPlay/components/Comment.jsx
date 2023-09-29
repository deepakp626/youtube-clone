import Avatar from "react-avatar"
import { BiLike, BiDislike } from 'react-icons/bi'

const Comment = () => {
  return (
    <>
      <div className="flex gap-4 m-4">
        <div>
          <Avatar size="2.5rem" className="rounded-full" />
        </div>
        <div>
          <div className="flex items-center gap-3">
            <h2 className='font-medium  text-[0.81rem] border-2'>@deepak prajapat</h2>
            <p className='text-[0.75rem] font-normal text-p
            border-2'>10:34 PM - 6/8/2020</p>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, officiis!
          </p>
          <div className="flex border-2 border-red-700 items-center">
            <button>
              <BiLike />
            </button>
            <button>
              <BiDislike />
            </button>
            <button >
              Reply
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Comment