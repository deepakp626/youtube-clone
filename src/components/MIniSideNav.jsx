import { AiFillHome } from "react-icons/ai";
// import Shorts from '../../public/icon/shorts'
const MIniSideNav = () => {
  return (
    <>
      <div>
        <div className="w-full  max-w-[64px] box-border rounded-tl-[10px] rounded-br-[10px] rounded-tr-[10px] rounded-bl-[10px] bg-[#ffffff]">
            {/* Home Icon */}
          <div className="w-full flex gap-[0.38rem]  pl-[17px] pr-[17px] py-[16px] relative max-w-[64px] box-border items-center flex-col justify-center">
            <div className="w-full  flex   pl-0 pr-0 py-0 relative max-w-[30px] box-border items-start flex-col justify-start">
              <AiFillHome className="h-[27px] w-[27px] "   />
            </div>
            <div className="w-full overflow-hidden max-w-[64px] box-border">
              <p className="text-[#0f0f0f] text-[10px] not-italic mt-0 text-left font-['Roboto',_sans-serif] font-normal leading-[14px] mb-0 tracking-[0px] normal-case">
                Home
              </p>
            </div>
          </div>

            {/* Shorts Icon */}
          <div className="w-full flex gap-[0.38rem]  pl-[17px] pr-[17px] py-[16px] relative max-w-[64px] box-border items-center flex-col justify-center">
            <div className="w-full flex   pl-0 pr-0 py-0 relative max-w-[30px] box-border items-start flex-col justify-start">
              <img src="../../public/icon/shorts.svg" className="h-[27px] w-[27px] "    />
            </div>
            <div className="w-full overflow-hidden max-w-[64px] box-border">
              <p className="text-[#0f0f0f] text-[10px] not-italic mt-0 text-left font-['Roboto',_sans-serif] font-normal leading-[14px] mb-0 tracking-[0px] normal-case">
                Shorts
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MIniSideNav;
