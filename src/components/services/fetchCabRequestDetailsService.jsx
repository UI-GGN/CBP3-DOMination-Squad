import { API_URL } from './url';
import axios from 'axios';

export default {
  fetchCabRequestDetails: (payload) => {
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    return axios.get(`${API_URL.cabRequest}/employee/12345`, payload);
  },
};
