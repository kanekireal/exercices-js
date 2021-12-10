/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

/*
=> 0
=> 1
=> 2
=> 3
=> 4
 */
for (let i = 0; i < 5; i++) alert( i );

/*
=> 0
=> 1
=> 2
=> 3
=> 4
 */
for (let i = 0; i < 5; ++i) alert( i );

// Que se soit en postfix ou prefix, les valeurs ne change pas.
// Le dernier argument de la boucle "for" est l'intervalle du premier argument.