import { ProxyState } from "../AppState.js";
import { backgroundService } from "../Services/backgroundService.js";

function _drawBgImage() {
    document.getElementById("bgImage").style.backgroundImage = `url(${ProxyState.bgimages})`

    console.log("this is ur bg image currently", ProxyState.bgimages)

}

export class BackgroundImageController {




    constructor() {
        backgroundService.getBackgroundImage()
        ProxyState.on('bgimages', _drawBgImage)
    }


    async getBackgroundImage() {

        await backgroundService.getBackgroundImage()
    }
}