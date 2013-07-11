/**
 * Created By: Adrienne Cabouet
 * Date: 7/4/13
 * Time: 6:31 PM
 */
window.onload = init;
function init() {
    var button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
    loadPlaylist();
}

function handleButtonClick() {
    var textInput = document.getElementById("songTextInput");
    var songName = textInput.value;
    if (songName !== "") {
        var li = document.createElement("li");
        li.innerHTML = songName;

        var ul = document.getElementById("playlist");
        ul.appendChild(li);
        save(songName);
    } else {
        alert("No song was entered.");
    }
}
