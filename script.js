function openChat(employeeName) {
    document.getElementById('chatTitle').textContent = 'Chat con ' + employeeName;
    document.getElementById('chatPopup ').style.display = 'block';
}

function closeChat() {
    document.getElementById('chatPopup ').style.display = 'none';
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;

    if (message.trim() !== '') {
        const chatMessages = document.getElementById('chatMessages');
        const newMessage = document.createElement('p');
        newMessage.textContent = 'Cliente: ' + message;
        chatMessages.appendChild(newMessage);

        messageInput.value = '';
    }
}