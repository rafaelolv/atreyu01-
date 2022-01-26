import React from "react";

const DadosGestor = (dados, getDadosGestor) => {

    const sendData = () => {
        getDadosGestor(this.dados);
        console.log(this.dados);
    };

    return (
        <div>
            <p>
                Teste: 
            </p>
        </div>
    );
};

export default DadosGestor;