import React from 'react';
import {Link} from 'react-router-dom';

import { imagemDecodeToBase64 } from '../../utils/imagemUtils';
import style from '../../style/Home.module.css';


const AreaLogo = ({ infoAgencia, logo }) => {
    // Object.values(console.log(infoAgencia))

    // const { logo } = infoAgencia;
    // const decodeLogo = '';

    // const decodeLogoToBase64 = (logo) => {
    //     console.log("Entrou AQUI?")
    //     decodeLogo = imagemDecodeToBase64(logo);
    // }

    return (
        <div className={style.areaLogo}>
            <div>
                <img src={logo} alt="usuarioImg" />
            </div>
            <span>
                <h3>{ infoAgencia.nome }</h3>
            </span>
        </div>
    )
}

export default AreaLogo;