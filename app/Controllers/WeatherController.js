import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";


function _drawWeather() {

    document.getElementById('weatherzone').innerHTML = ProxyState.weather.Template
}

export class WeatherController {

    constructor() {
        this.getWeather()
        ProxyState.on('weather', _drawWeather)
    }


    async getWeather() {

        await weatherService.getWeather()
    }

}