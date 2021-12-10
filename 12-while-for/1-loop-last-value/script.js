/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

let i = 3;

while (i) {
    alert(i--);
}

// Question : Quelle est la dernière valeur affichée par ce code ? Pourquoi ?
// La dernière valeur affichée est "1".
// Due au fait que i est décrémenté de façon postfix.

/*
Alert(3) | i = 2
Alert(2) | i = 1
Alert(1) | i = 0
 */

// Si la décrémentation était placée en prefix cela aurait donnée :

/*
Alert(2) | i = 2
Alert(1) | i = 1
Alert(0) | i = 0
 */
