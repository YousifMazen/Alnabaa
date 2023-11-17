var slider = tns({
    container: '.brands-slider',
    items: 5,
    slideBy: 1,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayButtonOutput: false,
    controls: false,
    navPosition: 'bottom',
    mouseDrag: true,
    // responsive: {
    //     640: {

    //         items: 2
    //     },
    //     700: {
    //         gutter: 30
    //     },
    //     900: {
    //         items: 3
    //     }
    // }
});

var slider = tns({
    container: '.categories-slider',
    items: 5,
    slideBy: 1,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayButtonOutput: false,
    controls: false,
    navPosition: 'bottom',
    mouseDrag: true,
    // responsive: {
    //     640: {

    //         items: 2
    //     },
    //     700: {
    //         gutter: 30
    //     },
    //     900: {
    //         items: 3
    //     }
    // }
});

import { CountUp } from './packages/countUp.min.js';

window.onload = function () {
    var countUp = new CountUp('number-counter1', 2000, { enableScrollSpy: true });
    var countUp = new CountUp('number-counter2', 500, { enableScrollSpy: true });
    var countUp = new CountUp('number-counter3', 1000, { enableScrollSpy: true });

}
