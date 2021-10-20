import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import styles from '../../../style/Nav.module.css';

const RegisterButton = () => {
    return (
        <Fragment>
            <Link to={"/usuarios"}>
                <button className={styles.buttonRegister}>
                    <span>Registrar</span>
                    <span><FontAwesomeIcon icon={['fas', 'id-card']} /></span>
                </button>
            </Link>
        </Fragment>
    );
};

export default RegisterButton;