import { API_URL } from './url';
import axios from 'axios';

export default {
  newCabRequestService: async (payload) => {
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    await axios.post(`${API_URL.cabRequest}`, payload);
  },
};
