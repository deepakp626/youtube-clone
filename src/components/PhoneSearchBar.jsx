import Mike from "./Mike"
import {BiArrowBack} from 'react-icons/bi'

const PhoneSearchBar = () => {
  return (
    <>
      <div className=" w-full  flex  justify-center items-center gap-2   py-2">
        <div className="rounded-[1.25rem] bg-[#D3D3D3] p-[0.5rem] ">
              <BiArrowBack className="   sm:w-[2rem] sm:h-[2rem] " />
            </div>
        <div className=" bg-[#D3D3D3] outline-none">
          <input className="px-2 py-[0.2rem] max-w-[14rem]"   placeholder="Search Youtube" />
        </div>
        <div>
          <Mike />
        </div>
      </div>
    </>
  )
}

export default PhoneSearchBar