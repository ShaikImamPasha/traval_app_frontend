import "./Auth.css";
export const AuthLogin=()=>{
    return(<>
    <div>
        <form className="auth-main">
            <label>Mobile Number<span className="star">*</span></label>
            <input maxLength={10} placeholder="Enter Mobile Number" required></input>
            <label>Password <span className="star">*</span></label>
            <input placeholder="Enter Password" required></input>
            <button className="verify cursor">Verify</button>
            <button className="LTC cursor">Login with Test Credentials</button>
            <div>
                <p>or</p>
            </div>
            <button className="LWG cursor">Login with Gmail</button>
        </form>
    </div>
    </>)
}