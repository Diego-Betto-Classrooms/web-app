# Step 02

Ci servono ora: 
- un file HTML da visualizzare
- un file con il codice CSS per lo stile
- un file JavaScript per eventuali fuzionalità



Possiamo utilizzare un [IDE](https://it.wikipedia.org/wiki/Integrated_development_environment) per gestire e sviluppare il nostro progetto.

[Visual Studio Code](https://code.visualstudio.com/) è un IDE gratuito estendibile e performante. Installiamolo e poi procediamo



Se abbiamo ancora il terminale aperto possiamo ora scrivere `code .` per aprire l'IDE nel percorso corrente (`.` indica la cartella corrente).
In alternativa possiamo aprire Visual Studio Code e aprire la cartella con il progetto.



Nella barra laterale di sinitra possiamo creare ora un nuovo file nella root del progetto e lo chiamiamo `index.html`



L'IDE riconosce l'estensione del file e si prepara ad assisterci nel editing. Ad esempio digitando `doc` ci propone una snippet di codice (grazie ad [emmet](https://emmet.io/)) per creare una pagina HTML base.
Ci basta premere il tasto `Tab` o `invio`.



Per il file CSS utilizzeremo un formato particolare: [`SCSS`](https://sass-lang.com)



Dentro i file SCSS possiamo sia scrivere codice CSS normale che nel formato SCSS che nel caso base ci permette di usare variabili e codice annidato.



Per esempio in css se vogliamo dare uno stile agli elementi `a` e `p` dentro un `div` con classe `wrapper` dobbiamo scrivere qualcosa di simile
```CSS
.wrapper a {color: red;}
.wrapper p {color: gray;}
```



Se a questo punto volessimo che lo stesso stile venisse applicato anche ad un `div` con classe `wrapper2` dovremmo scrivere
```CSS
.wrapper a, .wrapper2 a {color: red;}
.wrapper p, .wrapper2 p {color: gray;}
```
Rendendo il codice meno leggibile ed error-prone.



Con SCSS il codice invece risulterebbe inizialmente in questa forma 
```SCSS
.wrapper {
  a {color: red;}
  p {color: gray;}
}
```



Aggiungendo anche in questo caso la seconda classe il codice risulterebbe:
```SCSS
.wrapper,
.wrapper2 {
  a {color: red;}
  p {color: gray;}
}
``` 
Decisamente più leggibile e gestibile.



Il codice SCSS non può essere direttamente digerito dal browser, deve essere compilato. 
Gli script che abbiamo aggiunto servono a quello.
Criamo una cartella sulla root e chiamiamola `scss`.
Dentro ci creiamo un file `index.scss`.



Quando eseguiremo `npm run build` il file SCSS verrà compilato e inserito nella cartella `assets/css`.
Se eseguiamo `npm run start` questa compilazione avverrà in automatico dopo ogni salvataggio del file SCSS.



Ovviamente ora questo file va integrato nel nostro file HTML. 
Per fare questo inseriamo un tag `link` dentro la sezione `head` come [qui](https://github.com/Diego-Betto-Classrooms/web-app/blob/step-03/index.html#L7)



Dentro questo file possiamo inserire le varie regole come ad esempio
```CSS
body {
  color: red;
}
```
Eseguendo `npm run start` e andando all'indirizzo [http://localhost:3000](http://localhost:3000) vedremo la pagina HTML e l'eventuale testo contenuto in rosso.



Per integrare `boootstrap` dobbiamo importare il suo stile. 
Lo possiamo fare inserendo all'inizio del file `index.scss` la seguente riga
```CSS
@import "bootstrap/scss/bootstrap";
```
come al seguente [link](https://github.com/Diego-Betto-Classrooms/web-app/blob/step-03/scss/index.scss#L1)



Questo istruisce i nostri script di build a cercare dentro la cartella `node_modules` una percorso `bootstrap/scss/bootstrap` e caricarlo.
Effettivamente quello che verrà caricato sarà il file
`node_modules/bootstrap/scss/bootstrap.scss`.
Rilanciamo la build e bootstrap verrà integrato.



Come possiamo testarlo?
Inseriamo un tag `button` dando una classe di Bootstrap
```HTML
<button class="btn btn-primary">Bottone di esempio</button><!-- bottone con stile di Bootstrap -->
<p>Paragrafo di esempio</p><!-- aggiunto per avere dei contenuti testuali da testare -->
```



Dovremmo vedere un buttone colorato e il testo in rosso.



In modo simile integriamo JavaScript di Bootstrap.
Creiamo una cartella `assets` e dentro una cartella `js`.
Lì creiamo un file `index.js`.



Questo file ovviamente va integrato nel nostro codice HTML con un tag `script` come nel [esempio](https://github.com/Diego-Betto-Classrooms/web-app/blob/step-03/index.html#L34)



Dentro possiamo inserire ad esempio l'importazione di codice JavaScript di Bootstrap per la visualizzazione delle modali
```JS
import "../../node_modules/bootstrap/js/dist/modal.js";
```



Vai allo [Step 03](/?file=step-03.md)