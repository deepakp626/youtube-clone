import Avatar from "react-avatar";
// import signIn from "/SignIn/SVG.svg";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../features/youtubeSlice";

const LogInSignIn = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.youtube);

  const decode= (token != null) ? jwt_decode(token) : null 
  // console.log(decode);
  // console.log(decode.name);
  // console.log(decode.picture);


  return (
    <>
      {token && (
        <button className="sm:px-[0.5rem] sm:py-[0.5rem]   text-[#065FD4] border-2  rounded-[1.125rem] flex items-center gap-0">
          <Avatar size="30" round={true} src={decode.picture} /> {decode.name}
        </button>
      )}

      <div className="flex">
        <GoogleLogin
          useOneTap="true"
          type="icon"
          shape="circle"
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            const { credential } = credentialResponse;
            dispatch(setToken(credential));
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </>
  );
};

export default LogInSignIn;
