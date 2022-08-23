const selectionArray = [];

function showSelected(selectedPlayer) {
    const selected = document.getElementById('selected');
    selected.innerHTML = "";
    for (let i = 0; i < selectedPlayer.length; i++) {
        const selectedPlayerName = selectionArray[i].playerName;
        const li = document.createElement('li');
        li.innerText = selectedPlayerName;

        selected.appendChild(li);
    }
}
function selection(selected) {
    const playerName = selected.parentNode.children[0].innerText;
    const playerObj = {
        playerName: playerName,
    }
    selected.disabled = true;
    if (selectionArray.length < 5) {
        selectionArray.push(playerObj);
    }
    else {
        alert('you can not add more than 5 player')
        selected.disabled = false;
    }

    showSelected(selectionArray);

    document.getElementById('selected-player-number').innerText = selectionArray.length;




}
