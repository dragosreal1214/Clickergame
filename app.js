let gem = document.querySelector('.gem-cost')

let clicker = document.querySelector('.clicker-cost')

let clickerLevel = document.querySelector(".clicker-level")
let clickerIncrease = document.querySelector(".clicker-increase")
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML)

let gpc = 1;
let passiveGpc = 1;

let pickaxe = document.querySelector('.pickaxe-cost')

let pickaxeLevel = document.querySelector(".pickaxe-level")
let pickaxeIncrease = document.querySelector(".pickaxe-increase")
let parsedPickaxeIncrease = parseFloat(pickaxeIncrease.innerHTML)

let miner = document.querySelector('.miner-cost')

let minerLevel = document.querySelector(".miner-level")
let minerIncrease = document.querySelector(".miner-increase")
let parsedMinerIncrease = parseFloat(minerIncrease.innerHTML)


let passiveMining = document.querySelector('.passiveMining-cost')

let passiveMiningLevel = document.querySelector(".passiveMining-level")
let passiveMiningIncrease = document.querySelector(".passiveMining-increase")
let parsedpassiveMiningIncrease = parseFloat(passiveMiningIncrease.innerHTML)

function incrementGem() {
    gem.innerHTML = Math.round((parseFloat(gem.innerHTML)) + gpc); //am creat o functie pentru a incrementa valoarea gem-ului
}
function anim() {
    document.getElementById("gem").className = "asii-image-animation";
}

function buyClicker() {
    if (parseFloat(gem.innerHTML) >= clicker.innerHTML) {
        gem.innerHTML -= clicker.innerHTML;

        clickerLevel.innerHTML++;

        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.03).toFixed(2))

        clickerIncrease.innerHTML = parsedClickerIncrease

        gpc += parsedClickerIncrease

        parseFloat(clicker) *= 1.18;

        clicker.innerHTML = math.round(clicker)
    }
}

function buyPickaxe() {
    if (parseFloat(gem.innerHTML) >= pickaxe.innerHTML) {
        gem.innerHTML -= pickaxe.innerHTML;

        pickaxeLevel.innerHTML++;

        parsedPickaxeIncrease = parseFloat((parsedPickaxeIncrease * 1.03).toFixed(2))

        pickaxeIncrease.innerHTML = parsedPickaxeIncrease

        gpc += parsedPickaxeIncrease

        parseFloat(pickaxe) *= 1.18;

        pickaxe.innerHTML = math.round(pickaxe)
    }
}

function buyMiner() {
    if (parseFloat(gem.innerHTML) >= miner.innerHTML) {
        gem.innerHTML -= miner.innerHTML;

        minerLevel.innerHTML++;

        parsedMinerIncrease = parseFloat((parsedMinerIncrease * 1.03).toFixed(2))

        minerIncrease.innerHTML = parsedMinerIncrease

        gpc += parsedMinerIncrease

        parseFloat(miner) *= 1.18;

        miner.innerHTML = math.round(miner)
    }
}

function startPassiveGemIncrease() {
    setInterval(() => {
        gem.innerHTML = Math.round((parseFloat(gem.innerHTML)) + passiveGpc);
    }, 1000);
}

// Function to upgrade passive gem increase
function upgradePassiveGemIncrease() {
    if (parseFloat(gem.innerHTML) >= passiveMining.innerHTML) {
        gem.innerHTML -= passiveMining.innerHTML;
        passiveGpc += 1; // Increase the passive gem increase value
        passiveMiningLevel.innerHTML++; // Increase the passive gem increase level
    }
}

// Start the passive gem increase when the script loads
startPassiveGemIncrease();