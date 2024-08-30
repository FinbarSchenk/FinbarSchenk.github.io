// JavaScript-Funktion zum Initialisieren der Standardansicht
function initializeDefaultView() {
    // Verstecke die Inhalte von vita und contact
    const vitaSection = document.querySelector('.vita');
    const contactSection = document.querySelector('.contact');

    if (vitaSection) {
        vitaSection.style.display = 'none';
    }

    if (contactSection) {
        contactSection.style.display = 'none';
    }

    // Zeige den Inhalt von start an (standardmäßig ausgewählt)
    const startSection = document.querySelector('.start');
    if (startSection) {
        startSection.style.display = 'block';
    }
}

// JavaScript-Funktion zum Austauschen des Inhalts basierend auf der ausgewählten Klasse
function changeContent(className) {
    // Verstecke alle Abschnitte
    const sections = document.querySelectorAll('.start, .vita, .contact');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Zeige den ausgewählten Abschnitt basierend auf der übergebenen Klasse an
    const selectedSection = document.querySelector(`.${className}`);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Event-Listener für Klickereignisse auf die Schaltflächen
document.addEventListener('DOMContentLoaded', () => {
    // Initialisiere die Standardansicht
    initializeDefaultView();

    // Finde die Schaltflächen mit den entsprechenden IDs
    const startBtn = document.getElementById('start');
    const vitaBtn = document.getElementById('vita');
    const contactBtn = document.getElementById('contact');

    // Füge Klickereignis-Handler hinzu, um den Inhalt zu ändern
    startBtn.addEventListener('click', () => {
        changeContent('start');
    });

    vitaBtn.addEventListener('click', () => {
        changeContent('vita');
    });

    contactBtn.addEventListener('click', () => {
        changeContent('contact');
    });
});

// Function to show a specific popup
function showPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'flex';
}

// Function to close all popups
function closePopups() {
    const popups = document.querySelectorAll('.popup-overlay');
    popups.forEach(popup => {
        popup.style.display = 'none';
    });
}

// Event listeners for buttons
const buttons = document.querySelectorAll('.popupButton');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const popupId = button.getAttribute('data-popup');
        showPopup(popupId);
    });
});

// Event listeners for closing the popups by clicking outside the image
const popups = document.querySelectorAll('.popup-overlay');
popups.forEach(popup => {
    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            closePopups();
        }
    });
});

