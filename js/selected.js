
const selectionArray = [];

function showSelected(selectedPlayer) {

    const selected = document.getElementById('selected');
    selected.innerHTML = "";
    for (let i = 0; i < selectedPlayer.length; i++) {
        const selectedPlayerName = selectionArray[i].playerName;
        // console.log(selectedPlayerName)
        const li = document.createElement('li');
        li.innerText = selectedPlayerName;

        selected.appendChild(li);
    }
}
function selection(selected) {

    // get the player Name 

    const playerName = selected.parentNode.children[0].innerText;

    const playerObj = {
        playerName: playerName,
    }
    // console.log(playerObj);

    selectionArray.push(playerObj);
    // console.log(selectionArray.length);

    showSelected(selectionArray);
}