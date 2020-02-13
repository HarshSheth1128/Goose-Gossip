import axios from "axios";
import auth from '../common/auth';
const CONSTANTS = require('../constants/constants');
const { AUTHENTICATE, REGISTER } = CONSTANTS.SERVER;

export default {
    authenticate_user: (data) => {
        console.log(data);
        return (data) ? axios.post(AUTHENTICATE, data) : axios.post(AUTHENTICATE);
    },
    register_user: (data) => {
        console.log(data);
        return axios.post(REGISTER, data);
    }
}