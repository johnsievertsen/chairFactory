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
let totalDollars = 0;
let totalChairs = 0;

function init() {
    clothProdButton.disabled = true;
    clothAuto.disabled = true;
    clothProdTime.disabled = true;
    clothDouble.disabled = true;
    officeProdButton.disabled = true;
    officeAuto.disabled = true;
    officeProdTime.disabled = true;
    officeDouble.disabled = true;
    leatherProdButton.disabled = true;
    leatherAuto.disabled = true;
    leatherProdTime.disabled = true;
    leatherDouble.disabled = true;
}
init();

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
}

function produce(e) {
    switch (e.target.className) {
        case 'wood-produce':
            woodProdButton.disabled = true;
            setTimeout(() => {
                prodStats.woodAmount += (1 * prodStats.woodMultiplier);
                totalChairs += (1 * prodStats.woodMultiplier);
                totalDollars += (prodStats.woodValue * prodStats.woodMultiplier);
                money.innerHTML = `You have: $${totalDollars.toPrecision(5)}`;
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
                totalDollars += (prodStats.clothValue * prodStats.clothMultiplier);
                money.innerHTML = `You have: $${totalDollars.toPrecision(5)}`;
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
                totalDollars += (prodStats.officeValue * prodStats.officeMultiplier);
                money.innerHTML = `You have: $${totalDollars.toPrecision(5)}`;
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
                totalDollars += (prodStats.leatherValue * prodStats.leatherMultiplier);
                money.innerHTML = `You have: $${totalDollars.toPrecision(5)}`;
                chairs.innerHTML = `You have produced: ${totalChairs} chairs`;
                leatherAmt.innerHTML = `Leather Chair: ${prodStats.leatherAmount} ($${prodStats.leatherValue} (x${prodStats.leatherMultiplier}))`;
                leatherProdButton.disabled = false;
            }, (prodStats.leatherTime) * 1000);
            break;
    }
}

let woodAutoInterval = null;
let clothAutoInterval = null;
let officeAutoInterval = null;
let leatherAutoInterval = null;

function woodAutomate() {
    clearInterval(woodAutoInterval);
    prodStats.woodAmount += (1 * prodStats.woodMultiplier);
    totalChairs += (1 * prodStats.woodMultiplier);
    totalDollars += (prodStats.woodValue * prodStats.woodMultiplier);
    money.innerHTML = `You have: $${totalDollars.toPrecision(5)}`;
    chairs.innerHTML = `You have produced: ${totalChairs} chairs`;
    woodAmt.innerHTML = `Wooden Chair: ${prodStats.woodAmount} ($${prodStats.woodValue} (x${prodStats.woodMultiplier}))`;
    woodAutoInterval = setInterval(woodAutomate, prodStats.woodTime * 1000);
}

function clothAutomate() {
    clearInterval(clothAutoInterval);
    prodStats.clothAmount += (1 * prodStats.clothMultiplier);
    totalChairs += (1 * prodStats.clothMultiplier);
    totalDollars += (prodStats.clothValue * prodStats.clothMultiplier);
    money.innerHTML = `You have: $${totalDollars.toPrecision(5)}`;
    chairs.innerHTML = `You have produced: ${totalChairs} chairs`;
    clothAmt.innerHTML = `Cloth Chair: ${prodStats.clothAmount} ($${prodStats.clothValue} (x${prodStats.clothMultiplier}))`;
    clothAutoInterval = setInterval(clothAutomate, prodStats.clothTime * 1000);
}

function officeAutomate() {
    clearInterval(officeAutoInterval);
    prodStats.officeAmount += (1 * prodStats.officeMultiplier);
    totalChairs += (1 * prodStats.officeMultiplier);
    totalDollars += (prodStats.officeValue * prodStats.officeMultiplier);
    money.innerHTML = `You have: $${totalDollars.toPrecision(5)}`;
    chairs.innerHTML = `You have produced: ${totalChairs} chairs`;
    officeAmt.innerHTML = `Office Chair: ${prodStats.officeAmount} ($${prodStats.officeValue} (x${prodStats.officeMultiplier}))`;
    officeAutoInterval = setInterval(officeAutomate, prodStats.officeTime * 1000);
}

function leatherAutomate() {
    clearInterval(leatherAutoInterval);
    prodStats.leatherAmount += (1 * prodStats.leatherMultiplier);
    totalChairs += (1 * prodStats.leatherMultiplier);
    totalDollars += (prodStats.leatherValue * prodStats.leatherMultiplier);
    money.innerHTML = `You have: $${totalDollars.toPrecision(5)}`;
    chairs.innerHTML = `You have produced: ${totalChairs} chairs`;
    leatherAmt.innerHTML = `Leather Chair: ${prodStats.leatherAmount} ($${prodStats.leatherValue} (x${prodStats.leatherMultiplier}))`;
    leatherAutoInterval = setInterval(leatherAutomate, prodStats.leatherTime * 1000);
}

function upgrade(e) {
    switch (e.target.className) {
        case 'wood-prod-time':
            if (totalDollars >= prodStats.woodSpeedUpgradeCost) {
                totalDollars = (totalDollars - parseInt(prodStats.woodSpeedUpgradeCost).toPrecision(5));
                money.innerHTML = `You have: $${totalDollars.toPrecision(5)}`;
                prodStats.woodTime /= 1.2;
                woodTimer.innerHTML = `${prodStats.woodTime.toPrecision(4)}s`;
                prodStats.woodSpeedUpgradeCost = parseInt((prodStats.woodSpeedUpgradeCost * 1.25).toPrecision(5));
                woodProdTime.innerHTML = `Reduce Time: $${prodStats.woodSpeedUpgradeCost}`;
                if (prodStats.woodTime <= 0.05) {
                    prodStats.woodTime = 0.05;
                    woodProdTime.disabled = true;
                    woodProdTime.innerHTML = 'Reduce Time: MAX';
                    woodTimer.innerHTML = '0.05s (MAX)';
                }
                break;
            } else {
                renameValue.placeholder = 'NOT ENOUGH MONEY';
                setTimeout(function () { renameValue.placeholder = '' }, 3000);
                break;
            }
        case 'wood-automate':
            if (totalDollars >= prodStats.woodAutoUpgradeCost) {
                totalDollars -= prodStats.woodAutoUpgradeCost;
                money.innerHTML = `You have: $${totalDollars.toPrecision(5)}`;
                woodAuto.disabled = true;
                woodProdButton.disabled = true;
                woodAutoInterval = setInterval(woodAutomate, prodStats.woodTime * 1000);
                break;
            } else {
                renameValue.placeholder = 'NOT ENOUGH MONEY';
                setTimeout(function () { renameValue.placeholder = '' }, 3000);
                break;
            }
        case 'wood-double':
            if (totalDollars >= prodStats.woodDoubleUpgradeCost) {
                totalDollars -= prodStats.woodDoubleUpgradeCost;
                money.innerHTML = `You have: $${totalDollars.toPrecision(5)}`;
                prodStats.woodDoubleUpgradeCost *= 2;
                woodDouble.innerHTML = `Double Production: $${prodStats.woodDoubleUpgradeCost}`;
                prodStats.woodMultiplier *= 2;
                woodAmt.innerHTML = `Wooden Chair: ${prodStats.woodAmount} ($${prodStats.woodValue} (x${prodStats.woodMultiplier}))`
                if (prodStats.woodMultiplier >= 4) {
                    prodStats.woodMultiplier = 4;
                    woodDouble.disabled = true;
                    woodDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                break;
            } else {
                renameValue.placeholder = 'NOT ENOUGH MONEY';
                setTimeout(function () { renameValue.placeholder = '' }, 3000);
                break;
            }
        case 'cloth-prod-time':
            if (totalDollars >= prodStats.clothSpeedUpgradeCost) {
                totalDollars = (totalDollars - parseInt(prodStats.clothSpeedUpgradeCost).toPrecision(5));
                money.innerHTML = `You have: $${totalDollars.toPrecision(5)}`;
                prodStats.clothTime /= 1.28;
                clothTimer.innerHTML = `${prodStats.clothTime.toPrecision(4)}s`;
                prodStats.clothSpeedUpgradeCost = parseInt((prodStats.clothSpeedUpgradeCost * 1.4).toPrecision(7));
                clothProdTime.innerHTML = `Reduce Time: $${prodStats.clothSpeedUpgradeCost}`;
                if (prodStats.clothTime <= 0.2) {
                    prodStats.clothTime = 0.2;
                    clothProdTime.disabled = true;
                    clothProdTime.innerHTML = 'Reduce Time: MAX';
                    clothTimer.innerHTML = '0.2s (MAX)';
                }
                break;
            } else {
                renameValue.placeholder = 'NOT ENOUGH MONEY';
                setTimeout(function () { renameValue.placeholder = '' }, 3000);
                break;
            }
        case 'cloth-automate':
            if (totalDollars >= prodStats.clothAutoUpgradeCost) {
                totalDollars -= prodStats.clothAutoUpgradeCost;
                money.innerHTML = `You have: $${totalDollars.toPrecision(5)}`;
                clothAuto.disabled = true;
                clothProdButton.disabled = true;
                clothAutoInterval = setInterval(clothAutomate, prodStats.clothTime * 1000);
                break;
            } else {
                renameValue.placeholder = 'NOT ENOUGH MONEY';
                setTimeout(function () { renameValue.placeholder = '' }, 3000);
                break;
            }
        case 'cloth-double':
            if (totalDollars >= prodStats.clothDoubleUpgradeCost) {
                totalDollars -= prodStats.clothDoubleUpgradeCost;
                money.innerHTML = `You have: $${totalDollars.toPrecision(5)}`;
                prodStats.clothDoubleUpgradeCost *= 2;
                clothDouble.innerHTML = `Double Production: $${prodStats.clothDoubleUpgradeCost}`;
                prodStats.clothMultiplier *= 2;
                clothAmt.innerHTML = `Cloth Chair: ${prodStats.clothAmount} ($${prodStats.clothValue} (x${prodStats.clothMultiplier}))`
                if (prodStats.clothMultiplier >= 4) {
                    prodStats.clothMultiplier = 4;
                    clothDouble.disabled = true;
                    clothDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                break;
            } else {
                renameValue.placeholder = 'NOT ENOUGH MONEY';
                setTimeout(function () { renameValue.placeholder = '' }, 3000);
                break;
            }
        case 'office-prod-time':
            if (totalDollars >= prodStats.officeSpeedUpgradeCost) {
                totalDollars = (totalDollars - parseInt(prodStats.officeSpeedUpgradeCost.toPrecision(5)));
                money.innerHTML = `You have: $${totalDollars.toPrecision(5)}`;
                prodStats.officeTime /= 1.3;
                officeTimer.innerHTML = `${prodStats.officeTime.toPrecision(4)}s`;
                prodStats.officeSpeedUpgradeCost = parseInt((prodStats.officeSpeedUpgradeCost * 1.5).toPrecision(9));
                officeProdTime.innerHTML = `Reduce Time: $${prodStats.officeSpeedUpgradeCost}`;
                if (prodStats.officeTime <= 0.8) {
                    prodStats.officeTime = 0.8;
                    officeProdTime.disabled = true;
                    officeProdTime.innerHTML = 'Reduce Time: MAX';
                    officeTimer.innerHTML = '0.8s (MAX)';
                }
                break;
            } else {
                renameValue.placeholder = 'NOT ENOUGH MONEY';
                setTimeout(function () { renameValue.placeholder = '' }, 3000);
                break;
            }
        case 'office-automate':
            if (totalDollars >= prodStats.officeAutoUpgradeCost) {
                totalDollars -= prodStats.officeAutoUpgradeCost;
                money.innerHTML = `You have: $${totalDollars.toPrecision(5)}`;
                officeAuto.disabled = true;
                officeProdButton.disabled = true;
                officeAutoInterval = setInterval(officeAutomate, prodStats.officeTime * 1000);
                break;
            } else {
                renameValue.placeholder = 'NOT ENOUGH MONEY';
                setTimeout(function () { renameValue.placeholder = '' }, 3000);
                break;
            }
        case 'office-double':
            if (totalDollars >= prodStats.officeDoubleUpgradeCost) {
                totalDollars -= prodStats.officeDoubleUpgradeCost;
                money.innerHTML = `You have: $${totalDollars.toPrecision(5)}`;
                prodStats.officeDoubleUpgradeCost *= 2;
                officeDouble.innerHTML = `Double Production: $${prodStats.officeDoubleUpgradeCost}`;
                prodStats.officeMultiplier *= 2;
                officeAmt.innerHTML = `Office Chair: ${prodStats.officeAmount} ($${prodStats.officeValue} (x${prodStats.officeMultiplier}))`
                if (prodStats.officeMultiplier >= 4) {
                    prodStats.officeMultiplier = 4;
                    officeDouble.disabled = true;
                    officeDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
                break;
            } else {
                renameValue.placeholder = 'NOT ENOUGH MONEY';
                setTimeout(function () { renameValue.placeholder = '' }, 3000);
                break;
            }
        case 'leather-prod-time':
            if (totalDollars >= prodStats.leatherSpeedUpgradeCost) {
                totalDollars = (totalDollars - parseInt(prodStats.leatherSpeedUpgradeCost.toPrecision(5)));
                money.innerHTML = `You have: $${totalDollars.toPrecision(5)}`;
                prodStats.leatherTime /= 1.35;
                leatherTimer.innerHTML = `${prodStats.leatherTime.toPrecision(4)}s`;
                prodStats.leatherSpeedUpgradeCost = parseInt((prodStats.leatherSpeedUpgradeCost * 1.5).toPrecision(12));
                leatherProdTime.innerHTML = `Reduce Time: $${prodStats.leatherSpeedUpgradeCost}`;
                if (prodStats.leatherTime <= 1) {
                    prodStats.leatherTime = 1;
                    leatherProdTime.disabled = true;
                    leatherProdTime.innerHTML = 'Reduce Time: MAX';
                    leatherTimer.innerHTML = '1s (MAX)';
                }
                break;
            } else {
                renameValue.placeholder = 'NOT ENOUGH MONEY';
                setTimeout(function () { renameValue.placeholder = '' }, 3000);
                break;
            }
        case 'leather-automate':
            if (totalDollars >= prodStats.leatherAutoUpgradeCost) {
                totalDollars -= prodStats.leatherAutoUpgradeCost;
                money.innerHTML = `You have: $${totalDollars.toPrecision(5)}`;
                leatherAuto.disabled = true;
                leatherProdButton.disabled = true;
                leatherAutoInterval = setInterval(leatherAutomate, prodStats.leatherTime * 1000);
                break;
            } else {
                renameValue.placeholder = 'NOT ENOUGH MONEY';
                setTimeout(function () { renameValue.placeholder = '' }, 3000);
                break;
            }
        case 'leather-double':
            if (totalDollars >= prodStats.leatherDoubleUpgradeCost) {
                totalDollars -= prodStats.leatherDoubleUpgradeCost;
                money.innerHTML = `You have: $${totalDollars.toPrecision(5)}`;
                prodStats.leatherDoubleUpgradeCost *= 2;
                leatherDouble.innerHTML = `Double Production: $${prodStats.leatherDoubleUpgradeCost}`;
                prodStats.leatherMultiplier *= 2;
                leatherAmt.innerHTML = `Leather Chair: ${prodStats.leatherAmount} ($${prodStats.leatherValue} (x${prodStats.leatherMultiplier}))`
                if (prodStats.leatherMultiplier >= 4) {
                    prodStats.leatherMultiplier = 4;
                    leatherDouble.disabled = true;
                    leatherDouble.innerHTML = 'Double Production: MAX';
                    break;
                }
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
                money.innerHTML = `You have: $${totalDollars.toPrecision(5)}`;
                clothProdButton.disabled = false;
                clothAuto.disabled = false;
                clothProdTime.disabled = false;
                clothDouble.disabled = false;
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
                money.innerHTML = `You have: $${totalDollars.toPrecision(5)}`;
                officeProdButton.disabled = false;
                officeAuto.disabled = false;
                officeProdTime.disabled = false;
                officeDouble.disabled = false;
                officeAmt.style.opacity = 1;
                officeUnlock.style.display = 'none';
                break;
            } else {
                renameValue.placeholder = 'NOT ENOUGH MONEY';
                setTimeout(function () { renameValue.placeholder = '' }, 3000);
                break;
            }
        case 'leather-prod-timer leather-unlock':
            if (totalDollars >= prodStats.leatherUnlock) {
                totalDollars -= prodStats.leatherUnlock;
                money.innerHTML = `You have: $${totalDollars.toPrecision(5)}`;
                leatherProdButton.disabled = false;
                leatherAuto.disabled = false;
                leatherProdTime.disabled = false;
                leatherDouble.disabled = false;
                leatherAmt.style.opacity = 1;
                leatherUnlock.style.display = 'none';
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
leatherProdTime.addEventListener('click', upgrade);
leatherAuto.addEventListener('click', upgrade);
leatherProdButton.addEventListener('click', produce);
leatherUnlock.addEventListener('click', unlock);
woodDouble.addEventListener('click', upgrade);
clothDouble.addEventListener('click', upgrade);
officeDouble.addEventListener('click', upgrade);
leatherDouble.addEventListener('click', upgrade);