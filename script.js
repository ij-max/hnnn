document.getElementById('yesButton').addEventListener('click', function() {
    displayMessage('You said YES! I\'m so happy! 😊');
});

document.getElementById('noButton').addEventListener('click', function() {
    displayMessage('Oh no! That\'s okay, I still appreciate you! 😊');
});

function displayMessage(message) {
    const messageDiv = document.getElementById('message');
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = message;
    messageDiv.classList.remove('hidden');
}
