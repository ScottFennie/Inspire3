import { BackgroundImageController } from "./Controllers/BackgroundImageController.js";
import { ClockController } from "./Controllers/ClockController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {


    backgroundImageController = new BackgroundImageController();

    weatherController = new WeatherController();

    quoteController = new QuoteController();

    clockController = new ClockController();
}

window["app"] = new App();