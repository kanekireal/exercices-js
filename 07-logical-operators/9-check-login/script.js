/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

const cancelled = () => alert('Annulé')
const valideAnswer = (answer) => Number(answer) === 0 ? null : answer;

let user = valideAnswer(prompt("Qui est là?"));

if (user != null && user === "Admin") {

    let password = valideAnswer(prompt("Mot de passe?"));
    if (password != null && password === "TheMaster") alert('Bienvenue!');
    else if (password != null && password !== "TheMaster") alert('Mauvais mot de passe.')
    else cancelled()

} else if (user != null && user !== "Admin") alert('Partez inconnu(e).');
else cancelled();