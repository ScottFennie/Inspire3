import { ProxyState } from "../AppState.js"
import { TodoItem } from "../Models/TodoItem.js"

class UserService {

    constructor() {

    }

    createAUser(user) {

        ProxyState.currentuser = user
        ProxyState.currentuser = ProxyState.currentuser

        console.log("testing current user proxy", ProxyState.currentuser)
    }
    createATodo(newTodo) {

        ProxyState.todos = [...ProxyState.todos, new TodoItem(newTodo)]

        console.log("newTodo Data", ProxyState.todos)

    }
}

export const userService = new UserService