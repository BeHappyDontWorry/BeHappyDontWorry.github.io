import { App } from "./app/";
import "./styles/global.scss";
import { InputSystem } from "./shared/Engine/InputSystem";

InputSystem.init();
const main = new App();
main.run();
