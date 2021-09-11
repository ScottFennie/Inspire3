export class Weather {

    constructor(weatherData) {
        this.main = weatherData.main
        this.icon = weatherData.icon
        this.temp = weatherData.temp

    }

    get Template() {

        return /*html*/ `
        <h3 class="pt-3">${this.temp}</h3>
        <h6>${this.main}</h6>
        `
    }
}