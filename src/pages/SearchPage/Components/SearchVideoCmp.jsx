const SearchVideoCmp = () => {
  return (
    <>
      <div className=" flex flex-col  sm:flex-row   border-4 border-blue-600  rounded-2xl overflow-hidden ">
        <div>

          <div className=" sm:w-[380px]  h-[201px]   border-2 border-black">
            <img className="h-full w-full" src="https://avatars.githubusercontent.com/u/95975241?v=4" />
          </div>
        </div>

        <div className="flex p-3 pb-0  gap-4 border-2 border-red-500 sm:justify-evenly">
          <div className="w-[6rem] h-[2.5rem] overflow-hidden rounded-full  border-2 border-red-500 sm:hidden">
              <img className="w-full h-full"  src="https://avatars.githubusercontent.com/u/95975241?v=4" />
          </div>
          <div className="space-y-2 flex flex-col">
            <h2 className="text-[0.875rem]  sm:text-base font-medium border-2 h-[3rem]   overflow-hidden text-ellipsis">Jean-Claude Van Damme |Lionheart (Action) Full Length… Lorem ipsum dolor sit amet copnsectetur adipisicing elit. Ipsum, unde!
            </h2>
            <div className="text-[12px] sm:text-sm   text-[#606060] font-normal border-2 border-blue-800   sm:flex gap-2">
              <p >2.8M views    3 months ago</p>
            </div>
            <div className="hidden sm:flex  rounded-2xl  items-center gap-2  text-[#606060]">
              <img className="rounded-full  w-[2rem] h-[2rem]" src="https://avatars.githubusercontent.com/u/95975241?v=4" />
              <h1 className="hidden sm:flex">hii  this is demo</h1>
            </div>
            <div className=" text-[#606060]">
              <p className="hidden sm:flex">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default SearchVideoCmp