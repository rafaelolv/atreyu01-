import React from 'react';

import AreaAnunciosDestaque from './AreaAnunciosDestaque';
import AreaAnunciosNaoDestaque from './AreaAnunciosNaoDestaque';

import styles from '../../style/Anuncios.module.css';

const AreaAnuncios = () => {
    return (
        <section className={styles.areaAnuncios}>
            {/* <AreaAnunciosDestaque /> */}
            <AreaAnunciosNaoDestaque />
        </section>
    );
};

export default AreaAnuncios;