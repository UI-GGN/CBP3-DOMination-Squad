import { API_URL } from './url';
import axios from 'axios';

export default {
  addAddressDetails: async (payload) => {
    const response = await axios.post(`${API_URL.addAddressDetails}`, payload);
  },
};
