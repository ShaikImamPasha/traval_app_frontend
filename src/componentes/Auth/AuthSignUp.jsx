import "./Auth.css";
export const AuthSignUp=()=>{
    return(<>
    <div>
        <form className="auth-main">
            <label>Mobile Number<span className="star">*</span></label>
            <input maxLength={10}  placeholder="Enter Mobile Number" required></input>
            <label>Name<span className="star">*</span></label>
            <input placeholder="Enter Name" required></input>
            <label>Email<span className="star">*</span></label>
            <input placeholder="Enter Email" required></input>
            <label>Password <span className="star">*</span></label>
            <input placeholder="Enter Password" required></input>
            <label>Confirm Password <span className="star">*</span></label>
            <input placeholder="Enter Password" required></input>
            <button className="verify cursor">Submit</button>
        </form>
    </div>
    </>)
}