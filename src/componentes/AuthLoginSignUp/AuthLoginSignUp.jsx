import { AuthSignUp,AuthLogin } from "../Auth/AuthSignUp";
import {useAuthcontest} from "../../contest";
export const AuthLoginSignUp=()=>{
    const {isModelOpen}=useAuthcontest();
    return(<>
       <div>
          <div>
                  <label>Login</label>
          </div>
          <div>
               <label>Signup</label>
          </div>
       </div>
    </>)
}