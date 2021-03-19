let donutCount = 0;
let autoClickerCount = 0;
let autoClickerCost = 100;
let donutMultiplierCount = 0;
let donutMultiplierCost = 10;


function clickEvent() {
    if(donutMultiplierCount===0) {
        donutCount = donutCount +1;
    }else {
        donutCount = (1.2**donutMultiplierCount) + donutCount;
    }
}
function retrieveDonutCount() {
    return donutCount;
}

function buyAutoClicker() {
    if (donutCount>=autoClickerCost) {
        donutCount = donutCount - autoClickerCost;
        autoClickerCost = autoClickerCost*1.1;
        autoClickerCount= autoClickerCount +1;
    } else {
        // throw error to say cant buy autor clicker
    }
}
function retrieveAutoClickerCount() {
    return autoClickerCount;
}

function automatedClick(){
    // donutCount = donutCount + autoClickerCount;
    for (i=autoClickerCount, i>0, i--) {
        clickEvent();
    }
}
function increaseDonutMultiplierCount() {
    if (donutCount>=donutMultiplierCost){
    donutMultiplierCount = donutMultiplierCount +1 ;
    donutCount = donutCount-donutMultiplierCost;
    donutMultiplierCost = donutMultiplierCost * 1.1;
    } else {
        // throw error to say cant buy
    }
}
function retrieveDonutMultiplierCount() {
    return donutMultiplierCount;
}