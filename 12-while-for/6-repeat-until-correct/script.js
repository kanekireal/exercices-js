/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

const valideAnswer = (answer) => Number(answer) === 0 ? null : Number(answer);

let answer;

do answer = valideAnswer(prompt('Entrer un nombre supérieur à 100.'))
while (isNaN(answer) || (answer != null && answer <= 100));

alert(answer == null ? 'Annulé' : `Merci. Votre nombre est ${answer}`);