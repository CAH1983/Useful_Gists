const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

const xhrBtn = document.getElementById('xhr');
const fetchBtn = document.getElementById('fetch');
const jQueryBtn = document.getElementById('jquery');
const axiosBtn = document.getElementById('axios');

const quoteBox = document.getElementById('quote');


// XHR request
xhrBtn.addEventListener("click", function () {

    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function () {
        if (XHR.readyState == 4) {
            (XHR.status == 200) ? quoteBox.innerHTML = XHR.responseText: console.log('probleeeem')
        }
    }

    XHR.open('GET', url);
    XHR.send();

})

// Fetch method
fetchBtn.addEventListener("click", function () {
    fetch(url)
        .then(response => response.json())
        .then(data => quoteBox.innerHTML = data)
        .catch(err => console.log(err))
});

// jQuery method
jQueryBtn.addEventListener('click', function () {
    $.get(url)
        .done(data => quoteBox.innerHTML = data)

        .fail((err) =>
            console.log(err)
        )
})

// Axios method
axiosBtn.addEventListener('click', function () {
    axios.get(url)
        .then(res => quoteBox.innerHTML = res.data)
        .catch(err => console.log(err))
})

// async await with promises
const usernames = ["Colt", "Elie", "Tigarcia"];

async function hasMostFollowers() {
  const baseAPIURL = `https://api.github.com/users/`;

  let URLs = usernames.map((username) => $.getJSON(baseAPIURL + username));
  let results = await Promise.all(URLs);

  let mostFollowedGuy = results.sort((a, b) => a.followers < b.followers)[0];

  return `${mostFollowedGuy.name} has the most followers with ${mostFollowedGuy.followers}`;
}


hasMostFollowers(...usernames)
