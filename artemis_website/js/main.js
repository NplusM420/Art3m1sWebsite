let selectedOption = "";

document.getElementById('dropdownMenu').addEventListener('change', function() {
  selectedOption = this.value;
  changeOption(selectedOption);
});

function changeOption(option) {
  switch(option) {
    case 'chatbot':
      loadChatbot();
      break;
    case 'audiobook':
      loadAudiobook();
      break;
    case 'comicbook':
      loadComicbook();
      break;
    default:
      console.log('Invalid option');
  }
}

function loadTweets() {
  fetch('artemis_website/tweets/')
    .then(response => response.json())
    .then(data => {
      let tweetsSection = document.getElementById('tweetsSection');
      tweetsSection.innerHTML = '';
      data.tweets.forEach(tweet => {
        let tweetElement = document.createElement('p');
        tweetElement.textContent = tweet;
        tweetsSection.appendChild(tweetElement);
      });
    });
}

function loadChatbot() {
  let script = document.createElement('script');
  script.src = 'artemis_website/js/chatbot.js';
  document.body.appendChild(script);
}

function loadAudiobook() {
  let script = document.createElement('script');
  script.src = 'artemis_website/js/audiobook.js';
  document.body.appendChild(script);
}

function loadComicbook() {
  let script = document.createElement('script');
  script.src = 'artemis_website/js/comicbook.js';
  document.body.appendChild(script);
}

window.onload = function() {
  loadTweets();
  changeOption('chatbot');
}