import http from "../http-common";

class AgenciaService {
    getAll() {
        console.log("Chegou 2!");
        return http.get("/agencias");
    }

    get(id) {
        return http.get(`/agencia/${id}`);
    }

    create(data) {
        console.log("Chegou aqui 1 service create agência!");
        return http.post("/agencias", data);
    }
}

export default new AgenciaService();