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
let totalDollars = 0;
let totalChairs = 0;

const prodStats = {
    woodTime: 5,
    woodROP: 0.2,
    woodValue: 1,
    woodAmount: 0,
    woodSpeedUpgradeCost: 15,
    woodAutoUpgradeCost: 120,
    clothTime: 15,
    clothROP: 0.067,
    clothValue: 5,
    clothAmount: 0,
    clothSpeedUpgradeCost: 45,
    clothAutoUpgradeCost: 550,
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
                woodAmt.innerHTML = `Wooden Chair: ${prodStats.woodAmount} ($1)`;
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
                clothAmt.innerHTML = `Cloth Chair: ${prodStats.clothAmount} ($5)`;
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
                totalDollars -= prodStats.woodSpeedUpgradeCost;
                money.innerHTML = `You have: ${totalDollars} dollars`;
                prodStats.woodTime /= 1.25;
                woodTimer.innerHTML = `${prodStats.woodTime.toPrecision(3)}s`;
                prodStats.woodSpeedUpgradeCost += 10;
                woodProdTime.innerHTML = `Reduce Time: $${prodStats.woodSpeedUpgradeCost}`;
                break;
            } else {
                console.log('not enough money');
                break;
            }
        case 'wood-automate':
            if (totalDollars >= prodStats.woodAutoUpgradeCost) {
                totalDollars -= prodStats.woodAutoUpgradeCost;
                woodAuto.disabled = true;
                woodAutoInterval = setInterval(woodAutomate, prodStats.woodTime * 1000);
                break;
            } else {
                console.log('not enough money');
                break;
            }
        case 'cloth-prod-time':
            if (totalDollars >= prodStats.clothSpeedUpgradeCost) {
                totalDollars -= prodStats.clothSpeedUpgradeCost;
                money.innerHTML = `You have: ${totalDollars} dollars`;
                prodStats.clothTime /= 1.25;
                clothTimer.innerHTML = `${prodStats.clothTime.toPrecision(3)}s`;
                prodStats.clothSpeedUpgradeCost += 25;
                clothProdTime.innerHTML = `Reduce Time: $${prodStats.clothSpeedUpgradeCost}`;
                break;
            } else {
                console.log('not enough money');
                break;
            }
        case 'cloth-automate':
            if (totalDollars >= prodStats.clothAutoUpgradeCost) {
                totalDollars -= prodStats.clothAutoUpgradeCost;
                clothAuto.disabled = true;
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

woodProdTime.addEventListener('click', upgrade);
woodAuto.addEventListener('click', upgrade);
clothProdTime.addEventListener('click', upgrade);
clothAuto.addEventListener('click', upgrade);
renameButton.addEventListener('click', renameFactory);
woodProdButton.addEventListener('click', produce);
clothProdButton.addEventListener('click', produce);