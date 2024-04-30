function openPage(pageName, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = '#555';
}

// Get the element with id="defaultOpen" and click on it
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tablink').click();
});
function setTextSize(size) {
    var content = document.getElementById('main-content');
    if (size === 'small') {
        content.style.fontSize = 'small';
    } else if (size === 'medium') {
        content.style.fontSize = 'medium';
    } else if (size === 'large') {
        content.style.fontSize = 'large';
    }
}