import "bootstrap/dist/js/bootstrap.bundle.min";

function login(event) {
  event.preventDefault();

  const email = document.getElementById('floatingInput').value
  const password = document.getElementById('floatingPassword').value

  fetch('http://localhost:3000/api/login', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  }).then(function(data){
    return data.json()
  }).then(function(data){
    if(data.response === 'ok') {
      location.href='/home.html'
    } else {
      alert('Errore login, riprova')
    }
  });
}

const loginForm = document.getElementById('login-form');
if(loginForm){
  loginForm.addEventListener('submit', login)
}

/** NEWS */
function renderNews() {
  fetch('http://localhost:3000/api/news', {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function(data){
    return data.json()
  }).then(function(data){
    const newsContainer = document.getElementById('news-container')
    if(newsContainer && data) {
      const htmlNews = [];
      newsContainer.innerHTML = '';

      data.forEach(function(singleNews){
        const newsCol = document.createElement('div');
        newsCol.className = 'col';

        const newsCard = document.createElement('div');
        newsCard.className = 'card shadow-sm';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const img = document.createElement('img');
        img.className = "bd-placeholder-img card-img-top img-fluid";
        img.width = "100%";
        img.height = "225";
        img.src = singleNews.image;
        img.loading = 'lazy'

        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = singleNews.title;
        
        const text = document.createElement('p');
        text.className = 'card-text';
        text.textContent = singleNews.text;

        cardBody.append(title, text);
        newsCard.append(img, cardBody);
        newsCol.appendChild(newsCard);

        newsContainer.appendChild(newsCol) 
      })
    }
  })
}

function documentReady(callback){
  // documento già renderizzato
  if (document.readyState!='loading') callback();
  // browser moderni supportano 'addEventListener'
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
  // IE <= 8
  else document.attachEvent('onreadystatechange', function(){
      if (document.readyState=='complete') callback();
  });
}

documentReady(renderNews)