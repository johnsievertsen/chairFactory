const renameButton = document.querySelector('.rename');
const renameValue = document.querySelector('.name');
const output = document.querySelector('.output');
const factoryName = document.querySelector('.factory-name');
const factory = document.querySelector('.factory');
const woodProdButton = document.querySelector('.wood-produce');
const woodAmt = document.querySelector('.wood');
const clothProdButton = document.querySelector('.cloth-produce');
const clothAmt = document.querySelector('.cloth');
const money = document.querySelector('.money');
const chairs = document.querySelector('.chairs');
const woodProdTime = document.querySelector('.wood-prod-time');
const woodAuto = document.querySelector('.wood-automate');
const clothProdTime = document.querySelector('.cloth-prod-time');
const clothAuto = document.querySelector('.cloth-automate');
const woodTimer = document.querySelector('.wood-prod-timer');
const woodDouble = document.querySelector('.wood-double');
const clothTimer = document.querySelector('.cloth-prod-timer');
const clothUnlock = document.querySelector('.cloth-unlock');
const clothDouble = document.querySelector('.cloth-double');
const officeProdButton = document.querySelector('.office-produce');
const officeAmt = document.querySelector('.office');
const officeProdTime = document.querySelector('.office-prod-time');
const officeAuto = document.querySelector('.office-automate');
const officeTimer = document.querySelector('.office-prod-timer');
const officeUnlock = document.querySelector('.office-unlock');
const officeDouble = document.querySelector('.office-double');
const leatherProdButton = document.querySelector('.leather-produce');
const leatherAmt = document.querySelector('.leather');
const leatherProdTime = document.querySelector('.leather-prod-time');
const leatherAuto = document.querySelector('.leather-automate');
const leatherTimer = document.querySelector('.leather-prod-timer');
const leatherUnlock = document.querySelector('.leather-unlock');
const leatherDouble = document.querySelector('.leather-double');
const reclinerProdButton = document.querySelector('.recliner-produce');
const reclinerAmt = document.querySelector('.recliner');
const reclinerProdTime = document.querySelector('.recliner-prod-time');
const reclinerAuto = document.querySelector('.recliner-automate');
const reclinerTimer = document.querySelector('.recliner-prod-timer');
const reclinerUnlock = document.querySelector('.recliner-unlock');
const reclinerDouble = document.querySelector('.recliner-double');
const settingsModal = document.querySelector('.modal');
const settingsButton = document.querySelector('.settings');
const closeSettings = document.querySelector('.close');
const closePrestige = document.querySelector('.deny');
const red1 = document.getElementById('red-header-background-slider');
const green1 = document.getElementById('green-header-background-slider');
const blue1 = document.getElementById('blue-header-background-slider');
const red2 = document.getElementById('red-header-text-slider');
const green2 = document.getElementById('green-header-text-slider');
const blue2 = document.getElementById('blue-header-text-slider');
const red3 = document.getElementById('red-factory-background-slider');
const green3 = document.getElementById('green-factory-background-slider');
const blue3 = document.getElementById('blue-factory-background-slider');
const red4 = document.getElementById('red-factory-text-slider');
const green4 = document.getElementById('green-factory-text-slider');
const blue4 = document.getElementById('blue-factory-text-slider');
const sliders = document.querySelectorAll('.slider');
const prestigeButton = document.querySelector('.prestige');
const prestigeConfirmButton = document.querySelector('.confirm');
const prestigeWarning = document.querySelector('.prestige-warning');
let totalDollars = localStorage.getItem('totalDollars');
let totalDollarsArray = JSON.stringify(totalDollars).split('');
let totalChairs = 0;
let prestigeBonus = localStorage.getItem('prestigeBonus');

const prodStats = {
    woodTime: 3.25,
    woodValue: 4.5,
    woodAmount: 0,
    woodSpeedUpgradeCost: 50,
    woodAutoUpgradeCost: 1800,
    woodDoubleUpgradeCost: 4400,
    woodMultiplier: 1,
    clothTime: 10,
    clothValue: 24.9,
    clothAmount: 0,
    clothSpeedUpgradeCost: 250,
    clothAutoUpgradeCost: 5500,
    clothDoubleUpgradeCost: 10296,
    clothUnlock: 140,
    clothMultiplier: 1,
    officeTime: 60,
    officeValue: 108.7,
    officeAmount: 0,
    officeSpeedUpgradeCost: 742,
    officeAutoUpgradeCost: 9375,
    officeDoubleUpgradeCost: 18050,
    officeUnlock: 1625,
    officeMultiplier: 1,
    leatherTime: 180,
    leatherValue: 386,
    leatherAmount: 0,
    leatherSpeedUpgradeCost: 1502,
    leatherAutoUpgradeCost: 17832,
    leatherDoubleUpgradeCost: 34102,
    leatherUnlock: 8309,
    leatherMultiplier: 1,
    reclinerTime: 380,
    reclinerValue: 592.79,
    reclinerAmount: 0,
    reclinerSpeedUpgradeCost: 3845,
    reclinerAutoUpgradeCost: 44278,
    reclinerDoubleUpgradeCost: 80233,
    reclinerUnlock: 21010,
    reclinerMultiplier: 1,
}

function init() {
    switch (true) {
        case !localStorage.getItem('prestigeBonus'):
            localStorage.setItem('prestigeBonus', 1);
            console.log('initializing-prestigeBonus');
        case !localStorage.getItem('totalDollars'):
            localStorage.setItem('totalDollars', 0);
            location.reload();
            console.log('initializing-totalDollars');
        case !localStorage.getItem('totalChairs'):
            localStorage.setItem('totalChairs', 0);
            console.log('initializing-totalChairs')
        case !localStorage.getItem('factoryName'):
            localStorage.setItem('factoryName', 'Your Chair Factory');
            console.log('initializing-factoryName');
        case !localStorage.getItem('woodProdButtonDisabled'):
            localStorage.setItem('woodProdButtonDisabled', false);
            console.log('initializing-woodProdButtonDisabled');
        case !localStorage.getItem('woodProdTimeDisabled'):
            localStorage.setItem('woodProdTimeDisabled', false);
            console.log('initializing-woodProdTimeDisabled');
        case !localStorage.getItem('woodAutoDisabled'):
            localStorage.setItem('woodAutoDisabled', false);
            console.log('initializing-woodAutoDisabled');
        case !localStorage.getItem('woodDoubleDisabled'):
            localStorage.setItem('woodDoubleDisabled', false);
            console.log('initializing-woodDoubleDisabled');
        case !localStorage.getItem('clothProdButtonDisabled'):
            localStorage.setItem('clothProdButtonDisabled', true);
            console.log('initializing-clothProdButton');
        case !localStorage.getItem('clothAutoDisabled'):
            localStorage.setItem('clothAutoDisabled', true);
            console.log('initializing-clothAuto');
        case !localStorage.getItem('clothProdTimeDisabled'):
            localStorage.setItem('clothProdTimeDisabled', true);
            console.log('initializing-ProdTime');
        case !localStorage.getItem('clothDoubleDisabled'):
            localStorage.setItem('clothDoubleDisabled', true);
            console.log('initializing-clothDouble');
        case !localStorage.getItem('officeProdButtonDisabled'):
            localStorage.setItem('officeProdButtonDisabled', true);
            console.log('initializing-officeProdButton');
        case !localStorage.getItem('officeAutoDisabled'):
            localStorage.setItem('officeAutoDisabled', true);
            console.log('initializing-officeAuto');
        case !localStorage.getItem('officeProdTimeDisabled'):
            localStorage.setItem('officeProdTimeDisabled', true);
            console.log('initializing-officeProdTime');
        case !localStorage.getItem('officeDoubleDisabled'):
            localStorage.setItem('officeDoubleDisabled', true);
            console.log('initializing-officeDouble');
        case !localStorage.getItem('leatherProdButtonDisabled'):
            localStorage.setItem('leatherProdButtonDisabled', true);
            console.log('initializing-leatherProdButtonDisabled');
        case !localStorage.getItem('leatherAutoDisabled'):
            localStorage.setItem('leatherAutoDisabled', true);
            console.log('initializing-leatherAuto');
        case !localStorage.getItem('leatherProdTimeDisabled'):
            localStorage.setItem('leatherProdTimeDisabled', true);
            console.log('initializing-leatherProdTime');
        case !localStorage.getItem('leatherDoubleDisabled'):
            localStorage.setItem('leatherDoubleDisabled', true);
            console.log('initializing-leatherDouble');
        case !localStorage.getItem('reclinerProdButtonDisabled'):
            localStorage.setItem('reclinerProdButtonDisabled', true);
            console.log('initializing-reclinerProdButtonDisabled');
        case !localStorage.getItem('reclinerProdTimeDisabled'):
            localStorage.setItem('reclinerProdTimeDisabled', true);
            console.log('initializing-reclinerProdTimeDisabled');
        case !localStorage.getItem('reclinerAutoDisabled'):
            localStorage.setItem('reclinerAutoDisabled', true);
            console.log('initializing-reclinerAutoDisabled');
        case !localStorage.getItem('reclinerDoubleDisabled'):
            localStorage.setItem('reclinerDoubleDisabled', true);
            console.log('initializing-reclinerDoubleDisabled');
        case !localStorage.getItem('clothUnlockStyleDisplay'):
            localStorage.setItem('clothUnlockStyleDisplay', 'block')
            console.log('initializing-clothUnlockStyleDisplay');
        case !localStorage.getItem('officeUnlockStyleDisplay'):
            localStorage.setItem('officeUnlockStyleDisplay', 'block')
            console.log('initializing-officeUnlockStyleDisplay');
        case !localStorage.getItem('leatherUnlockStyleDisplay'):
            localStorage.setItem('leatherUnlockStyleDisplay', 'block')
            console.log('initializing-leatherUnlockStyleDisplay');
        case !localStorage.getItem('reclinerUnlockStyleDisplay'):
            localStorage.setItem('reclinerUnlockStyleDisplay', 'block')
            console.log('initializing-reclinerUnlockStyleDisplay');
        case !localStorage.getItem('woodTime'):
            localStorage.setItem('woodTime', 3.25);
            console.log('initializing-woodTime');
        case !localStorage.getItem('woodAmount'):
            localStorage.setItem('woodAmount', 0);
            console.log('initializing-woodAmount');
        case !localStorage.getItem('woodSpeedUpgradeCost'):
            localStorage.setItem('woodSpeedUpgradeCost', 50);
            console.log('initializing-woodSpeedUpgradeCost');
        case !localStorage.getItem('woodDoubleUpgradeCost'):
            localStorage.setItem('woodDoubleUpgradeCost', 4400);
            console.log('initializing-woodDoubleUpgradeCost');
        case !localStorage.getItem('woodMultiplier'):
            localStorage.setItem('woodMultiplier', 1);
            console.log('initializing-woodMultiplier');
        case !localStorage.getItem('clothTime'):
            localStorage.setItem('clothTime', 10);
            console.log('initializing-clothTime');
        case !localStorage.getItem('clothAmount'):
            localStorage.setItem('clothAmount', 0);
            console.log('initializing-clothAmount');
        case !localStorage.getItem('clothSpeedUpgradeCost'):
            localStorage.setItem('clothSpeedUpgradeCost', 250);
            console.log('initializing-clothSpeedUpgradeCost');
        case !localStorage.getItem('clothDoubleUpgradeCost'):
            localStorage.setItem('clothDoubleUpgradeCost', 10296);
            console.log('initializing-clothDoubleUpgradeCost');
        case !localStorage.getItem('clothMultiplier'):
            localStorage.setItem('clothMultiplier', 1);
            console.log('initializing-clothMultiplier');
        case !localStorage.getItem('officeTime'):
            localStorage.setItem('officeTime', 60);
            console.log('initializing-officeTime');
        case !localStorage.getItem('officeAmount'):
            localStorage.setItem('officeAmount', 0);
            console.log('initializing-officeAmount');
        case !localStorage.getItem('officeSpeedUpgradeCost'):
            localStorage.setItem('officeSpeedUpgradeCost', 742);
            console.log('initializing-officeSpeedUpgradeCost');
        case !localStorage.getItem('officeDoubleUpgradeCost'):
            localStorage.setItem('officeDoubleUpgradeCost', 18050);
            console.log('initializing-officeDoubleUpgradeCost');
        case !localStorage.getItem('officeMultiplier'):
            localStorage.setItem('officeMultiplier', 1);
            console.log('initializing-officeMultiplier');
        case !localStorage.getItem('leatherTime'):
            localStorage.setItem('leatherTime', 180);
            console.log('initializing-leatherTime');
        case !localStorage.getItem('leatherAmount'):
            localStorage.setItem('leatherAmount', 0);
            console.log('initializing-leatherAmount');
        case !localStorage.getItem('leatherSpeedUpgradeCost'):
            localStorage.setItem('leatherSpeedUpgradeCost', 1502);
            console.log('initializing-leatherSpeedUpgradeCost');
        case !localStorage.getItem('leatherDoubleUpgradeCost'):
            localStorage.setItem('leatherDoubleUpgradeCost', 34102);
            console.log('initializing-leatherDoubleUpgradeCost');
        case !localStorage.getItem('leatherMultiplier'):
            localStorage.setItem('leatherMultiplier', 1);
            console.log('initializing-leatherMultiplier');
        case !localStorage.getItem('reclinerTime'):
            localStorage.setItem('reclinerTime', 380);
            console.log('initializing-reclinerTime');
        case !localStorage.getItem('reclinerAmount'):
            localStorage.setItem('reclinerAmount', 0);
            console.log('initializing-reclinerAmount');
        case !localStorage.getItem('reclinerSpeedUpgradeCost'):
            localStorage.setItem('reclinerSpeedUpgradeCost', 3845);
            console.log('initializing-reclinerSpeedUpgradeCost');
        case !localStorage.getItem('reclinerDoubleUpgradeCost'):
            localStorage.setItem('reclinerDoubleUpgradeCost', 80233);
            console.log('initializing-reclinerDoubleUpgradeCost');
        case !localStorage.getItem('reclinerMultiplier'):
            localStorage.setItem('reclinerMultiplier', 1);
            console.log('initializing-reclinerMultiplier');
        case !localStorage.getItem('woodAutoIntervalBool'):
            localStorage.setItem('woodAutoIntervalBool', false);
            console.log('initializing-woodAutoIntervalBool');
        case !localStorage.getItem('clothAutoIntervalBool'):
            localStorage.setItem('clothAutoIntervalBool', false);
            console.log('initializing-clothAutoIntervalBool');
        case !localStorage.getItem('officeAutoIntervalBool'):
            localStorage.setItem('officeAutoIntervalBool', false);
            console.log('initializing-officeAutoIntervalBool');
        case !localStorage.getItem('leatherAutoIntervalBool'):
            localStorage.setItem('leatherAutoIntervalBool', false);
            console.log('initializing-leatherAutoIntervalBool');
        case !localStorage.getItem('reclinerAutoIntervalBool'):
            localStorage.setItem('reclinerAutoIntervalBool', false);
            console.log('initializing-reclinerAutoIntervalBool');
        case !localStorage.getItem('clothAmtOpacity'):
            localStorage.setItem('clothAmtOpacity', 0.5);
            console.log('initializing-clothAmtOpacity');
        case !localStorage.getItem('officeAmtOpacity'):
            localStorage.setItem('officeAmtOpacity', 0.5);
            console.log('initializing-officeAmtOpacity');
        case !localStorage.getItem('leatherAmtOpacity'):
            localStorage.setItem('leatherAmtOpacity', 0.5);
            console.log('initializing-leatherAmtOpacity');
        case !localStorage.getItem('reclinerAmtOpacity'):
            localStorage.setItem('reclinerAmtOpacity', 0.5);
            console.log('initializing-reclinerAmtOpacity');
        case !localStorage.getItem('rHBColor'):
            localStorage.setItem('rHBColor', 20);
            console.log('initializing-rHBColor');
        case !localStorage.getItem('gHBColor'):
            localStorage.setItem('gHBColor', 45);
            console.log('initializing-gHBColor');
        case !localStorage.getItem('bHBColor'):
            localStorage.setItem('bHBColor', 50);
            console.log('initializing-bHBColor');
        case !localStorage.getItem('rHTColor'):
            localStorage.setItem('rHTColor', 75);
            console.log('initializing-rHTColor');
        case !localStorage.getItem('gHTColor'):
            localStorage.setItem('gHTColor', 240);
            console.log('initializing-gHTColor');
        case !localStorage.getItem('bHTColor'):
            localStorage.setItem('bHTColor', 255);
            console.log('initializing-bHTColor');
        case !localStorage.getItem('rFBColor'):
            localStorage.setItem('rFBColor', 107);
            console.log('initializing-rFBColor');
        case !localStorage.getItem('gFBColor'):
            localStorage.setItem('gFBColor', 134);
            console.log('initializing-gFBColor');
        case !localStorage.getItem('bFBColor'):
            localStorage.setItem('bFBColor', 225);
            console.log('initializing-bFBColor');
        case !localStorage.getItem('prestigeOpenDisabled'):
            localStorage.setItem('prestigeOpenDisabled', true);
            console.log('initializing-prestigeOpenDisabled');
    }
    totalDollars = JSON.parse(localStorage.getItem('totalDollars'));
    formatMoney();
    totalChairs = JSON.parse(localStorage.getItem('totalChairs'));
    factoryName.innerHTML = localStorage.getItem('factoryName');
    woodProdButton.disabled = JSON.parse(localStorage.getItem('woodProdButtonDisabled'));
    woodProdTime.disabled = JSON.parse(localStorage.getItem('woodProdTimeDisabled'));
    woodAuto.disabled = JSON.parse(localStorage.getItem('woodAutoDisabled'));
    woodDouble.disabled = JSON.parse(localStorage.getItem('woodDoubleDisabled'));
    clothProdButton.disabled = JSON.parse(localStorage.getItem('clothProdButtonDisabled'));
    clothAuto.disabled = JSON.parse(localStorage.getItem('clothAutoDisabled'));
    clothProdTime.disabled = JSON.parse(localStorage.getItem('clothProdTimeDisabled'));
    clothDouble.disabled = JSON.parse(localStorage.getItem('clothDoubleDisabled'));
    officeProdButton.disabled = JSON.parse(localStorage.getItem('officeProdButtonDisabled'));
    officeAuto.disabled = JSON.parse(localStorage.getItem('officeAutoDisabled'));
    officeProdTime.disabled = JSON.parse(localStorage.getItem('officeProdTimeDisabled'));
    officeDouble.disabled = JSON.parse(localStorage.getItem('officeDoubleDisabled'));
    leatherProdButton.disabled = JSON.parse(localStorage.getItem('leatherProdButtonDisabled'));
    leatherAuto.disabled = JSON.parse(localStorage.getItem('leatherAutoDisabled'));
    leatherProdTime.disabled = JSON.parse(localStorage.getItem('leatherProdTimeDisabled'));
    leatherDouble.disabled = JSON.parse(localStorage.getItem('leatherDoubleDisabled'));
    reclinerProdButton.disabled = JSON.parse(localStorage.getItem('reclinerProdButtonDisabled'));
    reclinerAuto.disabled = JSON.parse(localStorage.getItem('reclinerAutoDisabled'));
    reclinerProdTime.disabled = JSON.parse(localStorage.getItem('reclinerProdTimeDisabled'));
    reclinerDouble.disabled = JSON.parse(localStorage.getItem('reclinerDoubleDisabled'));
    clothUnlock.style.display = (localStorage.getItem('clothUnlockStyleDisplay'));
    officeUnlock.style.display = (localStorage.getItem('officeUnlockStyleDisplay'));
    leatherUnlock.style.display = (localStorage.getItem('leatherUnlockStyleDisplay'));
    reclinerUnlock.style.display = (localStorage.getItem('reclinerUnlockStyleDisplay'));
    prodStats.woodTime = JSON.parse(localStorage.getItem('woodTime'));
    prodStats.woodAmount = JSON.parse(localStorage.getItem('woodAmount'));
    prodStats.woodSpeedUpgradeCost = JSON.parse(localStorage.getItem('woodSpeedUpgradeCost'));
    prodStats.woodDoubleUpgradeCost = JSON.parse(localStorage.getItem('woodDoubleUpgradeCost'));
    prodStats.woodMultiplier = JSON.parse(localStorage.getItem('woodMultiplier'));
    prodStats.clothTime = JSON.parse(localStorage.getItem('clothTime'));
    prodStats.clothAmount = JSON.parse(localStorage.getItem('clothAmount'));
    prodStats.clothSpeedUpgradeCost = JSON.parse(localStorage.getItem('clothSpeedUpgradeCost'));
    prodStats.clothDoubleUpgradeCost = JSON.parse(localStorage.getItem('clothDoubleUpgradeCost'));
    prodStats.clothMultiplier = JSON.parse(localStorage.getItem('clothMultiplier'));
    prodStats.officeTime = JSON.parse(localStorage.getItem('officeTime'));
    prodStats.officeAmount = JSON.parse(localStorage.getItem('officeAmount'));
    prodStats.officeSpeedUpgradeCost = JSON.parse(localStorage.getItem('officeSpeedUpgradeCost'));
    prodStats.officeDoubleUpgradeCost = JSON.parse(localStorage.getItem('officeDoubleUpgradeCost'));
    prodStats.officeMultiplier = JSON.parse(localStorage.getItem('officeMultiplier'));
    prodStats.leatherTime = JSON.parse(localStorage.getItem('leatherTime'));
    prodStats.leatherAmount = JSON.parse(localStorage.getItem('leatherAmount'));
    prodStats.leatherSpeedUpgradeCost = JSON.parse(localStorage.getItem('leatherSpeedUpgradeCost'));
    prodStats.leatherDoubleUpgradeCost = JSON.parse(localStorage.getItem('leatherDoubleUpgradeCost'));
    prodStats.leatherMultiplier = JSON.parse(localStorage.getItem('leatherMultiplier'));
    prodStats.reclinerTime = JSON.parse(localStorage.getItem('reclinerTime'));
    prodStats.reclinerAmount = JSON.parse(localStorage.getItem('reclinerAmount'));
    prodStats.reclinerSpeedUpgradeCost = JSON.parse(localStorage.getItem('reclinerSpeedUpgradeCost'));
    prodStats.reclinerDoubleUpgradeCost = JSON.parse(localStorage.getItem('reclinerDoubleUpgradeCost'));
    prodStats.reclinerMultiplier = JSON.parse(localStorage.getItem('reclinerMultiplier'));
    clothAmt.style.opacity = JSON.parse(localStorage.getItem('clothAmtOpacity'));
    officeAmt.style.opacity = JSON.parse(localStorage.getItem('officeAmtOpacity'));
    leatherAmt.style.opacity = JSON.parse(localStorage.getItem('leatherAmtOpacity'));
    reclinerAmt.style.opacity = JSON.parse(localStorage.getItem('reclinerAmtOpacity'));
    rHBColor = JSON.parse(localStorage.getItem('rHBColor'));
    gHBColor = JSON.parse(localStorage.getItem('gHBColor'));
    bHBColor = JSON.parse(localStorage.getItem('bHBColor'));
    red1.value = JSON.parse(localStorage.getItem('rHBColor'));
    green1.value = JSON.parse(localStorage.getItem('gHBColor'));
    blue1.value = JSON.parse(localStorage.getItem('bHBColor'));
    rHTColor = JSON.parse(localStorage.getItem('rHTColor'));
    gHTColor = JSON.parse(localStorage.getItem('gHTColor'));
    bHTColor = JSON.parse(localStorage.getItem('bHTColor'));
    red2.value = JSON.parse(localStorage.getItem('rHTColor'));
    green2.value = JSON.parse(localStorage.getItem('gHTColor'));
    blue2.value = JSON.parse(localStorage.getItem('bHTColor'));
    rFBColor = JSON.parse(localStorage.getItem('rFBColor'));
    gFBColor = JSON.parse(localStorage.getItem('gFBColor'));
    bFBColor = JSON.parse(localStorage.getItem('bFBColor'));
    red3.value = JSON.parse(localStorage.getItem('rFBColor'));
    green3.value = JSON.parse(localStorage.getItem('gFBColor'));
    blue3.value = JSON.parse(localStorage.getItem('bFBColor'));
    prestigeButton.disabled = JSON.parse(localStorage.getItem('prestigeOpenDisabled'));
    pageLoad();
}
init();

function pageLoad() {
    woodAmt.innerHTML = `Wooden Chair: ${prodStats.woodAmount} ($${prodStats.woodValue} (x${prodStats.woodMultiplier}))`;
    chairs.innerHTML = `You have produced: ${totalChairs} chairs`;
    clothAmt.innerHTML = `Cloth Chair: ${prodStats.clothAmount} ($${prodStats.clothValue} (x${prodStats.clothMultiplier}))`;
    if (prodStats.woodTime > 0.05) {
        woodProdTime.innerHTML = `Reduce Time: $${prodStats.woodSpeedUpgradeCost}`;
    } else {
        woodProdTime.innerHTML = `Reduce Time: MAX`;
    }
    if (prodStats.clothTime > 0.2) {
        clothProdTime.innerHTML = `Reduce Time: $${prodStats.clothSpeedUpgradeCost}`;
    } else {
        clothProdTime.innerHTML = `Reduce Time: MAX`;
    }
    if (prodStats.woodTime > 0.05) {
        woodTimer.innerHTML = `${prodStats.woodTime.toPrecision(4)}s`;
    } else {
        woodTimer.innerHTML = `${prodStats.woodTime}s (MAX)`;
    }
    if (prodStats.woodMultiplier < 4) {
        woodDouble.innerHTML = `Double Production: $${prodStats.woodDoubleUpgradeCost}`;
    } else {
        woodDouble.innerHTML = `Double Production: MAX`;
    }
    if (prodStats.clothTime > 0.2) {
        clothTimer.innerHTML = `${prodStats.clothTime.toPrecision(4)}s`;
    } else {
        clothTimer.innerHTML = `${prodStats.clothTime}s (MAX)`
    }
    if (prodStats.clothMultiplier < 4) {
        clothDouble.innerHTML = `Double Production: $${prodStats.clothDoubleUpgradeCost}`;
    } else {
        clothDouble.innerHTML = `Double Production: MAX`;
    }
    officeAmt.innerHTML = `Office Chair: ${prodStats.officeAmount} ($${prodStats.officeValue} (x${prodStats.officeMultiplier}))`;
    if (prodStats.officeTime > 0.8) {
        officeProdTime.innerHTML = `Reduce Time: $${prodStats.officeSpeedUpgradeCost}`;
    } else {
        officeProdTime.innerHTML = `Reduce Time: MAX`;
    }
    if (prodStats.officeTime > 0.8) {
        officeTimer.innerHTML = `${prodStats.officeTime.toPrecision(4)}s`;
    } else {
        officeTimer.innerHTML = `${prodStats.officeTime}s (MAX)`;
    }
    if (prodStats.officeMultiplier < 4) {
        officeDouble.innerHTML = `Double Production: $${prodStats.officeDoubleUpgradeCost}`;
    } else {
        officeDouble.innerHTML = `Double Production: MAX`;
    }
    leatherAmt.innerHTML = `Leather Chair: ${prodStats.leatherAmount} ($${prodStats.leatherValue} (x${prodStats.leatherMultiplier}))`;
    if (prodStats.leatherTime > 0.75) {
        leatherProdTime.innerHTML = `Reduce Time: $${prodStats.leatherSpeedUpgradeCost}`;
    } else {
        leatherProdTime.innerHTML = `Reduce Time: MAX`;
    }
    if (prodStats.leatherTime > 0.75) {
        leatherTimer.innerHTML = `${prodStats.leatherTime.toPrecision(4)}s`;
    } else {
        leatherTimer.innerHTML = `${prodStats.leatherTime}s (MAX)`;
    }
    if (prodStats.leatherMultiplier < 4) {
        leatherDouble.innerHTML = `Double Production: $${prodStats.leatherDoubleUpgradeCost}`;
    } else {
        leatherDouble.innerHTML = `Double Production: MAX`;
    }
    reclinerAmt.innerHTML = `Recliner: ${prodStats.reclinerAmount} ($${prodStats.reclinerValue} (x${prodStats.reclinerMultiplier}))`;
    if (prodStats.reclinerTime > 1) {
        reclinerProdTime.innerHTML = `Reduce Time: $${prodStats.reclinerSpeedUpgradeCost}`;
    } else {
        reclinerProdTime.innerHTML = `Reduce Time: MAX`;
    }
    if (prodStats.reclinerTime > 1) {
        reclinerTimer.innerHTML = `${prodStats.reclinerTime.toPrecision(4)}s`;
    } else {
        reclinerTimer.innerHTML = `${prodStats.reclinerTime}s (MAX)`;
    }
    if (prodStats.reclinerMultiplier < 4) {
        reclinerDouble.innerHTML = `Double Production: $${prodStats.reclinerDoubleUpgradeCost}`;
    } else {
        reclinerDouble.innerHTML = `Double Production: MAX`;
    }
    document.querySelector('.heading').style.backgroundColor = `rgb(${rHBColor}, ${gHBColor}, ${bHBColor})`;
    document.querySelector('.money').style.color = `rgb(${rHTColor}, ${gHTColor}, ${bHTColor})`;
    document.querySelector('.chairs').style.color = `rgb(${rHTColor}, ${gHTColor}, ${bHTColor})`;
    document.querySelector('.factory-name').style.color = `rgb(${rHTColor}, ${gHTColor}, ${bHTColor})`;
    document.documentElement.style.backgroundColor = `rgb(${rFBColor}, ${gFBColor}, ${bFBColor})`;
    factory.style.backgroundColor = `rgb(${rFBColor}, ${gFBColor}, ${bFBColor})`;
}

let woodAutoIntervalBool = JSON.parse(localStorage.getItem('woodAutoIntervalBool'));
let clothAutoIntervalBool = JSON.parse(localStorage.getItem('clothAutoIntervalBool'));
let officeAutoIntervalBool = JSON.parse(localStorage.getItem('officeAutoIntervalBool'));
let leatherAutoIntervalBool = JSON.parse(localStorage.getItem('leatherAutoIntervalBool'));
let reclinerAutoIntervalBool = JSON.parse(localStorage.getItem('leatherAutoIntervalBool'));

automateInit();
function automateInit() {
    if (woodAutoIntervalBool === true) {
        woodAutoInterval = setInterval(woodAutomate, prodStats.woodTime * 1000);
    } else {
        woodAutoInterval = null;
    }
    if (clothAutoIntervalBool === true) {
        clothAutoInterval = setInterval(clothAutomate, prodStats.clothTime * 1000);
    } else {
        clothAutoInterval = null;
    }
    if (officeAutoIntervalBool === true) {
        officeAutoInterval = setInterval(officeAutomate, prodStats.officeTime * 1000);
    } else {
        offficeAutoInterval = null;
    }
    if (leatherAutoIntervalBool === true) {
        leatherAutoInterval = setInterval(leatherAutomate, prodStats.leatherTime * 1000);
    } else {
        leatherAutoInterval = null;
    }
    if (reclinerAutoIntervalBool === true) {
        reclinerAutoInterval = setInterval(reclinerAutomate, prodStats.reclinerTime * 1000);
    } else {
        reclinerAutoInterval = null;
    }
}

function formatMoney() {
    let totalDollarsArray = JSON.stringify(totalDollars).split('');
    switch (true) {
        // case totalDollarsArray.length > 7:
        //     totalDollars = Math.ceil(totalDollars);
        //     localStorage.setItem('totalDollars', totalDollars);
        case totalDollars >= 0 && totalDollars < 1000:
            money.innerHTML = `You have: $${totalDollars}`;
            break;
        case totalDollars >= 1000 && totalDollars < 10000:
            totalDollarsArray = JSON.stringify(totalDollars).split('');
            totalDollarsArray.splice(1, 0, ',');
            money.innerHTML = `You have: $${totalDollarsArray.join('')}`;
            break;
        case totalDollars >= 10000 && totalDollars < 100000:
            totalDollarsArray = JSON.stringify(totalDollars).split('');
            totalDollarsArray.splice(2, 0, ',');
            money.innerHTML = `You have: $${totalDollarsArray.join('')}`;
            break;
        case totalDollars >= 100000 && totalDollars < 1000000:
            totalDollarsArray = JSON.stringify(totalDollars).split('');
            totalDollarsArray.splice(3, 0, ',');
            money.innerHTML = `You have: $${totalDollarsArray.join('')}`;
            break;
        case totalDollars >= 1000000 && totalDollars < 10000000:
            totalDollarsArray = JSON.stringify(totalDollars).split('');
            money.innerHTML = `You have: $${totalDollarsArray[0]}.${totalDollarsArray[1] + '' + totalDollarsArray[2]}M`;
            break;
        case totalDollars >= 10000000 && totalDollars < 100000000:
            totalDollarsArray = JSON.stringify(totalDollars).split('');
            money.innerHTML = `You have: $${totalDollarsArray[0] + '' + totalDollarsArray[1]}.${totalDollarsArray[2] + '' + totalDollarsArray[3]}M`;
            break;
        case totalDollars >= 100000000 && totalDollars < 1000000000:
            totalDollarsArray = JSON.stringify(totalDollars).split('');
            money.innerHTML = `You have: $${totalDollarsArray[0] + '' + totalDollarsArray[1] + '' + totalDollarsArray[2]}.${totalDollarsArray[3] + '' + totalDollarsArray[4]}M`;
            break;
        case totalDollars >= 1000000000 && totalDollars < 10000000000:
            totalDollarsArray = JSON.stringify(totalDollars).split('');
            money.innerHTML = `You have: $${totalDollarsArray[0]}.${totalDollarsArray[1] + '' + totalDollarsArray[2]}B`;
            break;
        case totalDollars >= 10000000000 && totalDollars < 100000000000:
            totalDollarsArray = JSON.stringify(totalDollars).split('');
            money.innerHTML = `You have: $${totalDollarsArray[0] + '' + totalDollarsArray[1]}.${totalDollarsArray[2] + '' + totalDollarsArray[3]}B`;
            break;
        case totalDollars >= 100000000000 && totalDollars < 1000000000000:
            totalDollarsArray = JSON.stringify(totalDollars).split('');
            money.innerHTML = `You have: $${totalDollarsArray[0] + '' + totalDollarsArray[1] + '' + totalDollarsArray[2]}.${totalDollarsArray[3] + '' + totalDollarsArray[4]}B`;
            break;
        case totalDollars >= 1000000000000 && totalDollars < 10000000000000:
            totalDollarsArray = JSON.stringify(totalDollars).split('');
            money.innerHTML = `You have: $${totalDollarsArray[0]}.${totalDollarsArray[1] + '' + totalDollarsArray[2]}T`;
            break;
        case totalDollars >= 10000000000000 && totalDollars < 100000000000000:
            totalDollarsArray = JSON.stringify(totalDollars).split('');
            money.innerHTML = `You have: $${totalDollarsArray[0] + '' + totalDollarsArray[1]}.${totalDollarsArray[2] + '' + totalDollarsArray[3]}T`;
            break;
        case totalDollars >= 100000000000000 && totalDollars < 1000000000000000:
            totalDollarsArray = JSON.stringify(totalDollars).split('');
            money.innerHTML = `You have: $${totalDollarsArray[0] + '' + totalDollarsArray[1] + '' + totalDollarsArray[2]}.${totalDollarsArray[3] + '' + totalDollarsArray[4]}T`;
            break;
        case totalDollars >= 1000000000000000 && totalDollars < 10000000000000000:
            totalDollarsArray = JSON.stringify(totalDollars).split('');
            money.innerHTML = `You have: $${totalDollarsArray[0]}.${totalDollarsArray[1] + '' + totalDollarsArray[2]}q`;
            break;
        case totalDollars >= 10000000000000000 && totalDollars < 100000000000000000:
            totalDollarsArray = JSON.stringify(totalDollars).split('');
            money.innerHTML = `You have: $${totalDollarsArray[0] + '' + totalDollarsArray[1]}.${totalDollarsArray[2] + '' + totalDollarsArray[3]}q`;
            break;
        case totalDollars >= 100000000000000000 && totalDollars < 1000000000000000000:
            totalDollarsArray = JSON.stringify(totalDollars).split('');
            money.innerHTML = `You have: $${totalDollarsArray[0] + '' + totalDollarsArray[1] + '' + totalDollarsArray[2]}.${totalDollarsArray[3] + '' + totalDollarsArray[4]}q`;
            break;
        case totalDollars >= 1000000000000000000 && totalDollars < 10000000000000000000:
            totalDollarsArray = JSON.stringify(totalDollars).split('');
            money.innerHTML = `You have: $${totalDollarsArray[0]}.${totalDollarsArray[1] + '' + totalDollarsArray[2]}Q`;
            break;
        case totalDollars >= 10000000000000000000 && totalDollars < 100000000000000000000:
            totalDollarsArray = JSON.stringify(totalDollars).split('');
            money.innerHTML = `You have: $${totalDollarsArray[0] + '' + totalDollarsArray[1]}.${totalDollarsArray[2] + '' + totalDollarsArray[3]}Q`;
            break;
        case totalDollars >= 100000000000000000000 && totalDollars < 1000000000000000000000:
            totalDollarsArray = JSON.stringify(totalDollars).split('');
            money.innerHTML = `You have: $${totalDollarsArray[0] + '' + totalDollarsArray[1] + '' + totalDollarsArray[2]}.${totalDollarsArray[3] + '' + totalDollarsArray[4]}Q`;
            break;
        case totalDollars >= 1000000000000000000000 && totalDollars < 10000000000000000000000:
            totalDollarsArray = JSON.stringify(totalDollars).split('');
            money.innerHTML = `You have: $${totalDollarsArray[0]}.${totalDollarsArray[1] + '' + totalDollarsArray[2]}s`;
            break;
        case totalDollars >= 10000000000000000000000 && totalDollars < 100000000000000000000000:
            totalDollarsArray = JSON.stringify(totalDollars).split('');
            money.innerHTML = `You have: $${totalDollarsArray[0] + '' + totalDollarsArray[1]}.${totalDollarsArray[2] + '' + totalDollarsArray[3]}s`;
            break;
        case totalDollars >= 100000000000000000000000 && totalDollars < 1000000000000000000000000:
            totalDollarsArray = JSON.stringify(totalDollars).split('');
            money.innerHTML = `You have: $${totalDollarsArray[0] + '' + totalDollarsArray[1] + '' + totalDollarsArray[2]}.${totalDollarsArray[3] + '' + totalDollarsArray[4]}s`;
            break;
        default:
            money.innerHTML = 'You have: $Too much :D'
    }
}

function produce(e) {
    switch (e.target.className) {
        case 'wood-produce':
            woodProdButton.disabled = true;
            setTimeout(() => {
                prodStats.woodAmount += (1 * prodStats.woodMultiplier);
                totalChairs += (1 * prodStats.woodMultiplier);
                totalDollars += parseInt((prodStats.woodValue * prodStats.woodMultiplier * prestigeBonus).toFixed(2));
                localStorage.setItem('woodAmount', prodStats.woodAmount);
                localStorage.setItem('totalDollars', totalDollars);
                localStorage.setItem('totalChairs', totalChairs);
                formatMoney();
                chairs.innerHTML = `You have produced: ${totalChairs} chairs`;
                woodAmt.innerHTML = `Wooden Chair: ${prodStats.woodAmount} ($${prodStats.woodValue} (x${prodStats.woodMultiplier}))`;
                woodProdButton.disabled = false;
            }, (prodStats.woodTime) * 1000);
            break;
        case 'cloth-produce':
            clothProdButton.disabled = true;
            setTimeout(() => {
                prodStats.clothAmount += (1 * prodStats.clothMultiplier);
                totalChairs += (1 * prodStats.clothMultiplier);
                totalDollars += parseInt((prodStats.clothValue * prodStats.clothMultiplier * prestigeBonus).toFixed(2));
                localStorage.setItem('clothAmount', prodStats.clothAmount);
                localStorage.setItem('totalDollars', totalDollars);
                localStorage.setItem('totalChairs', totalChairs);
                formatMoney();
                chairs.innerHTML = `You have produced: ${totalChairs} chairs`;
                clothAmt.innerHTML = `Cloth Chair: ${prodStats.clothAmount} ($${prodStats.clothValue} (x${prodStats.officeMultiplier}))`;
                clothProdButton.disabled = false;
            }, (prodStats.clothTime) * 1000);
            break;
        case 'office-produce':
            officeProdButton.disabled = true;
            setTimeout(() => {
                prodStats.officeAmount += (1 * prodStats.officeMultiplier);
                totalChairs += (1 * prodStats.officeMultiplier);
                totalDollars += parseInt((prodStats.officeValue * prodStats.officeMultiplier * prestigeBonus).toFixed(2));
                localStorage.setItem('officeAmount', prodStats.officeAmount);
                localStorage.setItem('totalDollars', totalDollars);
                localStorage.setItem('totalChairs', totalChairs);
                formatMoney();
                chairs.innerHTML = `You have produced: ${totalChairs} chairs`;
                officeAmt.innerHTML = `Office Chair: ${prodStats.officeAmount} ($${prodStats.officeValue} (x${prodStats.officeMultiplier}))`;
                officeProdButton.disabled = false;
            }, (prodStats.officeTime) * 1000);
            break;
        case 'leather-produce':
            leatherProdButton.disabled = true;
            setTimeout(() => {
                prodStats.leatherAmount += (1 * prodStats.leatherMultiplier);
                totalChairs += (1 * prodStats.leatherMultiplier);
                totalDollars += parseInt((prodStats.leatherValue * prodStats.leatherMultiplier * prestigeBonus).toFixed(2));
                localStorage.setItem('leatherAmount', prodStats.leatherAmount);
                localStorage.setItem('totalDollars', totalDollars);
                localStorage.setItem('totalChairs', totalChairs);
                formatMoney();
                chairs.innerHTML = `You have produced: ${totalChairs} chairs`;
                leatherAmt.innerHTML = `Leather Chair: ${prodStats.leatherAmount} ($${prodStats.leatherValue} (x${prodStats.leatherMultiplier}))`;
                leatherProdButton.disabled = false;
            }, (prodStats.leatherTime) * 1000);
            break;
        case 'recliner-produce':
            reclinerProdButton.disabled = true;
            setTimeout(() => {
                prodStats.reclinerAmount += (1 * prodStats.reclinerMultiplier);
                totalChairs += (1 * prodStats.reclinerMultiplier);
                totalDollars += parseInt((prodStats.reclinerValue * prodStats.reclinerMultiplier * prestigeBonus).toFixed(2));
                localStorage.setItem('reclinerAmount', prodStats.reclinerAmount);
                localStorage.setItem('totalDollars', totalDollars);
                localStorage.setItem('totalChairs', totalChairs);
                formatMoney();
                chairs.innerHTML = `You have produced: ${totalChairs} chairs`;
                reclinerAmt.innerHTML = `Recliner: ${prodStats.reclinerAmount} ($${prodStats.reclinerValue} (x${prodStats.reclinerMultiplier}))`;
                reclinerProdButton.disabled = false;
            }, (prodStats.reclinerTime) * 1000);
            break;
    }
    checkForPrestige();
}

function checkForPrestige() {
    if (totalChairs >= 50000) {
        prestigeButton.disabled = false;
        localStorage.setItem('prestigeOpenDisabled', false);
    }
    return;
}

function woodAutomate() {
    clearInterval(woodAutoInterval);
    prodStats.woodAmount += (1 * prodStats.woodMultiplier);
    totalChairs += (1 * prodStats.woodMultiplier);
    totalDollars += parseInt((prodStats.woodValue * prodStats.woodMultiplier * prestigeBonus).toFixed(2));
    localStorage.setItem('woodAmount', prodStats.woodAmount);
    localStorage.setItem('totalDollars', totalDollars);
    localStorage.setItem('totalChairs', totalChairs);
    formatMoney();
    chairs.innerHTML = `You have produced: ${totalChairs} chairs`;
    woodAmt.innerHTML = `Wooden Chair: ${prodStats.woodAmount} ($${prodStats.woodValue} (x${prodStats.woodMultiplier}))`;
    checkForPrestige();
    woodAutoInterval = setInterval(woodAutomate, prodStats.woodTime * 1000);
}

function clothAutomate() {
    clearInterval(clothAutoInterval);
    prodStats.clothAmount += (1 * prodStats.clothMultiplier);
    totalChairs += (1 * prodStats.clothMultiplier);
    totalDollars += parseInt((prodStats.clothValue * prodStats.clothMultiplier * prestigeBonus).toFixed(2));
    localStorage.setItem('clothAmount', prodStats.clothAmount);
    localStorage.setItem('totalDollars', totalDollars);
    localStorage.setItem('totalChairs', totalChairs);
    formatMoney();
    chairs.innerHTML = `You have produced: ${totalChairs} chairs`;
    clothAmt.innerHTML = `Cloth Chair: ${prodStats.clothAmount} ($${prodStats.clothValue} (x${prodStats.clothMultiplier}))`;
    checkForPrestige();
    clothAutoInterval = setInterval(clothAutomate, prodStats.clothTime * 1000);
}

function officeAutomate() {
    clearInterval(officeAutoInterval);
    prodStats.officeAmount += (1 * prodStats.officeMultiplier);
    totalChairs += (1 * prodStats.officeMultiplier);
    totalDollars += parseInt((prodStats.officeValue * prodStats.officeMultiplier * prestigeBonus).toFixed(2));
    localStorage.setItem('officeAmount', prodStats.officeAmount);
    localStorage.setItem('totalDollars', totalDollars);
    localStorage.setItem('totalChairs', totalChairs);
    formatMoney();
    chairs.innerHTML = `You have produced: ${totalChairs} chairs`;
    officeAmt.innerHTML = `Office Chair: ${prodStats.officeAmount} ($${prodStats.officeValue} (x${prodStats.officeMultiplier}))`;
    checkForPrestige();
    officeAutoInterval = setInterval(officeAutomate, prodStats.officeTime * 1000);
}

function leatherAutomate() {
    clearInterval(leatherAutoInterval);
    prodStats.leatherAmount += (1 * prodStats.leatherMultiplier);
    totalChairs += (1 * prodStats.leatherMultiplier);
    totalDollars += parseInt((prodStats.leatherValue * prodStats.leatherMultiplier * prestigeBonus).toFixed(2));
    localStorage.setItem('leatherAmount', prodStats.leatherAmount);
    localStorage.setItem('totalDollars', totalDollars);
    localStorage.setItem('totalChairs', totalChairs);
    formatMoney();
    chairs.innerHTML = `You have produced: ${totalChairs} chairs`;
    leatherAmt.innerHTML = `Leather Chair: ${prodStats.leatherAmount} ($${prodStats.leatherValue} (x${prodStats.leatherMultiplier}))`;
    checkForPrestige();
    leatherAutoInterval = setInterval(leatherAutomate, prodStats.leatherTime * 1000);
}

function reclinerAutomate() {
    clearInterval(reclinerAutoInterval);
    prodStats.reclinerAmount += (1 * prodStats.reclinerMultiplier);
    totalChairs += (1 * prodStats.reclinerMultiplier);
    totalDollars += parseInt((prodStats.reclinerValue * prodStats.reclinerMultiplier * prestigeBonus).toFixed(2));
    localStorage.setItem('reclinerAmount', prodStats.reclinerAmount);
    localStorage.setItem('totalDollars', totalDollars);
    localStorage.setItem('totalChairs', totalChairs);
    formatMoney();
    chairs.innerHTML = `You have produced: ${totalChairs} chairs`;
    reclinerAmt.innerHTML = `Recliner: ${prodStats.reclinerAmount} ($${prodStats.reclinerValue} (x${prodStats.reclinerMultiplier}))`;
    checkForPrestige();
    reclinerAutoInterval = setInterval(reclinerAutomate, prodStats.reclinerTime * 1000);
}

function upgrade(e) {
    switch (e.target.className) {
        case 'wood-prod-time':
            if (totalDollars >= prodStats.woodSpeedUpgradeCost) {
                totalDollars = (totalDollars - parseInt(prodStats.woodSpeedUpgradeCost).toPrecision(15));
                localStorage.setItem('totalDollars', totalDollars);
                formatMoney();
                prodStats.woodTime /= 1.2;
                woodTimer.innerHTML = `${prodStats.woodTime.toPrecision(4)}s`;
                prodStats.woodSpeedUpgradeCost = parseInt((prodStats.woodSpeedUpgradeCost * 1.25).toPrecision(5));
                woodProdTime.innerHTML = `Reduce Time: $${prodStats.woodSpeedUpgradeCost}`;
                if (prodStats.woodTime <= 0.05) {
                    prodStats.woodTime = 0.05;
                    woodProdTime.disabled = true;
                    woodProdTime.innerHTML = 'Reduce Time: MAX';
                    woodTimer.innerHTML = '0.05s (MAX)';
                    localStorage.setItem('woodProdTimeDisabled', true);
                }
                localStorage.setItem('woodTime', prodStats.woodTime);
                localStorage.setItem('woodSpeedUpgradeCost', prodStats.woodSpeedUpgradeCost);
                break;
            } else {
                output.innerHTML = 'NOT ENOUGH MONEY';
                setTimeout(function () { output.innerHTML = '' }, 3000);
                break;
            }
        case 'wood-automate':
            if (totalDollars >= prodStats.woodAutoUpgradeCost) {
                totalDollars -= prodStats.woodAutoUpgradeCost;
                localStorage.setItem('totalDollars', totalDollars);
                formatMoney();
                woodAuto.disabled = true;
                woodProdButton.disabled = true;
                woodAutoIntervalBool = true;
                localStorage.setItem('woodAutoIntervalBool', true);
                localStorage.setItem('woodAutoDisabled', true);
                localStorage.setItem('woodProdButtonDisabled', true);
                automateInit();
                break;
            } else {
                output.innerHTML = 'NOT ENOUGH MONEY';
                setTimeout(function () { output.innerHTML = '' }, 3000);
                break;
            }
        case 'wood-double':
            if (totalDollars >= prodStats.woodDoubleUpgradeCost) {
                totalDollars -= prodStats.woodDoubleUpgradeCost;
                localStorage.setItem('totalDollars', totalDollars);
                formatMoney();
                prodStats.woodDoubleUpgradeCost *= 2;
                prodStats.woodMultiplier *= 2;
                localStorage.setItem('woodDoubleUpgradeCost', prodStats.woodDoubleUpgradeCost);
                localStorage.setItem('woodMultiplier', prodStats.woodMultiplier);
                woodDouble.innerHTML = `Double Production: $${prodStats.woodDoubleUpgradeCost}`;
                woodAmt.innerHTML = `Wooden Chair: ${prodStats.woodAmount} ($${prodStats.woodValue} (x${prodStats.woodMultiplier}))`
                if (prodStats.woodMultiplier >= 4 && prestigeBonus < 2) {
                    prodStats.woodMultiplier = 4;
                    woodDouble.disabled = true;
                    localStorage.setItem('woodDoubleDisabled', true);
                    woodDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.woodMultiplier >= 8 && prestigeBonus < 5) {
                    prodStats.woodMultiplier = 8;
                    woodDouble.disabled = true;
                    localStorage.setItem('woodDoubleDisabled', true);
                    woodDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.woodMultiplier >= 16 && prestigeBonus < 10) {
                    prodStats.woodMultiplier = 16;
                    woodDouble.disabled = true;
                    localStorage.setItem('woodDoubleDisabled', true);
                    woodDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.woodMultiplier >= 32 && prestigeBonus < 50) {
                    prodStats.woodMultiplier = 32;
                    woodDouble.disabled = true;
                    localStorage.setItem('woodDoubleDisabled', true);
                    woodDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.woodMultiplier >= 64 && prestigeBonus < 100) {
                    prodStats.woodMultiplier = 64;
                    woodDouble.disabled = true;
                    localStorage.setItem('woodDoubleDisabled', true);
                    woodDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.woodMultiplier >= 128 && prestigeBonus < 350) {
                    prodStats.woodMultiplier = 128;
                    woodDouble.disabled = true;
                    localStorage.setItem('woodDoubleDisabled', true);
                    woodDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.woodMultiplier >= 256) {
                    prodStats.woodMultiplier = 256;
                    woodDouble.disabled = true;
                    localStorage.setItem('woodDoubleDisabled', true);
                    woodDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                break;
            } else {
                output.innerHTML = 'NOT ENOUGH MONEY';
                setTimeout(function () { output.innerHTML = '' }, 3000);
                break;
            }
        case 'cloth-prod-time':
            if (totalDollars >= prodStats.clothSpeedUpgradeCost) {
                totalDollars = (totalDollars - parseInt(prodStats.clothSpeedUpgradeCost).toPrecision(15));
                localStorage.setItem('totalDollars', totalDollars);
                formatMoney();
                prodStats.clothTime /= 1.28;
                clothTimer.innerHTML = `${prodStats.clothTime.toPrecision(4)}s`;
                prodStats.clothSpeedUpgradeCost = parseInt((prodStats.clothSpeedUpgradeCost * 1.4).toPrecision(7));
                clothProdTime.innerHTML = `Reduce Time: $${prodStats.clothSpeedUpgradeCost}`;
                if (prodStats.clothTime <= 0.2) {
                    prodStats.clothTime = 0.2;
                    clothProdTime.disabled = true;
                    localStorage.setItem('clothProdTimeDisabled', true);
                    clothProdTime.innerHTML = 'Reduce Time: MAX';
                    clothTimer.innerHTML = '0.2s (MAX)';
                }
                localStorage.setItem('clothTime', prodStats.clothTime);
                localStorage.setItem('clothSpeedUpgradeCost', prodStats.clothSpeedUpgradeCost);
                break;
            } else {
                output.innerHTML = 'NOT ENOUGH MONEY';
                setTimeout(function () { output.innerHTML = '' }, 3000);
                break;
            }
        case 'cloth-automate':
            if (totalDollars >= prodStats.clothAutoUpgradeCost) {
                totalDollars -= prodStats.clothAutoUpgradeCost;
                localStorage.setItem('totalDollars', totalDollars);
                formatMoney();
                clothAuto.disabled = true;
                clothProdButton.disabled = true;
                clothAutoIntervalBool = true;
                localStorage.setItem('clothAutoIntervalBool', true);
                localStorage.setItem('clothAutoDisabled', true);
                localStorage.setItem('clothProdButtonDisabled', true);
                automateInit();
                break;
            } else {
                output.innerHTML = 'NOT ENOUGH MONEY';
                setTimeout(function () { output.innerHTML = '' }, 3000);
                break;
            }
        case 'cloth-double':
            if (totalDollars >= prodStats.clothDoubleUpgradeCost) {
                totalDollars -= prodStats.clothDoubleUpgradeCost;
                localStorage.setItem('totalDollars', totalDollars);
                formatMoney();
                prodStats.clothDoubleUpgradeCost *= 2;
                prodStats.clothMultiplier *= 2;
                localStorage.setItem('clothDoubleUpgradeCost', prodStats.clothDoubleUpgradeCost);
                localStorage.setItem('clothMultiplier', prodStats.clothMultiplier);
                clothDouble.innerHTML = `Double Production: $${prodStats.clothDoubleUpgradeCost}`;
                clothAmt.innerHTML = `Cloth Chair: ${prodStats.clothAmount} ($${prodStats.clothValue} (x${prodStats.clothMultiplier}))`
                if (prodStats.clothMultiplier >= 4 && prestigeBonus < 2) {
                    prodStats.clothMultiplier = 4;
                    clothDouble.disabled = true;
                    localStorage.setItem('clothDoubleDisabled', true);
                    clothDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.clothMultiplier >= 8 && prestigeBonus < 5) {
                    prodStats.clothMultiplier = 8;
                    clothDouble.disabled = true;
                    localStorage.setItem('clothDoubleDisabled', true);
                    clothDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.clothMultiplier >= 16 && prestigeBonus < 10) {
                    prodStats.clothMultiplier = 16;
                    clothDouble.disabled = true;
                    localStorage.setItem('clothDoubleDisabled', true);
                    clothDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.clothMultiplier >= 32 && prestigeBonus < 50) {
                    prodStats.clothMultiplier = 32;
                    clothDouble.disabled = true;
                    localStorage.setItem('clothDoubleDisabled', true);
                    clothDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.clothMultiplier >= 64 && prestigeBonus < 100) {
                    prodStats.clothMultiplier = 64;
                    clothDouble.disabled = true;
                    localStorage.setItem('clothDoubleDisabled', true);
                    clothDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.clothMultiplier >= 128 && prestigeBonus < 350) {
                    prodStats.clothMultiplier = 128;
                    clothDouble.disabled = true;
                    localStorage.setItem('clothDoubleDisabled', true);
                    clothDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.clothMultiplier >= 256) {
                    prodStats.clothMultiplier = 256;
                    clothDouble.disabled = true;
                    localStorage.setItem('clothDoubleDisabled', true);
                    clothDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                break;
            } else {
                output.innerHTML = 'NOT ENOUGH MONEY';
                setTimeout(function () { output.innerHTML = '' }, 3000);
                break;
            }
        case 'office-prod-time':
            if (totalDollars >= prodStats.officeSpeedUpgradeCost) {
                totalDollars = (totalDollars - parseInt(prodStats.officeSpeedUpgradeCost.toPrecision(15)));
                localStorage.setItem('totalDollars', totalDollars);
                formatMoney();
                prodStats.officeTime /= 1.3;
                officeTimer.innerHTML = `${prodStats.officeTime.toPrecision(4)}s`;
                prodStats.officeSpeedUpgradeCost = parseInt((prodStats.officeSpeedUpgradeCost * 1.5).toPrecision(9));
                officeProdTime.innerHTML = `Reduce Time: $${prodStats.officeSpeedUpgradeCost}`;
                if (prodStats.officeTime <= 0.5) {
                    prodStats.officeTime = 0.5;
                    officeProdTime.disabled = true;
                    localStorage.setItem('officeProdTimeDisabled', true);
                    officeProdTime.innerHTML = 'Reduce Time: MAX';
                    officeTimer.innerHTML = '0.5s (MAX)';
                }
                localStorage.setItem('officeTime', prodStats.officeTime);
                localStorage.setItem('officeSpeedUpgradeCost', prodStats.officeSpeedUpgradeCost);
                break;
            } else {
                output.innerHTML = 'NOT ENOUGH MONEY';
                setTimeout(function () { output.innerHTML = '' }, 3000);
                break;
            }
        case 'office-automate':
            if (totalDollars >= prodStats.officeAutoUpgradeCost) {
                totalDollars -= prodStats.officeAutoUpgradeCost;
                localStorage.setItem('totalDollars', totalDollars);
                formatMoney();
                officeAuto.disabled = true;
                officeProdButton.disabled = true;
                officeAutoIntervalBool = true;
                localStorage.setItem('officeAutoIntervalBool', true);
                localStorage.setItem('officeAutoDisabled', true);
                localStorage.setItem('officeProdButtonDisabled', true);
                automateInit();
                break;
            } else {
                output.innerHTML = 'NOT ENOUGH MONEY';
                setTimeout(function () { output.innerHTML = '' }, 3000);
                break;
            }
        case 'office-double':
            if (totalDollars >= prodStats.officeDoubleUpgradeCost) {
                totalDollars -= prodStats.officeDoubleUpgradeCost;
                localStorage.setItem('totalDollars', totalDollars);
                formatMoney();
                prodStats.officeDoubleUpgradeCost *= 2;
                prodStats.officeMultiplier *= 2;
                localStorage.setItem('officeDoubleUpgradeCost', prodStats.officeDoubleUpgradeCost);
                localStorage.setItem('officeMultiplier', prodStats.officeMultiplier);
                officeDouble.innerHTML = `Double Production: $${prodStats.officeDoubleUpgradeCost}`;
                officeAmt.innerHTML = `Office Chair: ${prodStats.officeAmount} ($${prodStats.officeValue} (x${prodStats.officeMultiplier}))`
                if (prodStats.officeMultiplier >= 4 && prestigeBonus < 2) {
                    prodStats.officeMultiplier = 4;
                    officeDouble.disabled = true;
                    localStorage.setItem('officeDoubleDisabled', true);
                    officeDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.officeMultiplier >= 8 && prestigeBonus < 5) {
                    prodStats.officeMultiplier = 8;
                    officeDouble.disabled = true;
                    localStorage.setItem('officeDoubleDisabled', true);
                    officeDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.officeMultiplier >= 16 && prestigeBonus < 10) {
                    prodStats.officeMultiplier = 16;
                    officeDouble.disabled = true;
                    localStorage.setItem('officeDoubleDisabled', true);
                    officeDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.officeMultiplier >= 32 && prestigeBonus < 50) {
                    prodStats.officeMultiplier = 32;
                    officeDouble.disabled = true;
                    localStorage.setItem('officeDoubleDisabled', true);
                    officeDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.officeMultiplier >= 64 && prestigeBonus < 100) {
                    prodStats.officeMultiplier = 64;
                    officeDouble.disabled = true;
                    localStorage.setItem('officeDoubleDisabled', true);
                    officeDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.officeMultiplier >= 128 && prestigeBonus < 350) {
                    prodStats.officeMultiplier = 128;
                    officeDouble.disabled = true;
                    localStorage.setItem('officeDoubleDisabled', true);
                    officeDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.officeMultiplier >= 256) {
                    prodStats.officeMultiplier = 256;
                    officeDouble.disabled = true;
                    localStorage.setItem('officeDoubleDisabled', true);
                    officeDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                break;
            } else {
                output.innerHTML = 'NOT ENOUGH MONEY';
                setTimeout(function () { output.innerHTML = '' }, 3000);
                break;
            }
        case 'leather-prod-time':
            if (totalDollars >= prodStats.leatherSpeedUpgradeCost) {
                totalDollars = (totalDollars - parseInt(prodStats.leatherSpeedUpgradeCost.toPrecision(15)));
                localStorage.setItem('totalDollars', totalDollars);
                formatMoney();
                prodStats.leatherTime /= 1.35;
                leatherTimer.innerHTML = `${prodStats.leatherTime.toPrecision(4)}s`;
                prodStats.leatherSpeedUpgradeCost = parseInt((prodStats.leatherSpeedUpgradeCost * 1.5).toPrecision(12));
                leatherProdTime.innerHTML = `Reduce Time: $${prodStats.leatherSpeedUpgradeCost}`;
                if (prodStats.leatherTime <= 0.75) {
                    prodStats.leatherTime = 0.75;
                    leatherProdTime.disabled = true;
                    localStorage.setItem('leatherProdTimeDisabled', true);
                    leatherProdTime.innerHTML = 'Reduce Time: MAX';
                    leatherTimer.innerHTML = '0.75s (MAX)';
                }
                localStorage.setItem('leatherTime', prodStats.leatherTime);
                localStorage.setItem('leatherSpeedUpgradeCost', prodStats.leatherSpeedUpgradeCost);
                break;
            } else {
                output.innerHTML = 'NOT ENOUGH MONEY';
                setTimeout(function () { output.innerHTML = '' }, 3000);
                break;
            }
        case 'leather-automate':
            if (totalDollars >= prodStats.leatherAutoUpgradeCost) {
                totalDollars -= prodStats.leatherAutoUpgradeCost;
                localStorage.setItem('totalDollars', totalDollars);
                formatMoney();
                leatherAuto.disabled = true;
                leatherProdButton.disabled = true;
                leatherAutoIntervalBool = true;
                localStorage.setItem('leatherAutoIntervalBool', true);
                localStorage.setItem('leatherAutoDisabled', true);
                localStorage.setItem('leatherProdButtonDisabled', true);
                automateInit();
                break;
            } else {
                output.innerHTML = 'NOT ENOUGH MONEY';
                setTimeout(function () { output.innerHTML = '' }, 3000);
                break;
            }
        case 'leather-double':
            if (totalDollars >= prodStats.leatherDoubleUpgradeCost) {
                totalDollars -= prodStats.leatherDoubleUpgradeCost;
                localStorage.setItem('totalDollars', totalDollars);
                formatMoney();
                prodStats.leatherDoubleUpgradeCost *= 2;
                prodStats.leatherMultiplier *= 2;
                localStorage.setItem('leatherDoubleUpgradeCost', prodStats.leatherDoubleUpgradeCost);
                localStorage.setItem('leatherMultiplier', prodStats.leatherMultiplier);
                leatherDouble.innerHTML = `Double Production: $${prodStats.leatherDoubleUpgradeCost}`;
                leatherAmt.innerHTML = `Leather Chair: ${prodStats.leatherAmount} ($${prodStats.leatherValue} (x${prodStats.leatherMultiplier}))`
                if (prodStats.leatherMultiplier >= 4 && prestigeBonus < 2) {
                    prodStats.leatherMultiplier = 4;
                    leatherDouble.disabled = true;
                    localStorage.setItem('leatherDoubleDisabled', true);
                    leatherDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.leatherMultiplier >= 8 && prestigeBonus < 5) {
                    prodStats.leatherMultiplier = 8;
                    leatherDouble.disabled = true;
                    localStorage.setItem('leatherDoubleDisabled', true);
                    leatherDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.leatherMultiplier >= 16 && prestigeBonus < 10) {
                    prodStats.leatherMultiplier = 16;
                    leatherDouble.disabled = true;
                    localStorage.setItem('leatherDoubleDisabled', true);
                    leatherDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.leatherMultiplier >= 32 && prestigeBonus < 50) {
                    prodStats.leatherMultiplier = 32;
                    leatherDouble.disabled = true;
                    localStorage.setItem('leatherDoubleDisabled', true);
                    leatherDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.leatherMultiplier >= 64 && prestigeBonus < 100) {
                    prodStats.leatherMultiplier = 64;
                    leatherDouble.disabled = true;
                    localStorage.setItem('leatherDoubleDisabled', true);
                    leatherDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.leatherMultiplier >= 128 && prestigeBonus < 350) {
                    prodStats.leatherMultiplier = 128;
                    leatherDouble.disabled = true;
                    localStorage.setItem('leatherDoubleDisabled', true);
                    leatherDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.leatherMultiplier >= 256) {
                    prodStats.leatherMultiplier = 256;
                    leatherDouble.disabled = true;
                    localStorage.setItem('leatherDoubleDisabled', true);
                    leatherDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                break;
            } else {
                output.innerHTML = 'NOT ENOUGH MONEY';
                setTimeout(function () { output.innerHTML = '' }, 3000);
                break;
            }
        case 'recliner-prod-time':
            if (totalDollars >= prodStats.reclinerSpeedUpgradeCost) {
                totalDollars = (totalDollars - parseInt(prodStats.reclinerSpeedUpgradeCost).toPrecision(20));
                localStorage.setItem('totalDollars', totalDollars);
                formatMoney();
                prodStats.reclinerTime /= 1.4;
                reclinerTimer.innerHTML = `${prodStats.reclinerTime.toPrecision(4)}s`;
                prodStats.reclinerSpeedUpgradeCost = parseInt((prodStats.reclinerSpeedUpgradeCost * 1.65).toPrecision(20));
                reclinerProdTime.innerHTML = `Reduce Time: $${prodStats.reclinerSpeedUpgradeCost}`;
                if (prodStats.reclinerTime <= 1) {
                    prodStats.reclinerTime = 1;
                    reclinerProdTime.disabled = true;
                    reclinerProdTime.innerHTML = 'Reduce Time: MAX';
                    reclinerTimer.innerHTML = '1s (MAX)';
                    localStorage.setItem('reclinerProdTimeDisabled', true);
                }
                localStorage.setItem('reclinerTime', prodStats.reclinerTime);
                localStorage.setItem('reclinerSpeedUpgradeCost', prodStats.reclinerSpeedUpgradeCost);
                break;
            } else {
                output.innerHTML = 'NOT ENOUGH MONEY';
                setTimeout(function () { output.innerHTML = '' }, 3000);
                break;
            }
        case 'recliner-automate':
            if (totalDollars >= prodStats.reclinerAutoUpgradeCost) {
                totalDollars -= prodStats.reclinerAutoUpgradeCost;
                localStorage.setItem('totalDollars', totalDollars);
                formatMoney();
                reclinerAuto.disabled = true;
                reclinerProdButton.disabled = true;
                reclinerAutoIntervalBool = true;
                localStorage.setItem('reclinerAutoIntervalBool', true);
                localStorage.setItem('reclinerAutoDisabled', true);
                localStorage.setItem('reclinerProdButtonDisabled', true);
                automateInit();
                break;
            } else {
                output.innerHTML = 'NOT ENOUGH MONEY';
                setTimeout(function () { output.innerHTML = '' }, 3000);
                break;
            }
        case 'recliner-double':
            if (totalDollars >= prodStats.reclinerDoubleUpgradeCost) {
                totalDollars -= prodStats.reclinerDoubleUpgradeCost;
                localStorage.setItem('totalDollars', totalDollars);
                formatMoney();
                prodStats.reclinerDoubleUpgradeCost *= 2;
                prodStats.reclinerMultiplier *= 2;
                localStorage.setItem('reclinerDoubleUpgradeCost', prodStats.reclinerDoubleUpgradeCost);
                localStorage.setItem('reclinerMultiplier', prodStats.reclinerMultiplier);
                reclinerDouble.innerHTML = `Double Production: $${prodStats.reclinerDoubleUpgradeCost}`;
                reclinerAmt.innerHTML = `Recliner: ${prodStats.reclinerAmount} ($${prodStats.reclinerValue} (x${prodStats.reclinerMultiplier}))`
                if (prodStats.reclinerMultiplier >= 4 && prestigeBonus < 2) {
                    prodStats.reclinerMultiplier = 4;
                    reclinerDouble.disabled = true;
                    localStorage.setItem('reclinerDoubleDisabled', true);
                    reclinerDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.reclinerMultiplier >= 8 && prestigeBonus < 5) {
                    prodStats.reclinerMultiplier = 8;
                    reclinerDouble.disabled = true;
                    localStorage.setItem('reclinerDoubleDisabled', true);
                    reclinerDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.reclinerMultiplier >= 16 && prestigeBonus < 10) {
                    prodStats.reclinerMultiplier = 16;
                    reclinerDouble.disabled = true;
                    localStorage.setItem('reclinerDoubleDisabled', true);
                    reclinerDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.reclinerMultiplier >= 32 && prestigeBonus < 50) {
                    prodStats.reclinerMultiplier = 32;
                    reclinerDouble.disabled = true;
                    localStorage.setItem('reclinerDoubleDisabled', true);
                    reclinerDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.reclinerMultiplier >= 64 && prestigeBonus < 100) {
                    prodStats.reclinerMultiplier = 64;
                    reclinerDouble.disabled = true;
                    localStorage.setItem('reclinerDoubleDisabled', true);
                    reclinerDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.reclinerMultiplier >= 128 && prestigeBonus < 350) {
                    prodStats.reclinerMultiplier = 128;
                    reclinerDouble.disabled = true;
                    localStorage.setItem('reclinerDoubleDisabled', true);
                    reclinerDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                if (prodStats.reclinerMultiplier >= 256) {
                    prodStats.reclinerMultiplier = 256;
                    reclinerDouble.disabled = true;
                    localStorage.setItem('reclinerDoubleDisabled', true);
                    reclinerDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                break;
            } else {
                output.innerHTML = 'NOT ENOUGH MONEY';
                setTimeout(function () { output.innerHTML = '' }, 3000);
                break;
            }
    }
}

function renameFactory() {
    if (!renameValue.value) {
        output.innerHTML = 'ERROR: Please enter a name';
        setTimeout(function () { output.innerHTML = '' }, 3000);
        return;
    }
    factoryName.innerHTML = renameValue.value;
    localStorage.setItem('factoryName', renameValue.value);
    renameValue.value = '';
}

function unlock(e) {
    switch (e.target.className) {
        case 'cloth-prod-timer cloth-unlock':
            if (totalDollars >= prodStats.clothUnlock) {
                totalDollars -= prodStats.clothUnlock;
                localStorage.setItem('totalDollars', totalDollars);
                formatMoney();
                clothProdButton.disabled = false;
                clothAuto.disabled = false;
                clothProdTime.disabled = false;
                clothDouble.disabled = false;
                clothAmt.style.opacity = 1;
                clothUnlock.style.display = 'none';
                localStorage.setItem('clothProdButtonDisabled', false);
                localStorage.setItem('clothAutoDisabled', false);
                localStorage.setItem('clothProdTimeDisabled', false);
                localStorage.setItem('clothDoubleDisabled', false);
                localStorage.setItem('clothAmtOpacity', 1);
                localStorage.setItem('clothUnlockStyleDisplay', 'none');
                break;
            } else {
                output.innerHTML = 'NOT ENOUGH MONEY';
                setTimeout(function () { output.innerHTML = '' }, 3000);
                break;
            }
        case 'office-prod-timer office-unlock':
            if (totalDollars >= prodStats.officeUnlock) {
                totalDollars -= prodStats.officeUnlock;
                localStorage.setItem('totalDollars', totalDollars);
                formatMoney();
                officeProdButton.disabled = false;
                officeAuto.disabled = false;
                officeProdTime.disabled = false;
                officeDouble.disabled = false;
                officeAmt.style.opacity = 1;
                officeUnlock.style.display = 'none';
                localStorage.setItem('officeProdButtonDisabled', false);
                localStorage.setItem('officeAutoDisabled', false);
                localStorage.setItem('officeProdTimeDisabled', false);
                localStorage.setItem('officeDoubleDisabled', false);
                localStorage.setItem('officeAmtOpacity', 1);
                localStorage.setItem('officeUnlockStyleDisplay', 'none');
                break;
            } else {
                output.innerHTML = 'NOT ENOUGH MONEY';
                setTimeout(function () { output.innerHTML = '' }, 3000);
                break;
            }
        case 'leather-prod-timer leather-unlock':
            if (totalDollars >= prodStats.leatherUnlock) {
                totalDollars -= prodStats.leatherUnlock;
                localStorage.setItem('totalDollars', totalDollars);
                formatMoney();
                leatherProdButton.disabled = false;
                leatherAuto.disabled = false;
                leatherProdTime.disabled = false;
                leatherDouble.disabled = false;
                leatherAmt.style.opacity = 1;
                leatherUnlock.style.display = 'none';
                localStorage.setItem('leatherProdButtonDisabled', false);
                localStorage.setItem('leatherAutoDisabled', false);
                localStorage.setItem('leatherProdTimeDisabled', false);
                localStorage.setItem('leatherDoubleDisabled', false);
                localStorage.setItem('leatherAmtOpacity', 1);
                localStorage.setItem('leatherUnlockStyleDisplay', 'none');
                break;
            } else {
                output.innerHTML = 'NOT ENOUGH MONEY';
                setTimeout(function () { output.innerHTML = '' }, 3000);
                break;
            }
        case 'recliner-prod-timer recliner-unlock':
            if (totalDollars >= prodStats.reclinerUnlock) {
                totalDollars -= prodStats.reclinerUnlock;
                localStorage.setItem('totalDollars', totalDollars);
                formatMoney();
                reclinerProdButton.disabled = false;
                reclinerAuto.disabled = false;
                reclinerProdTime.disabled = false;
                reclinerDouble.disabled = false;
                reclinerAmt.style.opacity = 1;
                reclinerUnlock.style.display = 'none';
                localStorage.setItem('reclinerProdButtonDisabled', false);
                localStorage.setItem('reclinerAutoDisabled', false);
                localStorage.setItem('reclinerProdTimeDisabled', false);
                localStorage.setItem('reclinerDoubleDisabled', false);
                localStorage.setItem('reclinerAmtOpacity', 1);
                localStorage.setItem('reclinerUnlockStyleDisplay', 'none');
                break;
            } else {
                output.innerHTML = 'NOT ENOUGH MONEY';
                setTimeout(function () { output.innerHTML = '' }, 3000);
                break;
            }
    }
}

function settings() {
    settingsModal.style.display = 'block';
}

function closeSettingsModal() {
    settingsModal.style.display = 'none';
}

function adjustColor() {
    switch (this.id) {
        case 'red-header-background-slider':
            rHBColor = this.value;
            localStorage.setItem('rHBColor', rHBColor);
            document.querySelector('.heading').style.backgroundColor = `rgb(${rHBColor}, ${gHBColor}, ${bHBColor})`;
            break;
        case 'green-header-background-slider':
            gHBColor = this.value;
            localStorage.setItem('gHBColor', gHBColor);
            document.querySelector('.heading').style.backgroundColor = `rgb(${rHBColor}, ${gHBColor}, ${bHBColor})`;
            break;
        case 'blue-header-background-slider':
            bHBColor = this.value;
            localStorage.setItem('bHBColor', bHBColor);
            document.querySelector('.heading').style.backgroundColor = `rgb(${rHBColor}, ${gHBColor}, ${bHBColor})`;
            break;
        case 'red-header-text-slider':
            rHTColor = this.value;
            localStorage.setItem('rHTColor', rHTColor);
            document.querySelector('.money').style.color = `rgb(${rHTColor}, ${gHTColor}, ${bHTColor})`;
            document.querySelector('.chairs').style.color = `rgb(${rHTColor}, ${gHTColor}, ${bHTColor})`;
            document.querySelector('.factory-name').style.color = `rgb(${rHTColor}, ${gHTColor}, ${bHTColor})`;
            break;
        case 'green-header-text-slider':
            gHTColor = this.value;
            localStorage.setItem('gHTColor', gHTColor);
            document.querySelector('.money').style.color = `rgb(${rHTColor}, ${gHTColor}, ${bHTColor})`;
            document.querySelector('.chairs').style.color = `rgb(${rHTColor}, ${gHTColor}, ${bHTColor})`;
            document.querySelector('.factory-name').style.color = `rgb(${rHTColor}, ${gHTColor}, ${bHTColor})`;
            break;
        case 'blue-header-text-slider':
            bHTColor = this.value;
            localStorage.setItem('bHTColor', bHTColor);
            document.querySelector('.money').style.color = `rgb(${rHTColor}, ${gHTColor}, ${bHTColor})`;
            document.querySelector('.chairs').style.color = `rgb(${rHTColor}, ${gHTColor}, ${bHTColor})`;
            document.querySelector('.factory-name').style.color = `rgb(${rHTColor}, ${gHTColor}, ${bHTColor})`;
            break;
        case 'red-factory-background-slider':
            rFBColor = this.value;
            localStorage.setItem('rFBColor', rFBColor);
            document.documentElement.style.backgroundColor = `rgb(${rFBColor}, ${gFBColor}, ${bFBColor})`;
            factory.style.backgroundColor = `rgb(${rFBColor}, ${gFBColor}, ${bFBColor})`;
            break;
        case 'green-factory-background-slider':
            gFBColor = this.value;
            localStorage.setItem('gFBColor', gFBColor);
            document.documentElement.style.backgroundColor = `rgb(${rFBColor}, ${gFBColor}, ${bFBColor})`;
            factory.style.backgroundColor = `rgb(${rFBColor}, ${gFBColor}, ${bFBColor})`;
            break;
        case 'blue-factory-background-slider':
            bFBColor = this.value;
            localStorage.setItem('bFBColor', bFBColor);
            document.documentElement.style.backgroundColor = `rgb(${rFBColor}, ${gFBColor}, ${bFBColor})`;
            factory.style.backgroundColor = `rgb(${rFBColor}, ${gFBColor}, ${bFBColor})`;
            break;
    }
}

function prestige() {
    let prestigeBonus = parseInt((localStorage.getItem('prestigeBonus') * (1 + (totalChairs / 1000000))).toFixed(3));
    console.log(prestigeBonus);
    localStorage.clear();
    location.reload();
    totalChairs = 0;
    totalDollars = 0;
    localStorage.setItem('totalDollars', totalDollars);
    localStorage.setItem('totalChairs', totalChairs);
    localStorage.setItem('prestigeBonus', prestigeBonus);
    console.log(localStorage.getItem('prestigeBonus'));
}

function prestigeOpen() {
    prestigeWarning.style.display = 'block';
}

function closeConfirmation() {
    prestigeWarning.style.display = 'none';
}

for (let i = 0; i < sliders.length; i++) {
    sliders[i].addEventListener('change', adjustColor);
}

prestigeConfirmButton.addEventListener('click', prestige);
closePrestige.addEventListener('click', closeConfirmation);
prestigeButton.addEventListener('click', prestigeOpen);
settingsButton.addEventListener('click', settings);
closeSettings.addEventListener('click', closeSettingsModal);
woodProdTime.addEventListener('click', upgrade);
woodAuto.addEventListener('click', upgrade);
clothProdTime.addEventListener('click', upgrade);
clothAuto.addEventListener('click', upgrade);
renameButton.addEventListener('click', renameFactory);
woodProdButton.addEventListener('click', produce);
clothProdButton.addEventListener('click', produce);
clothUnlock.addEventListener('click', unlock);
officeProdTime.addEventListener('click', upgrade);
officeAuto.addEventListener('click', upgrade);
officeProdButton.addEventListener('click', produce);
officeUnlock.addEventListener('click', unlock);
leatherProdTime.addEventListener('click', upgrade);
leatherAuto.addEventListener('click', upgrade);
leatherProdButton.addEventListener('click', produce);
leatherUnlock.addEventListener('click', unlock);
woodDouble.addEventListener('click', upgrade);
clothDouble.addEventListener('click', upgrade);
officeDouble.addEventListener('click', upgrade);
leatherDouble.addEventListener('click', upgrade);
reclinerProdTime.addEventListener('click', upgrade);
reclinerAuto.addEventListener('click', upgrade);
reclinerProdButton.addEventListener('click', produce);
reclinerUnlock.addEventListener('click', unlock);
reclinerDouble.addEventListener('click', upgrade);