import React from 'react'
import styled from 'styled-components';

function Header() {
    return (
            <Heading>
           <h1>Overview</h1>
           <div>
           <button className='btn2'>...</button>
           <button className='btn1'>Add</button>
           </div>
           </Heading>
    )
}

export default Header

const Heading=styled.div `
padding-top:55px;
padding-left: 82px;
padding-right: 73px; 
margin-bottom: 38px;
display: flex;
align-items: center;
h1 {
font-family: Lato,
font-weight: 400,
display: flex,
}
div {
  margin-left: auto;
  order:1;
}
.btn1 {
width: 67.45px;
height: 35.5px;
border:0;
background: #10CD45;
border-radius: 5px;
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 17px;
text-align: center;
color: white;
}

.btn2 {
width: 67.45px;
height: 35.5px;
border:0;
margin-right: 11px;
background-color: #EEF2F5;
border-radius: 5px;
color: #9DADB9;
fontSize: 25px;
font-family: Lato;
font-style: bold;
fontWeight: 1000;
letter-spacing: 1.42px;
}
`
