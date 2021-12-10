/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

//Examinons le code ci-dessous

// Nous assignons la valeur "18.04.1982" à la variable "birthday".
const birthday = '18.04.1982';

// Nous assignons le retour de valeur de la fonction "someCode"
// pour paramètre la variable "birthday", à la variable "age".
const age = someCode(birthday);

// Réponse à la question :
// Serait-il juste d'utiliser des majuscules pour birthday? Pour age? Ou même pour les deux ?
// Comme ci-dessous.
const BIRTHDAY = '18.04.1982'; // créer en majuscule ?
const AGE = someCode(BIRTHDAY); // créer en majuscule ?

// Par définition, "const" signifie que la variable est "read-only"/constante.
// C'est-à-dire, qu'elle ne peux pas être réassigné.

// Pour la variable "birthday" il pourrait être judicieux de la nommée de tel.

// Tandis que pour "age" cette dernière peut-être mouvante,
// due au fait que son assignment est un retour de valeur d'une fonction.
// Il ne serait peut-être pas judicieux de ce côté-là.

// La notation UPPERCASE est utilisé dans la plupart des cas,
// pour des constantes avec une certitude qu'elle ne puisse changer.

// Mais si nous prenions l'idée qu'une constante se doit de suivre la notation UPPERCASE,
// alors oui, pour les deux cas, ce serait judicieux.