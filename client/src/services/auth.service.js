import axios from "axios";

const API_URL = process.env.VUE_APP_BASE_SERVER_URL || process.env.BASE_URL;

class AuthService {
  login(data) {
    return axios
      .post(API_URL + "login", data)
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(data) {
    return axios.post(API_URL + "signup", data);
  }
}

export default new AuthService();