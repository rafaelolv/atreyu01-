import React from 'react';

import Logo from './nav/Logo';
import GeneralNavContainer from './nav/GeneralNavConteiner';

import style from '../../style/Nav.module.css';

const GeneralNav = () => {
    return(
        <div className={style.generalNav}>
            <Logo />
            <GeneralNavContainer />
        </div>    
    )
};

export default GeneralNav;