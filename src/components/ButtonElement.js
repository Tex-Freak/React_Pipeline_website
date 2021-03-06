import styled from "styled-components";
import { Link } from "react-scroll";


export const Button =styled(Link)`

border-radius:50px;
background:${({primary}) => (primary ? "#FF970D" : "#fff")};
white-space:nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({dark}) => (dark ? "black" : "#FF970D") };
font-size: ${({fontBig}) => (fontBig ? "20px" : "16px")};
border:none;
outline:none;
cursior:pointer;
display:flex;
justify-content:center;
align-items:center;
transition: all 0.2s ease-in-out;


&:hover{
  transition: all 0.2s ease-in-out;
  background: ${({primary}) => ( primary ?  "#fff" : "#FF970D")}  
}

`

