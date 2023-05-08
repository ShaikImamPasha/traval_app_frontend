import "./NavBar.css";
import { Sling as Hamburger } from 'hamburger-react';
export const NaveBar=()=>{
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
            <div className="main1" style={{borderRadius: "5px"}}>
            <span className="form-option">anywhere</span>
            <span className="form-option">anywhere</span>
            <span className="form-option">anywhere</span>
             <button className="ser" type="submit"><i class="fa fa-search"></i></button>
            </div>
        </h1>
  </div>
  <div>
    <nav className="d-flex align-center gap-large">
            <div className="nav d-flex align-center cursor-pointer">
               <span className="material-icons-outlined">
                 <Hamburger size={30}></Hamburger>
                </span>
                <span classNaame="material-icons-outlined">
               
               </span>
            </div>
    </nav>
    </div>
</header>
</>
    )
}