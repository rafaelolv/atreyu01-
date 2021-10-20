import React from 'react';
import Anuncio from './Anuncio';

import style from '../../style/Anuncios.module.css';

const AnunciosDestaques = () => {
    return(
        <section className={style.anunciosDestaque}> 
            <Anuncio />
        </section>
    );
};

export default AnunciosDestaques;