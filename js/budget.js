

document.getElementById('btn-calculate').addEventListener('click', function () {


    // get input field value 

    const getInputFieldById = document.getElementById('per-player-field');
    const inputFieldValueString = getInputFieldById.value;
    const inputFieldValue = parseInt(inputFieldValueString);
    console.log(inputFieldValue);

    // get text Element value 

    const getTextElementValueById = document.getElementById('player-expenses');
    const textElementValueString = getTextElementValueById.innerText;
    const textElementValue = parseInt(textElementValueString);
    console.log(textElementValue);

    // set the value in the total expenses 

    const playerExpenses = inputFieldValue * 5;
    getTextElementValueById.innerText = playerExpenses;
})