import React, { useState } from 'react'
import './LoginPop.css'
import { assets } from '../../assets/assets'

const LoginPop = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Sign Up")
    return (
        <div className="LoginPop">
            <form className="LoginPop-container">
                <div className="LoginPop-title">
                    <h2>{currState} </h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="LoginPop-inputs">
                    {currState === "Login" ? <></> : <input type="text" placeholder='Your Name' required />}
                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='Your Password' required />
                </div>
                <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="LoginPop-condition">
                    <input type="checkbox" required />
                    <p>By continuing,i agree to the terms of use & Privacy  Policy.</p>
                </div>
                {currState === "Sign Up"
                    ? <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
                    : <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPop