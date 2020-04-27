import React from 'react'
import { PageHeader, Wrap } from './styled';
import Logo from '../Logo';
import PageNav from "../PageNav";
// import MenuBar from "../../components/MenuBar";

interface Header {

}

const Header: React.FC<Header> = () =>{
    return (
        <PageHeader>
            <Logo />
            <Wrap>
                <span className="oneLove">Front-end one love</span>
                <PageNav />
                {/*<MenuBar />*/}
            </Wrap>
        </PageHeader>
    )
};

export default Header;