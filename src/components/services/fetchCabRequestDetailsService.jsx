import { API_URL } from './url';
import axios from 'axios';

export default {
  fetchCabRequestDetails: async (payload) => {
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    await axios.get(`${API_URL.cabRequest}`, payload);
  },
};
