import React, {useState} from "react";
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router";
import logo from '/Users/jean-marc/Desktop/web/petshop1/petshop/src/photos/petNation_logo.jpg';

    const Register = () => {
    
        const history = useHistory()

        const [user, setUser]=useState({
            name: "",
            email:"",
            password:"",
            reEnterPassword: ""
        })

        const handlechange = e => {
            const {name, value} = e.target
            setUser({
                ...user,
                [name]: value
            })
        }

        const register = () => {
            const {name, email, password, reEnterPassword } = user 
            if(name && email && password &&(password === reEnterPassword)){
                axios.post("http://localhost:9002/register", user)
                .then( res => {
                    history.push("/login")
                })
            }else{
                alert("invalid input")
            }
            
        }

        return (
            <div className="background">
            <div className="register">
                <h1><br/></h1>
                <img className="logo" src={logo} width={200} height={70} />
                <input type="text" name="name" value={user.name} placeholder="your name" onChange={handlechange}></input>
                <input type="text" name="email" value={user.email} placeholder="your email" onChange={handlechange}></input>
                <input type="password" name="password" value={user.password} placeholder="your password" onChange={handlechange}></input>
                <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter password" onChange={handlechange}></input>
                <div className="button" onClick={register}>Register</div>
                <div>or</div>
                <div className="button" onClick={() => history.push("/login")}>Login</div>
            </div>
            </div>
        )
    }

    export default Register