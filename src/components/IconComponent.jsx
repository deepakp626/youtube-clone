import {BiSolidHome} from "react-icons/bi"
import Shorts from "/icon/shorts.svg"
const IconComponent = ({ iconName }) => {
  if(iconName === "BiSolidHome") return (<BiSolidHome />)
  if(iconName === "Shorts") return (<img src={Shorts}  />)
};

export default IconComponent;