//your JS code here. If required.
document.getElementById('openModal').onclick = function() {
    document.getElementById('myModal').style.display = "block";
};

document.querySelector('.close-modal').onclick = function() {
    document.getElementById('myModal').style.display = "none";
};

window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = "none";
    }
};
