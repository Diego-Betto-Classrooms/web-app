import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

function login(event) {
  event.preventDefault();

  // const email = document.getElementById('floatingInput').value
  const email = jQuery('#floatingInput').val()
  // const password = document.getElementById('floatingPassword').value
  const password = jQuery('#floatingPassword').val() 

  fetch('http://localhost:5000/api/login', {
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

/*const loginForm = document.getElementById('login-form');
if(loginForm){
  loginForm.addEventListener('submit', login)
}*/
/*
const loginForm = jQuery('#login-form');
if(loginForm) {
  loginForm.on('submit', login)
}*/

jQuery('#login-form').on('submit', login)

/** NEWS */
function renderNews() {
  fetch('http://localhost:5000/api/news', {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function(data){
    return data.json()
  }).then(function(data){
    // const newsContainer = document.getElementById('news-container')
    const newsContainer = jQuery('#news-container');
    
    if(newsContainer && data) {
      const htmlNews = [];
      // newsContainer.innerHTML = '';
      newsContainer.html('');

      data.forEach(function(singleNews){
        // const newsCol = document.createElement('div');
        const newsCol = jQuery('<div />')
        // newsCol.className = 'col';
        newsCol.addClass('col')

        // const newsCard = document.createElement('div');
        const newsCard = jQuery('<div />');
        // newsCard.className = 'card shadow-sm';
        newsCard.addClass('card shadow-sm');

        // const cardBody = document.createElement('div');
        const cardBody = jQuery('<div />');
        // cardBody.className = 'card-body';
        cardBody.addClass('card-body');

        // const img = document.createElement('img');
        const img = jQuery('<img />');
        // img.className = "bd-placeholder-img card-img-top img-fluid";
        img.addClass("bd-placeholder-img card-img-top img-fluid");
        
        img.attr('width', "100%");
        img.attr('height', "225");
        img.attr('src', singleNews.image);
        img.attr('loading', 'lazy');

        // const title = document.createElement('h5');
        const title = jQuery('<h5 />');
        // title.className = 'card-title';
        title.addClass('card-title');
        // title.textContent = singleNews.title;
        title.text(singleNews.title);
        
        // const text = document.createElement('p');
        const text = jQuery('<p />');
        // text.className = 'card-text';
        text.addClass('card-text');
        // text.textContent = singleNews.text;
        text.text(singleNews.text);

        cardBody.append(title, text);
        newsCard.append(img, cardBody);
        newsCol.append(newsCard);

        newsContainer.append(newsCol) 
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