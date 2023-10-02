// import icon from "public/Media/div.svg"
const SocialIcon = () => {
  return (
    <>
      <div className="border-2 border-orange-500 absolute right-0 bottom-0 pb-12 px-3 flex flex-col gap-4 bg-">
        <div className="p-4 border-2 rounded-full backdrop-blur-sm">
          <img src="../../../../public/Media/like.svg" />
        </div>
        <div className="p-4 border-2 rounded-full   ">
          <img src="../../../../public/Media/disLike.svg" />
        </div>
        <div className="p-4 border-2 rounded-full ">
          <img src="/Media/comment.svg" />
        </div>
        <div className="p-4 border-2 rounded-full ">
          <img src="../../../../public/Media/share.svg" />
        </div>
        <div className="p-4 border-2 rounded-full ">
          <img src="../../../../public/Media/more.svg" />
        </div>
      </div>
    </>
  );
};

export default SocialIcon;
