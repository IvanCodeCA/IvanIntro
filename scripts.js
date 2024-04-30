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
function scrollToFooter() {
    document.querySelector('footer').scrollIntoView({ behavior: 'smooth' });
}
function applySmallText() {
    const content = document.querySelector('.main-content'); // Adjust the selector as needed
    content.classList.add('small-text');
    content.classList.remove('medium-text', 'large-text'); // Assuming you have these classes for other buttons
}

function applyMediumText() {
    const content = document.querySelector('.main-content');
    content.classList.add('medium-text');
    content.classList.remove('small-text', 'large-text');
}

function applyLargeText() {
    const content = document.querySelector('.main-content');
    content.classList.add('large-text');
    content.classList.remove('small-text', 'medium-text');
}
