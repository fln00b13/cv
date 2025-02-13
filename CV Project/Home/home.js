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
    fetch('../Header/header.html')  // Fetch the header.html file
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;

            // Ensure the event listeners are added after loading the content
            document.querySelector('.menu-logo').addEventListener('click', openMenu);
            document.querySelector('.close-btn').addEventListener('click', closeMenu);
        })
        .catch(error => console.error('Error loading header:', error));
}

// Load the header when the page loads
window.onload = function() {
    loadHeader();
};