
const FilterBar = () => {
  const allFilter = [
    {
      text: "All",
      path: "/"
    },
    {
      text: "News",
      path: "/"
    },
    {
      text: "Music",
      path: "/"
    },
    {
      text: "Gaming",
      path: "/"
    },
    {
      text: "Coding",
      path: "/"
    },
    {
      text: "Live",
      path: "/"
    },
    {
      text: "Comedy",
      path: "/"
    },
    {
      text: "Memes",
      path: "/"
    },
    {
      text: "PlayList",
      path: "/"
    },
    {
      text: "India",
      path: "/"
    },
    {
      text: "Education",
      path: "/"
    },
    {
      text: "Cricket",
      path: "/"
    },
    {
      text: "Play",
      path: "/"
    },
    {
      text: "Computer",
      path: "/"
    },
    {
      text: "Exit",
      path: "/"
    },
    {
      text: "More",
      path: "/"
    },
    {
      text: "Show",
      path: "/"
    },
  ]

  
  return (
    <>
         <div
          className="scrollbar space-x-[0.74rem] py-3  flex overflow-x-scroll pl-4">
          {
            allFilter.map((item, id) => (
              <button 
              key={id} className="px-[0.75rem] py-[0.38rem] text-[0.875rem] bg-[#0000000d] rounded-lg focus:bg-black focus:text-white">
                {item.text}
              </button>
            ))
          }
        </div>
    </>
  )
}

export default FilterBar