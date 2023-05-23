import { useAuthcontest } from "../../contest"
export const LogoutLogin=()=>{
    const {uthDispatch,logout}=useAuthcontest();
   const closeaccout=()=>{
    uthDispatch({
        type:"account"
    })
    uthDispatch({
        type:"logout"
    })
   }
    return(<>
       <div>
           <div onClick={closeaccout}>
              LogOut
           </div>
       </div>
    </>)
}