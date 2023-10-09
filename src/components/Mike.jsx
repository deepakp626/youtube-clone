import { BiSolidMicrophone } from "react-icons/bi";
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
const Mike = () => {
  // const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()
  
  // if (!browserSupportsSpeechRecognition) {
  //   // console.log("Not supported mike")
  //   return null
  // }
  
  const onMouseDown = async () => {
    await navigator.mediaDevices.getUserMedia({ audio: true });
    // rest of code
  };
  return (
    <>
      <div className="rounded-[1.25rem] bg-[#D3D3D3] p-[0.5rem] ">
        <BiSolidMicrophone
         onClick={onMouseDown}
         className="   sm:w-[1.5rem] sm:h-[1.5rem] " />
      </div>
    </>
  );
};

export default Mike;
