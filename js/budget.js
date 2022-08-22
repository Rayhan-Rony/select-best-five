

document.getElementById('btn-calculate').addEventListener('click', function () {


    // get input field value 

    const perPlayerPrice = getInputFieldValueById('per-player-field')

    // console.log(inputFieldValue);

    // get text Element value 

    const getTextElementValueById = document.getElementById('player-expenses');
    const textElementValueString = getTextElementValueById.innerText;
    const textElementValue = parseInt(textElementValueString);
    console.log(textElementValue);

    // set the value in the total expenses 

    const playerExpenses = perPlayerPrice * 5;
    getTextElementValueById.innerText = playerExpenses;

    return playerExpenses;

})


document.getElementById('btn-total').addEventListener('click', function () {

    // get manager value 

    const managerSalary = getInputFieldValueById('manager-field');

    // get coach field value 
    const coachSalary = getInputFieldValueById('coach-field');

    // get input field value 

    const perPlayerPrice = getInputFieldValueById('per-player-field')

    // get the player playerExpenses 
    const getTextElementValueById = document.getElementById('player-expenses');
    const textElementValueString = getTextElementValueById.innerText;
    const textElementValue = parseInt(textElementValueString);
    console.log(textElementValue);
    // set the value in the player expenses 

    const playerExpenses = perPlayerPrice * 5;
    getTextElementValueById.innerText = playerExpenses;


    const total = managerSalary + coachSalary + playerExpenses;
    console.log(total);

    // set the value in total expenses 

    const totalCalculationValue = document.getElementById('total-expenses');
    const totalCalculationString = totalCalculationValue.innerText;
    const totalCalculation = parseInt(totalCalculationString);

    totalCalculationValue.innerText = total;
})