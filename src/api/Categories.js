import axios from "axios";
const CONSTANTS = require('../constants/constants');
const { CATEGORIES } = CONSTANTS.SERVER;

export default {
    get_all_categories: () => {
        let categories = axios.get(`${CATEGORIES}/`);
        return categories;
    },
    get_category_chats: (categoryID) => {
        let categories = axios.get(`${CATEGORIES}/${categoryID}`)
        return categories;
    },
}