
function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const DiceResults = document.getElementById("DiceResults");
    const DiceImages = document.getElementById("DiceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice;  i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png">`);

    }
   DiceResults.textContent = `Dice: ${values.join(' | ')}`;
   DiceImages.innerHTML = images.join(' ');
}