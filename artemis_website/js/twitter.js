```javascript
let tweets = [];

const loadTweets = () => {
    fetch('artemis_website/tweets/')
        .then(response => response.json())
        .then(data => {
            tweets = data;
            updateTweets();
        })
        .catch(error => console.error('Error:', error));
};

const updateTweets = () => {
    const tweetsSection = document.getElementById('tweetsSection');
    tweetsSection.innerHTML = '';

    tweets.forEach(tweet => {
        const tweetElement = document.createElement('p');
        tweetElement.textContent = tweet.text;
        tweetsSection.appendChild(tweetElement);
    });
};

loadTweets();
```