import React from 'react'
import styled from 'styled-components';

function Navbar() {
    return (
        <Sidebar>
            <Logo src='images/logo.svg'/>
            <Line/>
            <SideBarMenu>
                <a>
                    <img src='images/overview.svg'/>
                    <span>Overview</span>
                </a>
                <a>
                    <img src='images/cloud.svg'/>
                    <span>Cloud</span>
                </a>
                <a>
                    <img src='images/sketch.svg'/>
                    <span>Sketch</span>
                </a>
                <a>
                    <img src='images/experiments.svg'/>
                    <span>Experiments</span>
                </a>
                <a>
                    <img src='images/security.svg'/>
                    <span>Security</span>
                </a>
                <a>
                    <img src='images/ownership.svg'/>
                    <span>Ownership</span>
                </a>
                <a>
                    <img src='images/abtest.svg'/>
                    <span>A/B Test</span>
                </a>
                <a>
                    <img src='images/colors.svg'/>
                    <span>Colors</span>
                </a>
            </SideBarMenu>

            <LogOut>
                <a>
                    <img src='images/logout.svg'/>
                    <span>Logout</span>
                </a>
            </LogOut>
        </Sidebar>
    )
}

export default Navbar

const Sidebar=styled.div `
display:flex;
width:250px;
height: 100vh;
padding-top: 43px;
padding-left: 34px;
flex-direction:column;
font-family: Lato;
color: white;
background:linear-gradient(#5F00D8,#B200F1);
`

const Logo=styled.img `
width: 35px;
margin-bottom: 35px;
`

const SideBarMenu=styled.div `
display:flex;
flex:1;
padding-top: 38.2px;
flex-direction: column;
 a {
     display:flex;
     align-items: center;
     padding-bottom: 43px;
     cursor: pointer;
     img {
         width: 21px;
         height: 24px;
         padding-right: 21px;
     }

     span {
         font-size: 16px;
         font-style: bold;
         font-weight: bold;
     }
 }
`

const Line=styled.div `
position: absolute;
width: 181.83px;
height: 0px;
left: 30.14px;
top: 116.79px;
opacity: 0.2;
border: 1px solid #FFFFFF;

`

const LogOut=styled.div `
 a {
     display:flex;
     align-items: center;
     padding-bottom: 60px;
     cursor:pointer;
     img {
         width: 21px;
         height: 24px;
         padding-right: 21px;
     }
     span {
         font-size: 16px;
         font-style: bold;
         font-weight: bold;
     }
 }
`