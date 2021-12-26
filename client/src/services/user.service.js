import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.VUE_APP_BASE_SERVER_URL || process.env.BASE_URL;

class UserService {
  getTransfer() {
    return axios.get(API_URL + 'transfer');
  }

  getGallery() {
    return axios.get(API_URL + 'gallery', { headers: authHeader() });
  }
}

export default new UserService();