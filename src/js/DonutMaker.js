let donutCount = 0;
let autoClickerCount = 0;
let autoClickerCost = 100;
let donutMultiplierCount = 0;
let donutMultiplierCost = 10;

let doughnutNumber = document.querySelector(".doughnut__count");
let doughnutButton = document.getElementById("doughnut__button");
let actualDoughnutClick = document.querySelector(".actual__Doughnut__Click");

let autoclickerNumber = document.querySelector(".autoclicker__count");
let autoclickerButton = document.getElementById("autoclicker__button");
let autoclickerPrice = document.querySelector(".autoclicker__price");

let doughnutMultiplierNumber = document.querySelector(".doughnutMultiplier__count");
let doughnutMultiplierButton = document.getElementById("doughnutMultiplier__button");
let doughnutMultiplierPrice = document.querySelector(".doughnutMultiplyer__price");

let reloadButton = document.getElementById("reload__button");

doughnutButton.addEventListener('click', clickEvent);
autoclickerButton.addEventListener('click', buyAutoClicker);
doughnutMultiplierButton.addEventListener('click', increaseDonutMultiplierCount);
reloadButton.addEventListener('click', reload);

function clickEvent() {
    //alert("You just made a doughnut");
    if(donutMultiplierCount===0) {
        donutCount++; 
        //console.log(donutCount);
    }else {
        donutCount = (1.2**donutMultiplierCount) + donutCount;
    }
    //console.log(Math.round(donutCount));
    doughnutNumber.innerText = Math.round(donutCount);
    actualDoughnutClick.innerText = 1.2**donutMultiplierCount;
}
function retrieveDonutCount() {
    return donutCount;
}

function buyAutoClicker() {
    if (donutCount>=autoClickerCost) {
        donutCount = donutCount - autoClickerCost;
        autoClickerCost = autoClickerCost*1.1;
        autoClickerCount= autoClickerCount +1;
        
        autoclickerPrice.innerText = Math.round(autoClickerCost);
        doughnutNumber.innerText = Math.round(donutCount);
    } else {
        alert("You don't have enough doughnuts for that, keep clicking!");
        // throw error to say cant buy autor clicker
        doughnutNumber.innerText = Math.round(donutCount);
    }
    if (autoClickerCount>0) {
        activateAutoClickers();
    }
    autoclickerNumber.innerText = autoClickerCount;
}
function retrieveAutoClickerCount() {
    return autoClickerCount;
}

function activateAutoClickers() {
    setInterval(function() {
        clickEvent();
        doughnutNumber.innerText = Math.round(donutCount);
    }, 1000);
}

function increaseDonutMultiplierCount() {
    //alert("The donut multiplier cont should increase");
    if (donutCount>=donutMultiplierCost){
    donutMultiplierCount++;
    donutCount = donutCount-donutMultiplierCost;
    donutMultiplierCost = donutMultiplierCost * 1.1;

    doughnutMultiplierNumber.innerText = donutMultiplierCount;
    doughnutMultiplierPrice.innerText = Math.round(donutMultiplierCost);
    actualDoughnutClick.innerText = 1.2**donutMultiplierCount;

    } else {
        alert("You don't have enough doughnuts for that, keep clicking!");
        // throw error to say cant buy
        doughnutNumber.innerText = Math.round(donutCount);
    }
}
function retrieveDonutMultiplierCount() {
    return donutMultiplierCount;
}
function reload() {
    location.reload();
}