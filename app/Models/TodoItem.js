import { ProxyState } from "../AppState"

export class TodoItem {

    constructor(todoData) {
        this.description = todoData.description
        this.user = ProxyState.currentuser
        this.completed = todoData.completed || false
    }

    get Template() {

        return /*html*/ `
        <li class="list-group-item glassy2">
            <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."${this.completed == true ? "checked" : ""}>${this.description}
        </li>
        `
    }
}