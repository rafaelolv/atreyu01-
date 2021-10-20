import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from '../../../style/Nav.module.css';

const LoginButton = () => {
    return (
        <Fragment>
            <Link to={'/login'}>
                <button className={styles.buttonLogin}>
                    <span>Login</span> 
                    <span><FontAwesomeIcon icon={['fas', 'sign-in-alt']} /></span>
                </button>
            </Link>
        </Fragment>
    );
};

export default LoginButton;