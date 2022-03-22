import React from 'react';
import Anuncio from './Anuncio';

import style from '../../style/Anuncios.module.css';

const AreaAnunciosDestaque = () => {
    return(
        <section className={style.areaAnunciosDestaque}> 
            <Anuncio />
        </section>
    );
};

export default AreaAnunciosDestaque;