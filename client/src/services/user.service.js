import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.VUE_APP_BASE_SERVER_URL;

class UserService {
  getGallery() {
    return axios.get(API_URL + 'gallery', { headers: authHeader() });
  }
}

export default new UserService();