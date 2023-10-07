

const Description = ({data}) => {
  return (
    <>
      <div className="p-[0.75rem] bg-p rounded-[0.75rem]">
        <div className="flex text-[0.875rem] font-medium ">
          <h2> {data.items[0].snippet.publishedAt}  </h2>
          {/* <p className="text-p"> AHMEDABAD</p> */}
        </div>
        <div className="overflow-hidden ">
           <p className="font-normal  h-[4.75rem]">  
              {data.items[0].snippet.description}
           </p>
        </div>
      </div>
    </>
  )
}

export default Description