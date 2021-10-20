import http from "../http-common";

class UsuarioService {
    getAll() {
        console.log("Chegou 2!");
        return http.get("/usuarios");
    }

    get(id) {
        return http.get(`/usuarios/${id}`);
    }

    create(data) {
        console.log("Chegou aqui 1 createe!");
        return http.post("/usuarios", data);
    }
}

export default new UsuarioService();