import { CREATE_AGENCIA } from "./actionTypes/agenciaActionTypes";
import { CREATE_USUARIO } from "./actionTypes/usuarioActionTypes";
import AgenciaService from "../services/agenciaService";

export const createAgencia = (newAgencia) => async (dispatch) => {
    try {
        const res = await AgenciaService.create(newAgencia);

        console.log("action creacteAgencia Chegou aqui! " + res.data.agencia.nome + res.data.agencia.cnpj + res.data.agencia.id_agencia + " -- " + Object.values(res.data));
        console.log("action creacteAgencia Chegou aqui! " + res.data.pessoa.nome  + res.data.pessoa.sobrenome + res.data.pessoa.id_pessoa);

        dispatch({
            type: CREATE_USUARIO,
            payload: res.data.pessoa
        });
        
        dispatch({
            type: CREATE_AGENCIA,
            payload: res.data.agencia
        });

        return Promise.resolve(res);
    } catch(err) {
        return Promise.reject(err);
    }
};

// testar apenas com o } catch (err) {  no final do try, no lugar do return promisse.resolve e return promisse.reject, ja que nao estou precisando retornar para o  metodo chamador na pagina
                        //     console.log(err);
                        // }
// caso precisa-se retornar os dados para a pagina para já serem usados, usaria o return promisse.resolve e return promisse.reject mesmo.

// export const retrieveUsuarios = () => async (dispatch) => {
   
//     try {
//         const res = await Usuarioservice.getAll();
//         console.log("actions res " + res.data)
//         let usuarios = res.data;
//         usuarios.map(usuario => console.log("Nome: " + usuario.nome))
//         dispatch({
//           type: LIST_USUARIO,
//           payload: res.data,
//         });
//       } catch (err) {
//         console.log(err);
//       }
// }