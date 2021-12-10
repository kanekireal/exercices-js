/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

const valideAnswer = (answer) => Number(answer) === 0 ? null : answer;

let userAnswer;

do {
    userAnswer = valideAnswer(prompt('Quel est le nom "officiel" de JavaScript?')) ?? 'Je sais pas';
} while (!confirm(`Êtes vous certains que le nom "officiel" de JavaScript est "${userAnswer}" ?`));

if (userAnswer === "ECMAScript") alert('Parfaite réponse ! ❤️');
else if (userAnswer.toLowerCase() === "ECMAScript".toLowerCase()) alert('Tu y étais presque 😉 !\nSon vrai nom est "ECMAScript" ! 😌');
else alert('“La connaissance est toujours un butin.” - Maxime Gorki\n\nSon vrai nom est "ECMAScript" ! 😌"');