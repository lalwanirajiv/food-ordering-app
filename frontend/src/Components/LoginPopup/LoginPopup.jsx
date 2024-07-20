/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';
import axios from 'axios'
import { StoreContext } from '../../context/StoreContext';
const LoginPopup = (setShowLogin) => {
    const {url,setToken,token} = useContext(StoreContext)


    const [currentState, setCurrentState] = useState("Sign Up");
    const [data, setData] = useState(
        {
            name: "",
            email: "",
            password: ""
        }
    )
    const onChangeHandler=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onLogin = async (event)=>{
        event.preventDefault()
        let newUrl = url;
        if (currentState==="Login") {
            newUrl+="/api/user/login"
        }else{
            newUrl+="/api/user/register"

        }
        const response  = await axios.post(newUrl,data);
        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem("token",response.data.token)
            setShowLogin(false)
        }
        else{
            alert(response.data.message)
        }
    }

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => props.setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currentState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />}

                    <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Your email' required />
                    <input type="password" name='password' onChange={onChangeHandler} value={data.password} placeholder='Password' required />
                    <button type='submit' className=''>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
                </div>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>Agree our terms and conditions</p>

                </div>
                {currentState === "Login" ?
                    <p>Want to create a new Account? <span onClick={() => setCurrentState("Sign Up")}>Click Here</span></p>
                    :
                    <p>Already hav an Account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
                }

            </form>
        </div>
    )
}

export default LoginPopup