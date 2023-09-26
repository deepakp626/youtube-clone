import { BiSolidHome } from 'react-icons/bi'
import Shorts from "/icon/shorts.svg"
import Subscription from '/icon/Subscriptions.svg'
import history from '/icon/history.svg'

const SideNav = () => {
  // const watch = [
  //   {
  //     text: "Home",
  //     icon: `${BiSolidHome}`,
  //     path: "/",
  //   },
  //   {
  //     text: "Shorts",
  //     icon: `${Shorts}`,
  //     path: "/",
  //   },
  // ]

  return (
    <>
      <div className=' h-full'>

        {/* Side  Top Nav */}
        <div className="p-3 gap-1 border-b-2">
          <button className="icon flex items-center gap-6  px-[0.75rem] py-[0.5rem]   w-48 rounded-xl">
            <BiSolidHome />
            Home
          </button>

          <button className="icon flex items-center gap-6  px-[0.75rem] py-[0.5rem]  w-48 rounded-xl">
            <img src={Shorts} />
            Shorts
          </button>

          <button className="icon flex items-center gap-6  px-[0.75rem] py-[0.5rem]  w-48 rounded-xl">
            <img src={Subscription} />
            Subscriptions
          </button>
        </div>

        {/*  */}
        <div className='p-[0.75rem]'>
          <button className="icon flex items-center gap-6  px-[0.75rem] py-[0.5rem]  w-48 rounded-xl">
            <img src={Subscription} />
            Library
          </button>
          <button className="icon flex items-center gap-6  px-[0.75rem] py-[0.5rem]  w-48 rounded-xl">
            <img src={history} />
            Histry
          </button>
        </div>
      </div>

    </>
  )
}

export default SideNav