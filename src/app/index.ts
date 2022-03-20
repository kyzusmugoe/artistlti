import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'bootstrap';
import fontawsome from './fontawsome';
import photoSwiper from './photoSwiper';
import flatpickr from "flatpickr";
//import Swiper, { Pagination, Navigation, Controller, Thumbs, Lazy, Autoplay, EffectFade } from 'swiper';

require("flatpickr/dist/themes/light.css");
import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';
import "swiper/css/effect-fade";
import "../css/main.sass"
import { init as initParallaxScrolling } from "./ParallaxScrolling"
import Pager from "./Pager"

fontawsome()
photoSwiper()

initParallaxScrolling(document.querySelectorAll("div.PS") as NodeList)

//datetimePicker
flatpickr(".datetimePicker", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
});