import React, {useState} from "react";
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router";
import logo from '/Users/jean-marc/Desktop/web/petshop1/petshop/src/photos/petNation_logo.jpg';
    const Login = ({setLoginUser}) => {


        const history = useHistory()

        const [user, setUser]=useState({
            email:"",
            password:""
        })

        const handlechange = e => {
            const {name, value} = e.target
            setUser({
                ...user,
                [name]: value
            })
        }

        const login = () => {
            axios.post("http://localhost:9002/login", user)
            .then(res => {
                setLoginUser(res.data.user)
                history.push("/")
            })
        }

        return (
            <div className="background">
            <div className="login">
                {console.log(user)}
                <h1><br/></h1>
                <img className="logo" src={logo} width={200} height={70} />
                <input type="text" name="email" value={user.email} onChange={handlechange} placeholder="Enter your Email"></input>
                <input type="password" name="password" value={user.password} onChange={handlechange} placeholder="Enter your Password"></input>
                <div className="button" onClick={login}>login</div>
                <div>or</div>
                <div className="button" onClick={() => history.push("/Register")}>Register</div>
            </div>
            </div>
        )
    }

    export default Login

    