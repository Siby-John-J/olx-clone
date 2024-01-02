import React, { useState, useContext, useEffect } from "react"
import { Route, Routes, Link, useNavigate } from "react-router-dom"
import {
  authContext,
  modelContext,
  profileContext,
  nameContext,
  passwordContext
} from "../../context/authContext"

import "../../assets/styles/Header.css"
import "../../assets/styles/Auth.css"

import { SignIn, SignUp } from "../pages/AuthPage"

import arrowDown from "../../assets/icons/arrow-down.png"
import chat from "../../assets/icons/chat.png"
import bell from "../../assets/icons/bell.png"

function Right() {
  const navigate = useNavigate()
  const [dblogin, setDblogin] = useState(false)
  const { login, setLogin } = useContext(authContext)
  const { model, setModel } = useContext(modelContext)
  const { profileModel, setProfileModel } = useContext(profileContext)

  const { name } = useContext(nameContext)
  const { passwrd } = useContext(passwordContext)

  useEffect(() => {
    async function isLogin() {
      const get = await fetch('http://localhost:2000/getLogin')
      const json = await get.json()

      setLogin(json.msg)

    }
    
    isLogin()
  }, [])

  async function logout() {
    const set = await fetch('http://localhost:2000/logout')
  }

  // console.log(name, passwrd, ' insude iec')

  return (
    <>
      <div className="rightComponent">
        <div className="lang">
          <label htmlFor="">ENGLISH</label>
          <img src={arrowDown} alt="" />
        </div>
        <img id="chat" src={chat} alt="" />
        <img id="bell" src={bell} alt="" />
        {login ? AuthE() : Login(model, setModel)}
        {/* <Link to="/post">
        </Link> */}
        <button onClick={() => {
          checkLogin()
        }}>sell</button>
      </div>
      {model ? <SignIn /> : ""}
    </>
  )
  function Model() {
    if (login && profileModel) {
      return (
        <div className="account-model">
          <div className="wrap">
            <label id="acc-icon" htmlFor="">
              S
            </label>
            <label id="name" htmlFor="">
              Siby John
            </label>
          </div>
          <button
            onClick={() => {
              logout()
              setLogin(false)
            }}
          >
            Logout
          </button>
        </div>
      )
    }
  }

  function AuthE() {
    return (
      <>
        <div
          onClick={() => {
            setProfileModel(!profileModel)
          }}
          className="account"
        >
          <label htmlFor="">S</label>
          <img src={arrowDown} alt="" />
        </div>
        {Model()}
      </>
    )
  }

  function Login(model, setModel) {
    const { login, setLogin } = useContext(authContext)

    if (login === false) {
      return (
        <div className="login">
          <div
            onClick={() => {
              setModel(true)
            }}
          >
            login
          </div>
          {/* { login === true ? <SignIn /> : "" } */}
        </div>
      )
    } else {
      // return (
      //   <AuthE props={{model, setModel}} />
      // )
    }
  }
  function checkLogin() {
    if (login) {
      navigate("/post")
    } else {
      alert("please sign in to sell")
    }
  }
}


export default Right
