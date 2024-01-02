import React from 'react'
import { Route, Routes } from "react-router-dom"
import Products from './Products'
import Footer from '../Footer'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Items from '../../components/Items'

import '../../assets/styles/App.css'

function Home() {
    return (
        <>
            <Header />
            <Banner />
            <Items />
            <Footer />
        </>
    )
}

export default Home
