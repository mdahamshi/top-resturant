import "./styles.css";
import logoImage from "../asset/food.svg";
import heroimg from "../asset/bg.jpg"
import { greeting } from "./greeting.js";
import {View} from './view.js';

new View();
const logo = document.querySelector('#nav-logo');
logo.src = logoImage;

const div = document.querySelector('.hero-section');
div.style.backgroundImage = `radial-gradient(ellipse at center, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroimg})`;


console.log(greeting);
