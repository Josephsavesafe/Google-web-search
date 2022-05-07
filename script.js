let query = document.querySelector('.query');
let searchButton = document.querySelector('.searchButton');

searchButton.onclick = function () {
    let url = 'https://www.google.co.th/search?q=' + query.value;
    window.open(url, '_self');
}