

document.getElementById('btn-calculate').addEventListener('click', function () {

    const perPlayerPrice = getInputFieldValueById('per-player-field')
    const previousPlayerExpenses = getTextElementValueById('player-expenses')
    const playerExpenses = perPlayerPrice * 5;
    setTextElementValueById('player-expenses', playerExpenses)
})


document.getElementById('btn-total').addEventListener('click', function () {
    const managerSalary = getInputFieldValueById('manager-field');
    const coachSalary = getInputFieldValueById('coach-field');
    const playerExpensesTotal = getTextElementValueById('player-expenses')
    const total = managerSalary + coachSalary + playerExpensesTotal;
    const totalCalculation = getTextElementValueById('total-expenses')
    setTextElementValueById('total-expenses', total);

})