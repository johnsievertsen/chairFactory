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
let totalDollars = 0;
let totalChairs = 0;
clothProdButton.disabled = true;
clothAuto.disabled = true;
clothProdTime.disabled = true;

const prodStats = {
    woodTime: 3.25,
    woodROP: 0.2,
    woodValue: 1.5,
    woodAmount: 0,
    woodSpeedUpgradeCost: 5,
    woodAutoUpgradeCost: 120,
    clothTime: 10,
    clothROP: 0.067,
    clothValue: 6.5,
    clothAmount: 0,
    clothSpeedUpgradeCost: 35,
    clothAutoUpgradeCost: 550,
    clothUnlock: 25,
}

function produce(e) {
    switch (e.target.className) {
        case 'wood-produce':
            woodProdButton.disabled = true;
            setTimeout(() => {
                prodStats.woodAmount++;
                totalChairs++;
                totalDollars += prodStats.woodValue;
                money.innerHTML = `You have: ${totalDollars} dollars`;
                chairs.innerHTML = `You have produced: ${totalChairs} chairs`;
                woodAmt.innerHTML = `Wooden Chair: ${prodStats.woodAmount} ($1.50)`;
                woodProdButton.disabled = false;
            }, (prodStats.woodTime) * 1000);
            break;
        case 'cloth-produce':
            clothProdButton.disabled = true;
            setTimeout(() => {
                prodStats.clothAmount++;
                totalChairs++;
                totalDollars += prodStats.clothValue;
                money.innerHTML = `You have: ${totalDollars} dollars`;
                chairs.innerHTML = `You have produced: ${totalChairs} chairs`;
                clothAmt.innerHTML = `Cloth Chair: ${prodStats.clothAmount} ($6.50)`;
                clothProdButton.disabled = false;
            }, (prodStats.clothTime) * 1000);
            break;
    }
}

let woodAutoInterval = null;
let clothAutoInterval = null;

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

function upgrade(e) {
    switch (e.target.className) {
        case 'wood-prod-time':
            if (totalDollars >= prodStats.woodSpeedUpgradeCost) {
                totalDollars = parseInt((totalDollars - prodStats.woodSpeedUpgradeCost).toPrecision(3));
                money.innerHTML = `You have: ${totalDollars} dollars`;
                prodStats.woodTime /= 1.25;
                woodTimer.innerHTML = `${prodStats.woodTime.toPrecision(3)}s`;
                prodStats.woodSpeedUpgradeCost = parseInt((prodStats.woodSpeedUpgradeCost * 1.25).toPrecision(3));
                woodProdTime.innerHTML = `Reduce Time: $${prodStats.woodSpeedUpgradeCost}`;
                break;
            } else {
                console.log('not enough money');
                break;
            }
        case 'wood-automate':
            if (totalDollars >= prodStats.woodAutoUpgradeCost) {
                totalDollars -= prodStats.woodAutoUpgradeCost;
                money.innerHTML = `You have: ${totalDollars} dollars`;
                woodAuto.disabled = true;
                woodProdButton.disabled = true;
                woodAutoInterval = setInterval(woodAutomate, prodStats.woodTime * 1000);
                break;
            } else {
                console.log('not enough money');
                break;
            }
        case 'cloth-prod-time':
            if (totalDollars >= prodStats.clothSpeedUpgradeCost) {
                totalDollars = parseInt((totalDollars - prodStats.clothSpeedUpgradeCost).toPrecision(3));
                money.innerHTML = `You have: ${totalDollars} dollars`;
                prodStats.clothTime /= 1.25;
                clothTimer.innerHTML = `${prodStats.clothTime.toPrecision(3)}s`;
                prodStats.clothSpeedUpgradeCost = parseInt((prodStats.clothSpeedUpgradeCost * 1.4).toPrecision(3));
                clothProdTime.innerHTML = `Reduce Time: $${prodStats.clothSpeedUpgradeCost}`;
                break;
            } else {
                console.log('not enough money');
                break;
            }
        case 'cloth-automate':
            if (totalDollars >= prodStats.clothAutoUpgradeCost) {
                totalDollars -= prodStats.clothAutoUpgradeCost;
                money.innerHTML = `You have: ${totalDollars} dollars`;
                clothAuto.disabled = true;
                clothProdButton.disabled = true;
                clothAutoInterval = setInterval(clothAutomate, prodStats.clothTime * 1000);
                break;
            } else {
                console.log('not enough money');
                break;
            }
    }
}

function renameFactory() {
    if (!renameValue.value) {
        renameValue.value = 'ERROR: Please enter a name';
        return;
    }
    factoryName.innerHTML = renameValue.value;
}

function unlock(e) {
    switch (e.target.className) {
        case 'cloth-prod-timer cloth-unlock':
            if (totalDollars >= prodStats.clothUnlock) {
                totalDollars -= prodStats.clothUnlock;
                money.innerHTML = `You have: ${totalDollars} dollars`;
                clothProdButton.disabled = false;
                clothAuto.disabled = false;
                clothProdTime.disabled = false;
                clothAmt.style.opacity = 1;
                clothUnlock.style.display = 'none';
                break;
            } else {
                console.log('not enough money');
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