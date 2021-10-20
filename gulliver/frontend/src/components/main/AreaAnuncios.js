import React from 'react';

import AnunciosDestaques from './AnunciosDestaques';
import AnunciosSecundarios from './AnunciosSecundarios';

import styles from '../../style/Anuncios.module.css';

const AreaAnuncios = () => {
    return (
        <section className={styles.areaAnuncios}>
            <AnunciosDestaques />
            <AnunciosSecundarios />
        </section>
    );
};

export default AreaAnuncios;