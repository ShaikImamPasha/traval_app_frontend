import "./NavBar.css";
import { Sling as Hamburger } from 'hamburger-react';
export const NaveBar=()=>{
    return(
        <>
        <header className="heading d-flex align-center">
            <div>
        <h1 className="heading-1">
            <a className="link" href="/">Traval..</a>
        </h1>
          </div>
    <div>
        <h1>
            <div className="form-container d-flex align-center cursor-pointer shadow">
            <span className="form-option">anywhere</span>
            <span className="form-option">anywhere</span>
            <span className="form-option">anywhere</span>
             <button className="ser" type="submit"><i class="fa fa-search"></i></button>
            </div>
        </h1>
  </div>
  <div>
    <nav className="d-flex align-center gap-large">
            <div class="nav d-flex align-center cursor-pointer">
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