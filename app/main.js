import { BackgroundImageController } from "./Controllers/BackgroundImageController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {


    backgroundImageController = new BackgroundImageController();

    weatherController = new WeatherController();
}

window["app"] = new App();