import { API_URL } from './url';

// export default {
//   newCabRequestService: async (payload) => {
//     // axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
//     // await axios.post(`${API_URL.cabRequest}`, payload);
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json;charset=utf-8',
//       },
//       body: payload,
//     };
//     return await fetch(`${API_URL.cabRequest}`, options);
//   },
// };

export default {
  newCabRequestService: (payload) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(payload),
    };
    let response = fetch(`${API_URL.cabRequest}`, options).catch((error) => {
      alert('Unable to process your request. Please contact admin team for assistance');
      console.log(error);
    });
    console.log(response);
  },
};
