import axios from "axios";
import auth from '../common/auth';
const CONSTANTS = require('../constants/constants');
const { CHATS, MESSAGES } = CONSTANTS.SERVER;

export default {
    get_chats_by_user_id: () => {
        return axios.get(`${CHATS}/${auth.user_id}`, { withCredentials: true });
    },
    send_message: (message) => {
        return axios.post(`${MESSAGES}`, message);
    },
    get_messages_for_chat: (activeChatID) => {
        return axios.get(`${MESSAGES}/${activeChatID}`);
    },
    get_all_chats: () => {
        return axios.get(`${CHATS}/`);
    },
    get_chat_members: (chatID) => {
        return axios.get(`${CHATS}/members/${chatID}`);
    }
}