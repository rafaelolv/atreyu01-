import React from 'react';

import GeneralNav from './header/GeneralNav';
import NavAutenticacao from './header/NavAutenticacao';

import styles from '../style/Header.module.css';


export default props => (
    <header className= {styles.header}>
        <GeneralNav />
        <NavAutenticacao />
    </header>
)

