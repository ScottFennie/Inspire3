import { ProxyState } from "../AppState.js"
import { BgImage } from "../Models/BgImage.js"

// @ts-ignore
const bgImageApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api'
})

class BackgroundService {


    constructor() {

    }

    async getBackgroundImage() {
        let res = await bgImageApi.get('images')

        ProxyState.bgimages = res.data.largeImgUrl

        console.log("heres all the bg images", ProxyState.bgimages)

    }


}



export const backgroundService = new BackgroundService()