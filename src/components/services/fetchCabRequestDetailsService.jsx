import { API_URL } from './url';
import axios from 'axios';

export default {
  fetchCabRequestDetails: (payload) => {
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    return axios.get(`${API_URL.cabRequest}`, payload);
  },
};
