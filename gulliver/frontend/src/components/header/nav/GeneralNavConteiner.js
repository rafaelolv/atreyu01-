import React from 'react';
import {Link} from 'react-router-dom';

import styles from '../../../style/Nav.module.css';

const GeneralNavContainer = () => {
    return (
        <nav className={styles.generalNavContainer}>
            <ul className={styles.generalNavContainerUl}>
                <li>
                    <Link to={"/inicio"}>
                        <a>Início</a>
                    </Link>
                </li>
                <li>
                    <a>Agências</a>
                </li>
                <li>
                    <a>Promoções</a>
                </li>
                <li>
                    <a>Contato</a>
                </li>
                <li>
                    <a>Sobre</a>
                </li>
                <li>
                    <Link to={"/listagemUsuarios"}>
                        <a>Usuários</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );       
};

export default GeneralNavContainer;