
export const decodeToBase64 = (array) => {
    const arrayTesteFotoUsuario = [];
    array.forEach(item => {
        arrayTesteFotoUsuario.push({...item, imagem: Buffer.from(item.imagem.data, 'binary').toString('ascii') });  
        console.log("Teste1 decodeToBase64 " + arrayTesteFotoUsuario);
    });

    console.log("Teste2 decodeToBase64 " + arrayTesteFotoUsuario);

    return arrayTesteFotoUsuario;
}

export const imagemDecodeToBase64 = (imagem) => {
    let imagemDecode = '';

    imagemDecode = Buffer.from(imagem.data, 'binary').toString('ascii');
    // console.log("___---__---- ")
    // Object.values(console.log(imagemDecode));
    return imagemDecode;
}




// export const decodeToBase64 = (array) => {
//     const arrayTesteFotoUsuario = [];
//     array.forEach(item => {
//         arrayTesteFotoUsuario.push(Buffer.from(item.imagem.data, 'binary').toString('ascii'));  
//         console.log("Teste1 decodeToBase64 " + arrayTesteFotoUsuario);
//     });

//     console.log("Teste2 decodeToBase64 " + arrayTesteFotoUsuario);

//     return arrayTesteFotoUsuario;
// }