import styled from 'styled-components';
import {Link} from "react-router-dom";

export const StyledLink = styled(Link)`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'Source Code Pro', monospace;
	font-size: 22px;
	font-weight: 400;
	color: #333;
	text-transform: uppercase;
	width: 240px;
	height: 50px;
	background: #00FA9A;
	border-radius: 3px;
	border: none;
	outline: none;
	cursor: pointer;
	user-select: none;
	box-sizing: border-box;
	text-decoration: none;
	transition: .5s;
	overflow: hidden;
	text-align: center;

	@media (max-width: 1200px){
	width: 200px;
	height: 45px;
	font-size: 18px;
	}

	@media (max-width: 1000px){
	width: 160px;
	height: 40px;
	font-size: 16px;
	}
`;

export const SwitchLanguage = styled(StyledLink)`
	background: transparent;
	width: auto;
	height: auto;
	color: #0076ff;
	text-transform: none;
	font-family: 'Roboto', sans-serif;
	font-size: 14px;
	font-weight: 400;
	margin-right: 50px;
	&:hover{
	text-decoration: underline;
	}
`;

export const AboutUs = styled(Link)`
	position: relative;
	display: flex;
	align-items: center;
	margin-left: 40px;
	font-weight: 600;
	font-size: 20px;
	height: 30px;
	cursor: pointer;
	background: transparent;
	outline: none;
	color: #333;

	& svg{
	margin-left: 10px;
	}

	&::before{
	position: absolute;
	content: '';
	left: 50%;
	right: 70%;
	bottom: 0;
	height: 3px;
	background: #00FA9A;
	transition: .5s;
	z-index: -1;
	}

	&:hover{

    &::before{
    right: 20px;
    left: 0;
    }
	}

	@media (max-width: 1200px){
	font-size: 18px;
	}

	@media (max-width: 1000px){
	font-size: 15px;
	margin-left: 30px;
	}
`;

export const Hire = styled(StyledLink)`
	background: #00FA9A;
	color: #000;
	font-size: 16px;
	font-weight: 500;
	width: 180px;
	height: 40px;
`;

export const More = styled(StyledLink)`
	background: transparent;
	color: #333;
	font-size: 16px;
	font-weight: 500;
	width: 180px;
	height: 40px;
	margin: auto auto 0;
	background: rgba(42, 40, 61, 0.05);
	transition: .1s;

	&:hover{
		background: #0076ff;
		color: #fff;
	}
`;

export const Social = styled(StyledLink)`
	width: 40px;
	height: 40px;
	background: transparent;
	border: 2px solid #00FA9A;
	margin-left: 20px;
	font-size: 15px;
	padding-bottom: 7px;
`;