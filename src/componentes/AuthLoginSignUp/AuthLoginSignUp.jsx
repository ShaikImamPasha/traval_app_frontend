import { AuthSignUp,AuthLogin } from "../Auth/AuthSignUp";
import {useAuthcontest} from "../../contest";
import "./AuthLoginSignUp.css";
export const AuthLoginSignUp=()=>{
    const {isModelOpen,uthDispatch,isAuth}=useAuthcontest();
    const changeAuth=()=>{
      uthDispatch({
         type:"login"
      })
    }
    const changeAuthS=()=>{
      uthDispatch({
         type:"singnup"
      })
    }
    return(<>
       <div className="d-flex Auth">
          <div onClick={changeAuth} className={`log1 ${isAuth==="login"?"log":""}`}>
                  <label >Login</label>
          </div>
          <div>
               <label className={`log1 ${isAuth==="singnup"?"log":""}`} onClick={changeAuthS}>Signup</label>
          </div>
       </div>
    </>)
}