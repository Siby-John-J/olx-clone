import React, { useEffect, useRef, useState } from "react"

import Left from "./banner/Left"
import Right from "./banner/Right"

import "../assets/styles/Header.css"
import {
  authContext, profileContext,
  nameContext, passwordContext  
} from "../context/authContext"

function Header() {

  useEffect(() => {

  },[])

  const name = useRef('')
  const passwrd = useRef('')
  const [login, setLogin] = useState(false)
  const [profileModel, setProfileModel] = useState(false)
  
  return (
    <div className="headerMain">
      <authContext.Provider value={{ login, setLogin }}>
        <profileContext.Provider value={{ profileModel, setProfileModel }} >
          <nameContext.Provider value={{ name }}>
            <passwordContext.Provider value={{passwrd}}>
              <Left />
              <Right />
            </passwordContext.Provider>
          </nameContext.Provider>
        </profileContext.Provider>
      </authContext.Provider>
    </div>
  )
}

export default Header
