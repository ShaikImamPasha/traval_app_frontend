import "./Auth.css";
import { useAuthcontest } from "../../contest";
import { VEmail,VName,VNumber,VPassword } from "../../utils";
import { Servises } from "../../services";
export const AuthSignUp=()=>{
    const {isModelOpen,Name,Email,Number,Password,ConfirmPassword,uthDispatch}=useAuthcontest();
    let Vname;
    const changeNumber=(event)=>{
            uthDispatch({
                type:"Number",
                payload:event.target.value
            })
    }
    const changeName=(event)=>{
            uthDispatch({
                type:"Name",
                payload:event.target.value
            })
    }
    const changeEmail=(event)=>{
            uthDispatch({
                type:"Email",
                payload:event.target.value
            })
    }
    const changePassword=(event)=>{
            uthDispatch({
                type:"Password",
                payload:event.target.value
            })
    }
    const changeConfirmPassword=(event)=>{
        uthDispatch({
            type:"ConfirmPassword",
            payload:event.target.value
        })
    }
    const changeSubmit=(event)=>{
        event.preventDefault();
        Servises(Name,Number,Email,Password);
        uthDispatch({
            type:"clear"
        })
         window.alert("You are account created.please login");
         uthDispatch({
            type:"login"
        })
    }
    return(<>
    <div>
        <form onSubmit={changeSubmit} className="auth-main">
            <label>Mobile Number<span className="star">*</span></label>
            <input className="in"maxLength={10} value={Number}  onChange={changeNumber} placeholder="Enter Mobile Number" required></input>
            <label>Name<span className="star">*</span></label>
            <input className="in" defaultValue={Name} onChange={changeName} placeholder="Enter Name" required></input>
            <label>Email<span className="star">*</span></label>
            <input className="in" defaultValue={Email} onChange={changeEmail} placeholder="Enter Email" required></input>
            <label>Password <span className="star">*</span></label>
            <input className="in" defaultValue={Password} type="password" onChange={changePassword} placeholder="Enter Password" required></input>
            <label>Confirm Password <span className="star">*</span></label>
            <input className="in" defaultValue={ConfirmPassword} type="password" onChange={changeConfirmPassword} placeholder="Enter Password" required></input>
            <button className="verify cursor">Submit</button>
        </form>
    </div>
    </>)
}