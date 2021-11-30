import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

function login(event) {
  event.preventDefault();

  const email = document.getElementById('floatingInput').value
  const password = document.getElementById('floatingPassword').value

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

document.getElementById('login-form').addEventListener('submit', login)