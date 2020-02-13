module.exports = {
    SERVER: {
        HOSTNAME: "http://localhost:4000",
        AUTHENTICATE: "/authenticate",
        REGISTER: "/register",
        MESSAGES: "/messages",
        CHATS: "/chats",
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
    }
}