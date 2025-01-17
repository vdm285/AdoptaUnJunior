function showMessage() {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = "¡Estoy lista para aprender y crecer en el mundo de la programación! Gracias por considerarme.";

    messageDiv.className = 'message-popup';

    document.body.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('adoptMeButton');
    button.onclick = showMessage;
});

//Función modo oscuro
function toogleDarkMode (){
    const body = document.body;
    const elements = document.querySelectorAll('nav, h1, h2, h3, ul, p, button');

    body.classList.toggle('dark-mode');

    elements.forEach(element => {
        element.classList.toggle('dark-mode');
    });

    const button = document.getElementById('darkModeButton');
    if (body.classList.contains('dark-mode')) {
        button.textContent = "Modo Claro";
    } else {
        button.textContent = "Modo Oscuro";
    }
}

document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById('adoptMeButton');
    button.onclick = showMessage;

    const darkModeButton = document.getElementById('darkModeButton');
    darkModeButton.onclick = toogleDarkMode;
});

