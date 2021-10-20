import React from 'react';
import Anuncio from './Anuncio';

import style from '../../style/Anuncios.module.css';

const AnunciosSecundarios = () => {
    return (
        <section className={style.anunciosSecundarios}>
            <Anuncio />
        </section>
    );
};

export default AnunciosSecundarios;