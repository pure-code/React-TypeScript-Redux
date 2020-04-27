import React from 'react';
import {
    Menu,
    Close,
    Header,
} from './styled';
import PageNav from '../PageNav';
import SwitchLanguage from '../SwitchLanguage';

interface MenuBar {

}

const MenuBar: React.FC<MenuBar> = () => {
    return (
        <Menu>
            <Header>
                <SwitchLanguage lang='EN'/>
                <Close>X</Close>
            </Header>
            <PageNav/>
        </Menu>
    )
};

export default MenuBar;
