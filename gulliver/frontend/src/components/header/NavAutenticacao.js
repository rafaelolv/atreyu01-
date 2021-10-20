import React from 'react';

import LoginButton from './nav/LoginButton';
import RegisterButton from './nav/RegisterButton';

import styles from '../../style/Nav.module.css';

const NavAutenticacao = () => {
    return (
        <aside className={styles.navAutenticacao}>
            <LoginButton />
            <RegisterButton  />
        </aside>
    );
};

export default NavAutenticacao;