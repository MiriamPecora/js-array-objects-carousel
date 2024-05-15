<!-- Consegna: -->
<!-- Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Analizzate l'html statico (è una base da cui partire) del carosello per comprenderne al meglio la struttura da manipolare.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce , l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay. -->

<!-- Risoluzione del problema: -->

-Creare un array di oggetti con  all'interno:
    -Url dell'immagine
    -Titolo
    -Descrizione
-MILESTONE 0 & 1
    -Tramite un ciclo for-each, creare degli elementi per ogni oggetto all'interno del DOM e popolare il carosello
    -Mettere in ascolto di un click i bottoni delle frecce per cambiare immagine
        -Al cambio dell'immagine, quell'attiva diventerà visibile insieme al proprio titolo e descrizione
MILESTONE 2
    -Tramite un'altra funzione, dare istruzioni che se ci si trova nel primo elemento dell'array, al click della freccia in alto verrà visualizzato l'ultimo e viceversa. In caso contrario seguire il normale ordine