import React, { useContext, useState } from "react"
import {
  authContext, modelContext,
  nameContext, passwordContext
} from "../../context/authContext"

import "../../assets/styles/Auth.css"

import xIcon from "../../assets/icons/x_icon.png"
import logo from "../../assets/images/logo.png"

export function SignIn() {
  const { login, setLogin } = useContext(authContext)
  const { modal, setModel } = useContext(modelContext)
  const { name } = useContext(nameContext)
  const { passwrd } = useContext(passwordContext)
  
  const [isLogin, setIsLogin] = useState(true)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [message, setMessage] = useState("")

  if (isLogin) {
    return (
      <>
        <div className="loginModel">
          <div className="cancel">
            <img
              onClick={() => {
                setModel(false)
                // modal.props.setModel((prev) => !prev)
              }}
              src={xIcon}
              alt=""
            />
          </div>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="inputs">
            <h3>Enter your email</h3>
            <input
              id="Email"
              onChange={(e) => {
                setUsername(e.target.value)
              }}
              type="text"
            />
            <h3>Enter your password</h3>
            <input
              id="Password"
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              type="text"
            />
          </div>
          <button
            className="login"
            onClick={() => {
              setMessage(SignInAuth(username, password))
              ValidateSignIn(message, setPassword, setUsername)
            }}
          >
            Login
          </button>
          <label className="no-ac" htmlFor="">
            Dont have a account?
          </label>
          <button
            onClick={() => {
              setIsLogin(false)
            }}
            className="signUp"
          >
            Sign In
          </button>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="loginModel">
          <div className="cancel">
            <img
              onClick={() => {
                // modal.props.setModel((prev) => !prev)
                setModel(false)
              }}
              src={xIcon}
              alt=""
            />
          </div>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="inputs">
            <h3>Enter your email</h3>
            <input
              type="text"
              onChange={(e) => {
                setUsername(e.target.value)
              }}
            />
            <h3>Enter your password</h3>
            <input
              type="text"
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>
          <button
            className="login"
            onClick={() => {
              createUsr(username, password, setModel)
            }}
          >
            Create
          </button>
          <label className="no-ac" htmlFor="">
            Already have an account?
          </label>
          <button
            onClick={() => {
              setIsLogin(true)
            }}
            className="signUp"
          >
            Login
          </button>
        </div>
      </>
    )
  }

  async function SignInAuth(username, password) {
    console.log(username, password)
    name.current = username
    passwrd.current = password

    const post = await fetch("http://localhost:2000/sign_in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })

    const json = await post.json()
    return json.msg
  }

  function ValidateSignIn(msg, setPassword, setUsername) {
    msg?.then((data) => {
      if (data === "no_user") {
        setPassword("")
        setUsername("")

        const username = document.getElementById("Email")
        const password = document.getElementById("Password")

        username.value = ""
        password.value = ""
        alert("no user in this username")
      } else {
        setModel(false)
        setLogin(true)
      }
    })
  }
  
  function ValidateSignUp(msg) {
    // const { modal, setModel } = useContext(modelContext)
    if (msg?.msg === "created") {
      setModel(false)
      alert('user created')
    }
  }

  async function createUsr(username, password) {
    const post = await fetch("http://localhost:2000/sign_up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
    
    const json = await post.json()
    ValidateSignUp(json)
  }
}

export function SignUp() {
  return (
    <>
      <div className="cancel">
        <img src={xIcon} alt="" />
      </div>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="inputs">
        <h3>Enter your email</h3>
        <input type="text" />
        <h3>Enter your password</h3>
        <input type="text" />
      </div>
      <button className="login">Create</button>
    </>
  )
}
