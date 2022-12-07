const tracker = document.getElementById('gallery-wrap'),
    images = document.getElementsByClassName('img');

let trackerPercentage = 0,
    trackerLastPercentage = 0,
    trackerPosition = 0;


const actionDown = e => {
    trackerPosition = e.clientX
}

const actionUp = () => {
    trackerPosition = 0
    trackerLastPercentage = trackerPercentage;
}

const actionMove = e => {
    if (trackerPosition === 0) return;

    const moved =  e.clientX - trackerPosition,
        percentage = (moved / (window.innerWidth / 2)) * 100 + trackerLastPercentage,
        correctPercentage = Math.max(Math.min(percentage, 0), -100),
        imgPos = correctPercentage + 100;

    trackerPercentage = correctPercentage

    tracker.animate({
        translate: `${correctPercentage}% -50%`
    },{duration: 1500, fill: 'forwards'})

    for(const image of images){
        image.animate({
            objectPosition: `${imgPos}% 50%`
        },{fill: "forwards", duration: 1500})
    }

}

window.onmousedown = e => actionDown(e);
window.ontouchstart = e => actionDown(e);

window.onmouseup = e => actionUp(e);
window.ontouchend = e => actionUp(e);

window.onmousemove = e => actionMove(e);
window.ontouchmove = e => actionMove(e);