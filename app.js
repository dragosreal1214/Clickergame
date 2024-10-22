document.addEventListener('DOMContentLoaded', function() {
    let gem = document.querySelector('.gem-cost');
    let clickerLevel = document.querySelector(".clicker-level");
    let clickerIncrease = document.querySelector(".clicker-increase");
    let parsedClickerIncrease = parseFloat(clickerIncrease ? clickerIncrease.innerHTML : 1);

    let gpc = 1;
    let passiveGpc = 1;

    let pickaxe = document.querySelector('.pickaxe-cost');
    let pickaxeLevel = document.querySelector(".pickaxe-level");
    let pickaxeIncrease = document.querySelector(".pickaxe-increase");
    let parsedPickaxeIncrease = parseFloat(pickaxeIncrease ? pickaxeIncrease.innerHTML : 4);

    let miner = document.querySelector('.miner-cost');
    let minerLevel = document.querySelector(".miner-level");
    let minerIncrease = document.querySelector(".miner-increase");
    let parsedMinerIncrease = parseFloat(minerIncrease ? minerIncrease.innerHTML : 8);

    let passiveMining = document.querySelector('.passiveMining-cost');
    let passiveMiningLevel = document.querySelector(".passiveMining-level");
    let passiveMiningIncrease = document.querySelector(".passiveMining-increase");
    let parsedpassiveMiningIncrease = parseFloat(passiveMiningIncrease ? passiveMiningIncrease.innerHTML : 0);

    // Function to increment gem
    function incrementGem() {
        if (gem) {
            gem.innerHTML = Math.round((parseFloat(gem.innerHTML)) + gpc);
        }
    }

    // Function to handle clicker purchase
    function buyClicker() {
        if (parseFloat(gem.innerHTML) >= parseFloat(clicker.innerHTML)) {
            gem.innerHTML -= clicker.innerHTML;
            clickerLevel.innerHTML = parseInt(clickerLevel.innerHTML) + 1; // Ensure it's a number
            parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.03).toFixed(2));
            clickerIncrease.innerHTML = parsedClickerIncrease;
            gpc += parsedClickerIncrease;
            clicker.innerHTML = Math.round(parseFloat(clicker.innerHTML) * 1.18);
        }
    }

    // Function to handle pickaxe purchase
    function buyPickaxe() {
        if (parseFloat(gem.innerHTML) >= parseFloat(pickaxe.innerHTML)) {
            gem.innerHTML -= pickaxe.innerHTML;
            pickaxeLevel.innerHTML = parseInt(pickaxeLevel.innerHTML) + 1; // Ensure it's a number
            parsedPickaxeIncrease = parseFloat((parsedPickaxeIncrease * 1.03).toFixed(2));
            pickaxeIncrease.innerHTML = parsedPickaxeIncrease;
            gpc += parsedPickaxeIncrease;
            pickaxe.innerHTML = Math.round(parseFloat(pickaxe.innerHTML) * 1.18);
        }
    }

    // Function to handle miner purchase
    function buyMiner() {
        if (parseFloat(gem.innerHTML) >= parseFloat(miner.innerHTML)) {
            gem.innerHTML -= miner.innerHTML;
            minerLevel.innerHTML = parseInt(minerLevel.innerHTML) + 1; // Ensure it's a number
            parsedMinerIncrease = parseFloat((parsedMinerIncrease * 1.03).toFixed(2));
            minerIncrease.innerHTML = parsedMinerIncrease;
            gpc += parsedMinerIncrease;
            miner.innerHTML = Math.round(parseFloat(miner.innerHTML) * 1.18);
        }
    }

    // Function to start passive gem increase
    function startPassiveGemIncrease() {
        setInterval(() => {
            if (gem) {
                gem.innerHTML = Math.round((parseFloat(gem.innerHTML)) + passiveGpc);
            }
        }, 1000);
    }

    // Function to upgrade passive gem increase
    function upgradePassiveGemIncrease() {
        if (parseFloat(gem.innerHTML) >= parseFloat(passiveMining.innerHTML)) {
            gem.innerHTML -= passiveMining.innerHTML;
            passiveGpc += 1;
            passiveMiningLevel.innerHTML = parseInt(passiveMiningLevel.innerHTML) + 1; // Ensure it's a number
        }
    }

    // Load the user's progress on page load
    loadUserProgress();

    // Save progress periodically
    setInterval(() => {
        const userId = getCookie("userId");
        if (userId) {
            saveUserProgress(userId);
        }
    }, 10000); // Save every 10 seconds

    // Start the passive gem increase
    startPassiveGemIncrease();
});
