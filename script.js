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
});
