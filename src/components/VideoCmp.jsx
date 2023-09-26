const VideoCmp = () => {
  return (
    <>
      <div className="border-2 border-blue-600  rounded-2xl overflow-hidden ">
          <div className=" h-[10rem]   border-2 border-black">
            <img className="h-full w-full" src="https://avatars.githubusercontent.com/u/95975241?v=4" />
          </div>
          <div className="flex p-3 pb-0  gap-4 border-2 border-red-500">
            <div className=" rounded-2xl overflow-hidden w-[8rem] h-[8rem]">
              <img  className="rounded-full"  src="https://avatars.githubusercontent.com/u/95975241?v=4" />
            </div>
            <div className="">
              <h2 className="text-base font-medium border-2 h-[3.5rem] overflow-hidden text-ellipsis">Jean-Claude Van Damme |Lionheart (Action) Full Length… Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, unde!</h2>

              <div className="text-[0.875rem] text-[#606060] font-normal">
                <p >Best Documentary</p>
                <p>2.8M views  3 months ago</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default VideoCmp