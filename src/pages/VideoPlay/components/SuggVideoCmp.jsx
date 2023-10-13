const SuggVideoCmp = () => {
  
  return (
    <>
          <div
                // onClick={() => watchHandler(item.id, item.snippet.categoryId)}
                className=" rounded-2xl overflow-hidden "
              >
                <div className=" h-[10rem] ">
                  <img
                    className="h-full w-full"
                    src='https://avatars.githubusercontent.com/u/95975241?v=4'
                    // src={item.snippet.thumbnails.medium.url}
                  />
                </div>
                <div className="flex p-3 pb-0 border-2 border-blue-800 ">
                  <div className=" rounded-2xl overflow-hidden  h-[8rem] border-4 w-12">
                    <img
                      className="rounded-full border-2 "
                      src="https://avatars.githubusercontent.com/u/95975241?v=4"
                    />
                  </div>
                  <div className="border-2 border-red-500 flex-1">
                    <h2 className="text-base font-medium  h-[3.5rem] overflow-hidden text-ellipsis bg-cyan-400">
                      {/* {item.snippet.title} */}
                      titlt
                    </h2>
                    <div className="text-[0.875rem] text-[#606060] font-normal border-2 border-orange-400">
                       <p>Channel titlt</p>
                       <p> date and time</p>
                      {/* <p>{item.snippet.channelTitle}</p> */}
                      {/* <p>{item.snippet.publishedAt}</p> */}
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default SuggVideoCmp