const renameButton = document.querySelector('.rename');
const renameValue = document.querySelector('.name');
const factoryName = document.querySelector('.factory-name');
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
const clothTimer = document.querySelector('.cloth-prod-timer');
const clothUnlock = document.querySelector('.cloth-unlock');
const officeProdButton = document.querySelector('.office-produce');
const officeAmt = document.querySelector('.office');
const officeProdTime = document.querySelector('.office-prod-time');
const officeAuto = document.querySelector('.office-automate');
const officeTimer = document.querySelector('.office-prod-timer');
const officeUnlock = document.querySelector('.office-unlock');
let totalDollars = 0;
let totalChairs = 0;

function init() {
    clothProdButton.disabled = true;
    clothAuto.disabled = true;
    clothProdTime.disabled = true;
    officeProdButton.disabled = true;
    officeAuto.disabled = true;
    officeProdTime.disabled = true;
}
init();

const prodStats = {
    woodTime: 3.25,
    woodValue: 13.5,
    woodAmount: 0,
    woodSpeedUpgradeCost: 50,
    woodAutoUpgradeCost: 1200,
    clothTime: 10,
    clothValue: 24.99,
    clothAmount: 0,
    clothSpeedUpgradeCost: 250,
    clothAutoUpgradeCost: 5500,
    clothUnlock: 140,
    officeTime: 60,
    officeValue: 48.7,
    officeAmount: 0,
    officeSpeedUpgradeCost: 742,
    officeAutoUpgradeCost: 9375,
    officeUnlock: 1625,
}

function produce(e) {
    switch (e.target.className) {
        case 'wood-produce':
            woodProdButton.disabled = true;
            setTimeout(() => {
                prodStats.woodAmount++;
                totalChairs++;
                totalDollars += prodStats.woodValue;
                money.innerHTML = `You have: $${totalDollars}`;
                chairs.innerHTML = `You have produced: ${totalChairs} chairs`;
                woodAmt.innerHTML = `Wooden Chair: ${prodStats.woodAmount} ($13.50)`;
                woodProdButton.disabled = false;
            }, (prodStats.woodTime) * 1000);
            break;
        case 'cloth-produce':
            clothProdButton.disabled = true;
            setTimeout(() => {
                prodStats.clothAmount++;
                totalChairs++;
                totalDollars += prodStats.clothValue;
                money.innerHTML = `You have: $${totalDollars}`;
                chairs.innerHTML = `You have produced: ${totalChairs} chairs`;
                clothAmt.innerHTML = `Cloth Chair: ${prodStats.clothAmount} ($24.99)`;
                clothProdButton.disabled = false;
            }, (prodStats.clothTime) * 1000);
            break;
        case 'office-produce':
            officeProdButton.disabled = true;
            setTimeout(() => {
                prodStats.officeAmount++;
                totalChairs++;
                totalDollars += prodStats.officeValue;
                money.innerHTML = `You have: $${totalDollars}`;
                chairs.innerHTML = `You have produced: ${totalChairs} chairs`;
                officeAmt.innerHTML = `Office Chair: ${prodStats.officeAmount} ($48.70)`;
                officeProdButton.disabled = false;
            }, (prodStats.officeTime) * 1000);
            break;
    }
}

let woodAutoInterval = null;
let clothAutoInterval = null;
let officeAutoInterval = null;

function woodAutomate() {
    clearInterval(woodAutoInterval);
    prodStats.woodAmount++;
    totalChairs++;
    totalDollars += prodStats.woodValue;
    money.innerHTML = `You have: ${totalDollars} dollars`;
    chairs.innerHTML = `You have produced: ${totalChairs} chairs`;
    woodAmt.innerHTML = `Wooden Chair: ${prodStats.woodAmount} ($${prodStats.woodValue})`;
    woodAutoInterval = setInterval(woodAutomate, prodStats.woodTime * 1000);
}

function clothAutomate() {
    clearInterval(clothAutoInterval);
    prodStats.clothAmount++;
    totalChairs++;
    totalDollars += prodStats.clothValue;
    money.innerHTML = `You have: ${totalDollars} dollars`;
    chairs.innerHTML = `You have produced: ${totalChairs} chairs`;
    clothAmt.innerHTML = `Cloth Chair: ${prodStats.clothAmount} ($${prodStats.clothValue})`;
    clothAutoInterval = setInterval(clothAutomate, prodStats.clothTime * 1000);
}

function officeAutomate() {
    clearInterval(officeAutoInterval);
    prodStats.officeAmount++;
    totalChairs++;
    totalDollars += prodStats.officeValue;
    money.innerHTML = `You have: ${totalDollars} dollars`;
    chairs.innerHTML = `You have produced: ${totalChairs} chairs`;
    officeAmt.innerHTML = `Office Chair: ${prodStats.officeAmount} ($${prodStats.officeValue})`;
    officeAutoInterval = setInterval(officeAutomate, prodStats.officeTime * 1000);
}

function upgrade(e) {
    switch (e.target.className) {
        case 'wood-prod-time':
            if (totalDollars >= prodStats.woodSpeedUpgradeCost) {
                totalDollars = parseInt((totalDollars - prodStats.woodSpeedUpgradeCost).toPrecision(4));
                money.innerHTML = `You have: $${totalDollars}`;
                prodStats.woodTime /= 1.2;
                if (prodStats.woodTime <= 0.05) {
                    prodStats.woodTime = 0.05;
                    woodProdTime.disabled = true;
                }
                woodTimer.innerHTML = `${prodStats.woodTime.toPrecision(4)}s`;
                prodStats.woodSpeedUpgradeCost = parseInt((prodStats.woodSpeedUpgradeCost * 1.25).toPrecision(5));
                woodProdTime.innerHTML = `Reduce Time: $${prodStats.woodSpeedUpgradeCost}`;
                break;
            } else {
                renameValue.placeholder = 'NOT ENOUGH MONEY';
                setTimeout(function () { renameValue.placeholder = '' }, 3000);
                break;
            }
        case 'wood-automate':
            if (totalDollars >= prodStats.woodAutoUpgradeCost) {
                totalDollars -= prodStats.woodAutoUpgradeCost;
                money.innerHTML = `You have: $${totalDollars}`;
                woodAuto.disabled = true;
                woodProdButton.disabled = true;
                woodAutoInterval = setInterval(woodAutomate, prodStats.woodTime * 1000);
                break;
            } else {
                renameValue.placeholder = 'NOT ENOUGH MONEY';
                setTimeout(function () { renameValue.placeholder = '' }, 3000);
                break;
            }
        case 'cloth-prod-time':
            if (totalDollars >= prodStats.clothSpeedUpgradeCost) {
                totalDollars = parseInt((totalDollars - prodStats.clothSpeedUpgradeCost).toPrecision(4));
                money.innerHTML = `You have: $${totalDollars}`;
                prodStats.clothTime /= 1.2;
                if (prodStats.clothTime <= 0.05) {
                    prodStats.clothTime = 0.05;
                    clothProdTime.disabled = true;
                }
                clothTimer.innerHTML = `${prodStats.clothTime.toPrecision(4)}s`;
                prodStats.clothSpeedUpgradeCost = parseInt((prodStats.clothSpeedUpgradeCost * 1.4).toPrecision(5));
                clothProdTime.innerHTML = `Reduce Time: $${prodStats.clothSpeedUpgradeCost}`;
                break;
            } else {
                renameValue.placeholder = 'NOT ENOUGH MONEY';
                setTimeout(function () { renameValue.placeholder = '' }, 3000);
                break;
            }
        case 'cloth-automate':
            if (totalDollars >= prodStats.clothAutoUpgradeCost) {
                totalDollars -= prodStats.clothAutoUpgradeCost;
                money.innerHTML = `You have: $${totalDollars}`;
                clothAuto.disabled = true;
                clothProdButton.disabled = true;
                clothAutoInterval = setInterval(clothAutomate, prodStats.clothTime * 1000);
                break;
            } else {
                renameValue.placeholder = 'NOT ENOUGH MONEY';
                setTimeout(function () { renameValue.placeholder = '' }, 3000);
                break;
            }
        case 'office-prod-time':
            if (totalDollars >= prodStats.officeSpeedUpgradeCost) {
                totalDollars = (totalDollars - parseInt(prodStats.officeSpeedUpgradeCost.toPrecision(4)));
                money.innerHTML = `You have: $${totalDollars}`;
                prodStats.officeTime /= 1.15;
                if (prodStats.officeTime <= 0.05) {
                    prodStats.officeTime = 0.05;
                    officeProdTime.disabled = true;
                }
                officeTimer.innerHTML = `${prodStats.officeTime.toPrecision(4)}s`;
                prodStats.officeSpeedUpgradeCost = parseInt((prodStats.officeSpeedUpgradeCost * 1.5).toPrecision(5));
                officeProdTime.innerHTML = `Reduce Time: $${prodStats.officeSpeedUpgradeCost}`;
                break;
            } else {
                renameValue.placeholder = 'NOT ENOUGH MONEY';
                setTimeout(function () { renameValue.placeholder = '' }, 3000);
                break;
            }
        case 'office-automate':
            if (totalDollars >= prodStats.officeAutoUpgradeCost) {
                totalDollars -= prodStats.officeAutoUpgradeCost;
                money.innerHTML = `You have: $${totalDollars}`;
                officeAuto.disabled = true;
                officeProdButton.disabled = true;
                console.log(officeProdButton.disabled);
                officeAutoInterval = setInterval(officeAutomate, prodStats.officeTime * 1000);
                break;
            } else {
                renameValue.placeholder = 'NOT ENOUGH MONEY';
                setTimeout(function () { renameValue.placeholder = '' }, 3000);
                break;
            }
    }
}

function renameFactory() {
    if (!renameValue.value) {
        renameValue.placeholder = 'ERROR: Please enter a name';
        return;
    }
    factoryName.innerHTML = renameValue.value;
    renameValue.placeholder = '';
}

function unlock(e) {
    switch (e.target.className) {
        case 'cloth-prod-timer cloth-unlock':
            if (totalDollars >= prodStats.clothUnlock) {
                totalDollars -= prodStats.clothUnlock;
                money.innerHTML = `You have: $${totalDollars}`;
                clothProdButton.disabled = false;
                clothAuto.disabled = false;
                clothProdTime.disabled = false;
                clothAmt.style.opacity = 1;
                clothUnlock.style.display = 'none';
                break;
            } else {
                renameValue.placeholder = 'NOT ENOUGH MONEY';
                setTimeout(function () { renameValue.placeholder = '' }, 3000);
                break;
            }
        case 'office-prod-timer office-unlock':
            if (totalDollars >= prodStats.officeUnlock) {
                totalDollars -= prodStats.officeUnlock;
                money.innerHTML = `You have: $${totalDollars}`;
                officeProdButton.disabled = false;
                officeAuto.disabled = false;
                officeProdTime.disabled = false;
                officeAmt.style.opacity = 1;
                officeUnlock.style.display = 'none';
                break;
            } else {
                renameValue.placeholder = 'NOT ENOUGH MONEY';
                setTimeout(function () { renameValue.placeholder = '' }, 3000);
                break;
            }
    }
}

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