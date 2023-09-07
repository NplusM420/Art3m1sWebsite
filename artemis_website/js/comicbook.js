var comicbookData = [];

function loadComicbook() {
    fetch('artemis_website/comics/comicData.json')
        .then(response => response.json())
        .then(data => {
            comicbookData = data;
            displayComicbook();
        })
        .catch(error => console.error('Error:', error));
}

function displayComicbook() {
    var comicbookViewer = document.getElementById('comicbookViewer');
    comicbookViewer.innerHTML = '';

    comicbookData.forEach(comic => {
        var comicElement = document.createElement('div');
        var comicImage = document.createElement('img');
        comicImage.src = 'artemis_website/comics/' + comic.filename;
        comicElement.appendChild(comicImage);
        comicbookViewer.appendChild(comicElement);
    });
}

document.getElementById('dropdownMenu').addEventListener('change', function() {
    if (this.value === 'comicbook') {
        loadComicbook();
    }
});