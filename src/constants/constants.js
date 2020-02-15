module.exports = {
    SERVER: {
        HOSTNAME: "http://localhost:4000",
        AUTHENTICATE: "/authenticate",
        REGISTER: "/register",
        MESSAGES: "/messages",
        CHATS: "/chats",
        HOMEPAGE: "/homepage"
    },
    LOGIN_STATE: {
        GUEST_LOGIN: "guest_login",
        USER_LOGIN: "user_login",
        NOT_LOGGED_IN: "not_logged_in"
    },
    LOGIN_TYPE: {
        GUEST_ENTRY: "guest_entry",
        LOGIN_ENTRY: "login_entry",
        SIGNUP_ENTRY: "signup_entry"
    },
    PAGE_PATHS: {
        LOGIN_PAGE:"/",
        HOME_PAGE: "/app",
        CATEGORIES_LIST_PAGE: "/app/categories",
        CHATS_LIST_PAGE:"/app/chats",
        CHAT_PAGE:""
    }
}