import React, { Component } from 'react';

const InputImage = ({handlerChangeImage}) => {

   const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

  const handlerFileUpload = async (event) => {
        const file = event.target.files[0];
        const base64 = await convertToBase64(file);
        handlerChangeImage(event, base64);
    };

    return (
        <div>
            <label htmlFor="image">
                Adicione uma imagem de exibição
            </label><br/>
            <input 
                type="file"
                id="usuarioFoto"
                label="Image"
                name="usuarioFoto"
                accept=".jpeg, .png, .jpg"
                onChange={(event) => handlerFileUpload(event)}
            />
        </div>
    )
}

export default InputImage;