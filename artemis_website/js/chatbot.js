// Load the chatbot
function loadChatbot() {
    const chatbotBox = document.getElementById('chatbotBox');
    chatbotBox.innerHTML = '<iframe src="https://some-chatbot-api.com" width="100%" height="500px"></iframe>';
}

// Listen for changes in the dropdown menu
document.getElementById('dropdownMenu').addEventListener('change', function(e) {
    const selectedOption = e.target.value;
    if (selectedOption === 'chatbot') {
        loadChatbot();
    }
});