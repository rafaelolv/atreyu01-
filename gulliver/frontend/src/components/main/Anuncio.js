import React from 'react';
import style from '../../style/Anuncios.module.css';

const Anuncio = ( {pacote} ) => {
    return (
        <div className={style.anuncioNaoDestaque}>
            <div>
                <img src={pacote.imagem} alt="usuarioImg" />
            </div>
            <article>
                <h2>{ pacote.destino }</h2>
                <p>
                    { pacote.descricao } <br/>
                    {pacote.data_programada}
                </p>
            </article>
        </div>
    )
}

export default Anuncio;