export class Weather {

    constructor(weatherData) {
        this.icon = weatherData.weather.icon
        this.base = weatherData.base
        this.temp = weatherData.main.temp
        this.type = weatherData.type || 0
        this.name = weatherData.name
        this.main = weatherData.weather.main

    }

    get Template() {

        return /*html*/ `
        <h3 class="pt-3">${this.temp}</h3>
        <h6>${this.name}</h6>
        `
    }
}