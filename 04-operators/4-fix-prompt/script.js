/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

// La fonction "prompt" prends pour paramètres,
// 1 => "message" de type String
// 2 =>"_default" de type String
// Le retour de valeur de cette fonction est une chaîne de caractère (String).

// Pour être cohérent avec la fonction, je remplacerais les nombres par des chaînes de caractères.

let a = prompt("First number?", "1");
let b = prompt("Second number?", "2");

// Le suffit + devant les variables est une abréviation de la conversion en nombre.
// Number(variable) => +variable
// Je convertie mes variables "a" et "b" en nombre pour
// fixer le problème de concaténation de chaine de caractère et devenir une opération mathématique.
alert(+a + +b);