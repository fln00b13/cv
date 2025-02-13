// Open the side menu
function openMenu() {
    document.getElementById("sideMenu").style.width = "250px";
}

// Close the side menu
function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
}

// Load the header content
function loadHeader() {
    fetch('../Header/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;

            // Ensure that the event listeners are attached after loading the header content
            document.querySelector('.menu-logo').addEventListener('click', openMenu);
            document.querySelector('.close-btn').addEventListener('click', closeMenu);
        })
        .catch(error => console.error('Error loading header:', error));
}

// Initialize header loading
window.onload = function() {
    loadHeader();
};