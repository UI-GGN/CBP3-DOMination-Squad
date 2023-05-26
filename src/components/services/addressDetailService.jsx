import axios from "axios"
import {API_URL} from "./url"


export default {

    addAddressDetails: async (payload) => {
        console.log("service")
        const response = await axios.post(`${API_URL.addAddressDetails}`,payload);
        console.log(response);
    },
}
