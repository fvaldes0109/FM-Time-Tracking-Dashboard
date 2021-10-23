let status, last;
let toggle = [];
let current, previous;

function init() {
    status = 'weekly';
    last = 'Last Week'
    
    current = document.querySelectorAll('.current');
    previous = document.querySelectorAll('.previous');
    toggle[0] = document.querySelector('.daily');
    toggle[1] = document.querySelector('.weekly');
    toggle[2] = document.querySelector('.monthly');
    toggle[1].style.color = "#FFFFFF";
    
    loadData();

    toggle.forEach((element, index) => {
        element.addEventListener('click', (event) => { changeStats(event, index) });
    });
}

function loadData() {
    data.forEach((element, index) => {
        current[index].innerHTML = `${data[index].timeframes[status].current}hrs`;
        previous[index].innerHTML = `${last} - ${data[index].timeframes[status].current}hrs`;
    });
}

function changeStats(event, index) {
    toggle[0].style.color = "hsl(235, 45%, 61%)";
    toggle[1].style.color = "hsl(235, 45%, 61%)";
    toggle[2].style.color = "hsl(235, 45%, 61%)";

    toggle[index].style.color = "#FFFFFF";

    if (index === 0) {
        status = 'daily';
        last = 'Yesterday'
    } else if (index === 1) {
        status = 'weekly';
        last = 'Last Week';
    } else {
        status = 'monthly';
        last = 'Last Month';
    }

    loadData();
}

window.addEventListener('load', init);