# STEP 1

Alla base del nostro progetto c'è la gestione di tutte le dipendenze e moduli tramite [npm](https://www.npmjs.com/), ovvero il gestore pacchetti vero e proprio, e [node](https://nodejs.org/it/), che ci permette di eseguire JavaScript sul nostro computer senza dover per forza di cose utilizzare un browser.
Installiamo [node](https://nodejs.org/it/).



Se installato correttamente, aprendo un terminale ed eseguendo <pre><code>node -v</code></pre> <pre><code>npm -v</code></pre> otterremo le versioni installate.



Creiamo una cartella dal terminale.
Ci possiamo spostare nelle cartelle con *cd nomecartella*, *dir* per visualizzare il contenuto, *mkdir nomecartella* per creare una cartella.



Creiamo una cartella ed entriamoci
<pre><code>mkdir website
cd website
</code></pre>



Inizializziamo il nostro progetto rispondendo alle varie domande (solitamente vanno bene i default)
<pre><code>npm init</code></pre>



A questo punto ci troviamo un file *package.json* che contiene le informazioni che abbiamo inserito.
Questo file serve per gestire dipendenze e script.



Il primo pacchetto che ci serve è *bootstrap*, installiamolo
<pre><code>npm install bootstrap</code></pre>



Troveremo una cartella *node_modules* con dentro il modulo richiesto.
Questa cartella conterrà tutti i vari moduli che installeremo.



Oltre a questa dipendenza installiamo anche quanto necessario per compilare il nostro progetto, lo useremo in seguito.
<pre><code>npm install node-sass autoprefixer nodemon npm-run-all postcss postcss-cli purgecss serve stylelint stylelint-config-twbs-bootstrap --save-dev</code></pre>



Quanto installiamo dei pacchetti con `npm install` o `npm i` se aggiungiamo `--save-dev` come nell'esempio precedente indichiamo che la dipendenza installata non serve direttamente ad esempio nel browser, ma serve a noi come strumento di compilazione.

Infatti le dipendenze sono presenti nel file `package.json` in due sezioni separate: 
- `dependencies`
- `devDependencies`



Quando installiamo un modulo, viene creato un file `package-lock.json` che contiene informazioni precise sulle versioni installate.



Nel file `package.json` troviamo anche una sezione `scripts`. In questa sezione possiamo definire tutti gli script/comandi da utilizzare nel nostro progetto, ad esempio per compilare, ottimizzare, ecc

Possiamo aggiungere ad esempio gli script che trovate [qui](https://github.com/Diego-Betto-Classrooms/web-app/blob/step-02/package.json#L9)



Gli script possono eseguire altri script. Ad esempio `build` esegue `css` che a sua volta esegue `css-compile` e `css-prefix`.

Per eseguirli possiamo lanciarli con `npm run` ad esempio
<pre><code>npm run start</code></pre>



Questo eseguirà due script in parallelo:
- `watch` che monitora modifiche a file html e css e in caso ricompila 
- `server` che lancia un piccolo serve per visualizzare il frontend in locale



Vai allo [Step 02](/?file=step-02.md)