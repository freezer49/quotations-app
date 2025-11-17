//Ajout d'un gestionnaire d'evenement avec addEventListener

const quoteForm = document.getElementById("quoteForm");
//Récupérez les valeurs des champs <input> dans les deux variables

quoteForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const text = document.getElementById("quoteInput").value;
  const author = document.getElementById("authorInput").value;

  //Afficher leurs valeurs et vérifier les récupération

  console.log("Citation :", text);
  console.log("Auteur :", author);

  addQuote(text, author);
});

//Affichage des citations saisies directement sur la page.

function addQuote(quote, author) {
  const quoteText = document.createElement("p");
  quoteText.classList.add("text");
  quoteText.textContent = quote;

  const authorText = document.createElement("p");
  authorText.classList.add("author");
  authorText.textContent = author;

  const quoteDiv = document.createElement("div");
  quoteDiv.appendChild(quoteText);
  quoteDiv.appendChild(authorText);

  const quoteList = document.getElementById("quote-list");
  quoteList.appendChild(quoteDiv);
}
