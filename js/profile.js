import { CountUp } from './packages/countUp.min.js';

window.onload = function () {
    var countUp = new CountUp('number-counter1', 2000, { enableScrollSpy: true });
    var countUp = new CountUp('number-counter2', 500, { enableScrollSpy: true });
    var countUp = new CountUp('number-counter3', 1000, { enableScrollSpy: true });

}