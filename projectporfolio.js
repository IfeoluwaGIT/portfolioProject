let seconds = 0;

function updateCounter() {
    seconds++;
    document.getElementById('secondsCounter').textContent = seconds + ' seconds';
}

setInterval(updateCounter, 1000);

let pictureChange = document.getElementById("profilepic")
 
let changePic = function() {
    pictureChange.style.display = 'none';
}

pictureChange.addEventListener('click', changePic);

document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.querySelector('#toggle');
    toggleSwitch.addEventListener('change', switchTheme, false);

    function switchTheme() {
        if (toggleSwitch.checked) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }
});