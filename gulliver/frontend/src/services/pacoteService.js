import http from "../http-common";

class PacoteService {

    getAll() {
        console.log("Chegou 2!");
        return http.get("/pacotes");
    }

    get(id) {
        return http.get(`/pacotes/${id}`);
    }

    create(data) {
        console.log("Chegou aqui 1 service create pacotes!");
        return http.post("/pacotes", data);
    }
}

export default new PacoteService();