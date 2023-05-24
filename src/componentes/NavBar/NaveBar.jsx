import "./NavBar.css";
import { Sling as Hamburger } from 'hamburger-react';
import { AuthLoginSignUp } from "../AuthLoginSignUp/AuthLoginSignUp";
import { useDatacontest,useAuthcontest } from "../../contest";
import { MdAccountCircle } from 'react-icons/md';
import {LogoutLogin} from "../index";
export const NaveBar=()=>{
    const { CheackIn, CheackOut,guests,destination}=useDatacontest();
    const {setDate}=useDatacontest();
    const {uthDispatch,isModelOpen,account,logout,name}=useAuthcontest();
    const dateFun=()=>{
        setDate({
            type:"open_search_bar"
        })
    }
    const changeAuthModel=()=>{
        uthDispatch(
            {
                type:"openauth"
            }
        )
  }
  const openLogOut=()=>{
    uthDispatch(
        {
            type:"logout"
        }
    )
  }
    return(
        <>
        <header className="main1">
            <div>
        <h1 className="heading-1">
            Traval..
        </h1>
          </div>
    <div>
        <h1>
            <div className="main1" onClick={dateFun} style={{borderRadius: "5px"}}>
            <span className="form-option">{destination || "anywhere"}</span>
            <span className="form-option"> {CheackIn && CheackOut 
            ? `${CheackIn.toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
            })} - ${CheackOut.toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
            })}`
            : "Any Week"}</span>
            <span className="form-option">{guests>0 ?`${guests} guests`:"anywhere"}</span>
             <button className="ser" type="submit"><i className="fa fa-search"></i></button>
            </div>
        </h1>
  </div>
  <div>
    <nav className="d-flex align-center gap-large">
            <div className="nav d-flex align-center cursor-pointer">
               <span onClick={changeAuthModel} className="material-icons-outlined">
                {!account && <Hamburger size={30}></Hamburger>}
                </span>
                {account && <span>hii,{name}</span>}
        {account && <MdAccountCircle className="cursor" onClick={openLogOut} size={50}></MdAccountCircle>}
                <div className="cursor">
                {logout && <LogoutLogin></LogoutLogin>}
                </div>
                <span className="material-icons-outlined">
               </span>
            </div>
    </nav>
    <div>
    <span>
                  {isModelOpen&&<AuthLoginSignUp></AuthLoginSignUp>}
                </span>
    </div>
    </div>
</header>
</>
    )
}