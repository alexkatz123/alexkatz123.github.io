// Replace with your own YouTube Data API key
const API_KEY = 'AIzaSyAKiHjfMES9KP8QdfzhJ9KzIQbflW2VVm4';

function searchYouTube() {
    const query = document.getElementById('searchQuery').value;
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    // Set the number of results you want to display (50 in this example)
    const maxResults = 25;

    // Make an API request to search for videos with the maxResults parameter
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&q=${query}&maxResults=${maxResults}`, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        const videos = data.items;

        videos.forEach(video => {
            const videoTitle = video.snippet.title;
            const videoId = video.id.videoId;

            const videoContainer = document.createElement('div');
            videoContainer.innerHTML = `<h2>${videoTitle}</h2><iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;

            searchResults.appendChild(videoContainer);
        });
    })
    .catch(error => console.error(error));
}
