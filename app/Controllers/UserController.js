import { ProxyState } from "../AppState.js";
import { userService } from "../Services/UserService.js";

function _drawUserInput() {

    if (ProxyState.currentuser == "") {

        document.getElementById("namezone").innerHTML = /*html*/ `
        <form onsubmit="app.userController.createAUser()">
            <div class="mb-3 pt-2">
                <input type="text" class="inputzone2" id="name" >
            </div>
        </form>
        `
    } else {

        document.getElementById("namezone").innerHTML = /*html*/ `
        <h2>&nbsp${ProxyState.currentuser}</h2>`
    }

}

export class UserController {

    constructor() {
        _drawUserInput()
        ProxyState.on('currentuser', _drawUserInput)
    }

    createAUser() {
        event.preventDefault()

        let form = event.target

        let newUser = form.name.value

        userService.createAUser(newUser)
        form.reset()

    }
}