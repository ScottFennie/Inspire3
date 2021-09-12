import { ProxyState } from "../AppState.js"

class UserService {

    constructor() {

    }

    createAUser(user) {

        ProxyState.currentuser = user
        ProxyState.currentuser = ProxyState.currentuser

        console.log("testing current user proxy", ProxyState.currentuser)
    }
}

export const userService = new UserService