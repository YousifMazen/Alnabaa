var slider = tns({
    container: '.brands-slider',
    items: 1,
    slideBy: 1,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayButtonOutput: false,
    controls: false,
    navPosition: 'bottom',
    mouseDrag: true,
    responsive: {
        420:{
            items: 2
        },
        767: {
            items: 3
        },
        992: {
            items: 5
        }
    }
});

var slider = tns({
    container: '.categories-slider',
    items: 1,
    slideBy: 1,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayButtonOutput: false,
    controls: false,
    navPosition: 'bottom',
    mouseDrag: true,
    responsive: {
        420: {
            items: 2
        },
        767: {
            items: 3
        },
        992: {
            items: 5
        }
    }
});

import { CountUp } from './packages/countUp.min.js';

window.onload = function () {
    var countUp = new CountUp('number-counter1', 2000, { enableScrollSpy: true });
    var countUp = new CountUp('number-counter2', 500, { enableScrollSpy: true });
    var countUp = new CountUp('number-counter3', 1000, { enableScrollSpy: true });

}
