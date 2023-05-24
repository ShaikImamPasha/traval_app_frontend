import "./Auth.css";
import { useAuthcontest } from "../../contest";
import { Login } from "../../services";
import { useState } from "react";
export const AuthLogin=()=>{
    var {isModelOpen,Name,Email,Number,Password,ConfirmPassword,account,uthDispatch,at,name}=useAuthcontest();
    const changeNumber=(event)=>{
        uthDispatch({
            type:"Number",
            payload:event.target.value
        })
    }
    const changePassword=(event)=>{
        uthDispatch({
            type:"Password",
            payload:event.target.value
        })
    }
    const loginfun=async(event)=>{
        event.preventDefault();
       let data=await Login(Number,Password);
       uthDispatch({
        type:"clear"
    })
    uthDispatch({
        type:"openauth"
    })
    uthDispatch({
        type:"account"
    })
    uthDispatch({
        type:"name",
        payload:data.username
    })
    }
    const changeDuplicate=async(event)=>{
        event.preventDefault();
        let data=await Login(1111111111,1);
        uthDispatch({
            type:"clear"
        })
        uthDispatch({
            type:"openauth"
        })
        uthDispatch({
            type:"account"
        })
    }
    return(<>
    <div>
        <form className="auth-main">
            <label>Mobile Number<span className="star">*</span></label>
            <input className="in" onChange={changeNumber} defaultValue={Number} maxLength={10} placeholder="Enter Mobile Number" required></input>
            <label>Password <span className="star">*</span></label>
            <input className="in" type="password" onChange={changePassword} defaultValue={Password} placeholder="Enter Password" required></input>
            <button onClick={loginfun} className="LTC cursor">Login</button>
            <div>
                <p>or</p>
            </div>
            <button onClick={changeDuplicate} className="LWG cursor">Login with TestCredetiail</button>
        </form>
    </div>
    </>)
}