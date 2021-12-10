/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

const valideFirstName = (firstName) => Number(firstName) === 0 ? null : firstName;

let firstName;

do firstName = valideFirstName(prompt('Quel est votre prénom ?')) ?? 'Anonyme';
while (!confirm(`Êtes vous sur que votre prénom est "${firstName}"`));

alert(`Bonjour ${firstName} ☺️ !`);