import { BackgroundImageController } from "./Controllers/BackgroundImageController.js";


class App {


    backgroundImageController = new BackgroundImageController();
}

window["app"] = new App();