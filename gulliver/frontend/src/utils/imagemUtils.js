
export const decodeToBase64 = (array) => {
    const arrayTesteFotoUsuario = [];
    array.forEach(item => {
        arrayTesteFotoUsuario.push(Buffer.from(item.usuario_foto.data, 'binary').toString('ascii'));  
        console.log("Teste1 decodeToBase64 " + arrayTesteFotoUsuario);
    });

    console.log("Teste2 decodeToBase64 " + arrayTesteFotoUsuario);

    return arrayTesteFotoUsuario;
}