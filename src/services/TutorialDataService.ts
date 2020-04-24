import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/tutorials");
  }

  get(id: string) {
    return http.get(`/tutorials/${id}`);
  }

  create(data: any) {
    return http.post("/tutorials", data);
  }

  update(id: string, data: any) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id: string) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title: string) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();