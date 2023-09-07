```javascript
let audiobookData = {};

function loadAudiobook() {
    fetch('/artemis_website/audio/audiobook.json')
        .then(response => response.json())
        .then(data => {
            audiobookData = data;
            displayAudiobook();
        })
        .catch(error => console.error('Error:', error));
}

function displayAudiobook() {
    const audiobookPlayer = document.getElementById('audiobookPlayer');
    audiobookPlayer.src = audiobookData.url;
    audiobookPlayer.title = audiobookData.title;
    audiobookPlayer.autoplay = false;
}

document.getElementById('dropdownMenu').addEventListener('change', function() {
    if (this.value === 'audiobook') {
        loadAudiobook();
    }
});
```