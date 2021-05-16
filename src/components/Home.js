import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import MainPage from './MainPage'

function Home() {
    return (
        <HomePage>
            <Navbar />
            <MainPage />
        </HomePage>
    )
}

export default Home

const HomePage =styled.div `
display: flex;
`