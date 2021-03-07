function searchGif(giphy) {
    giphy = document.getElementById('giphySearch').value;
    let gifImg = '';
    
    fetch("https://api.giphy.com/v1/gifs/search?api_key=ssCdjHoF9IkPIuo0ANcld5kooQnfiaw6&q=" + giphy + "&limit=5")
        .then(response => { if (response.status >= 200 && response.status < 300) {
            response.json().then(data => {
            console.log(data);
            for (i = 0; i < data.data.length; i++) {
                let gifSrc = data.data[i].images.preview_gif.url;
                gifImg += `<img class="gif-img" src="${gifSrc}">`;
            }
            document.getElementById('giphyResult').innerHTML = gifImg;})
        }
        })
        .catch(error => {
            error = new Error('Ошибка доступа');
            document.getElementById('error').innerHTML = error.message;
        });
}