/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

// On sait que par convention :
// => "" vaut "0"
// => "null" vaut "0"
// => "true" vaut "1"
// => "false" vaut "0"
// => "\t" vaut 0 (Valeur sur le tableau Unicode")
// => "\n" vaut 0 (Valeur sur le tableau Unicode")
// => "undefined" vaux ... (immutable, non convertible, ... , très spécifique)

// Conclusion en fin de fichier ;)


// Dans ce cas si, les nombres présents seront
// converti en chaîne de caractère, du à l'opérande "+".
// Et se concat donc.
// Transcription : "" + "1" + "0"
const A = "" + 1 + 0;
// (10)

// Dans ce cas si, toutes autres valeurs non nombre
// seront converti en nombre du à l'opérande "-".
// Transcription : 0 - 1 + 0
const B = "" - 1 + 0;
// (-1)

// Dans ce cas si, les valeurs seront converties en nombre.
//(Voir ci-dessus les conventions)
// Transcription : 1 + 0
const C = true + false;
// (1)

// Dans ce cas si, toutes autres valeurs non nombre
// seront converti en nombre du à l'opérande "/".
// Transcription : 6 / 3
const D = 6 / "3";
// (2)

// Dans ce cas si, toutes autres valeurs non nombre
// seront converti en nombre du à l'opérande "*".
// Transcription : 2 * 3
const E = "2" * "3";
// (6)

// Dans ce cas si, les nombres présents seront
// converti en chaîne de caractère après leur opération, du à l'opérande "+".
// Et se concat donc.
// Transcription Step1 : (4 + 5) + "px"
// Transcription Step2 : 9 + "px"
// Transcription Step3 : "9" + "px"
const F = 4 + 5 + "px";
// (9px)

// Dans ce cas si, les nombres présents seront
// converti en chaîne de caractère, du à l'opérande "+".
// Transcription: "$" + "4" + "5"
// Et se concat donc.
const G = "$" + 4 + 5;
// ($45)

// Dans ce cas si, toutes autres valeurs non nombre
// seront converti en nombre du à l'opérande "-".
// Transcription : 4 - 2
const H = "4" - 2;
// (2)

// Dans ce cas si, toutes autres valeurs non nombre
// seront converti en nombre du à l'opérande "/".
// Transcription : NaN ("4px" ne pouvant pas être convertie en nombre)
const I = "4px" - 2;
// (NaN)

// Dans ce cas si, les nombres présents seront
// converti en chaîne de caractère, du à l'opérande "+".
// Transcription: "  -9  " + "5"
// Et se concat donc.
const J = "  -9  " + 5;
// (  -9  5)

// Dans ce cas si, toutes autres valeurs non nombre
// seront converti en nombre du à l'opérande "-".
// Transcription : 0 + 0 - 9 + 0 + 0 - 5
const K = "  -9  " - 5;
// (-14)

// Dans ce cas si, toutes autres valeurs non nombre
// seront converti en nombre du à l'opérande "-".
// Transcription : 0 + 1
const L = null + 1;
// (1)

// Cas spécifique.
const M = undefined + 1;
// (NaN)

// Dans ce cas si, toutes autres valeurs non nombre
// seront converti en nombre du à l'opérande "-".
// Transcription : 0 + 0 + 0 - 2
const N = " \t \n" - 2;
// (-2)



// On peut en conclure déjà, que la lecture s'effectue de gauche à droite.
// Que le choix de la conversion est du premier élément lu.

// Pour une conversion en chaîne de caractère (String), cette dernière peut-être reconvertie par la suite si elle
// rencontre tous autres opérandes que "+" (pour le string, l'opérande est une concatenation de plusieurs chaînes de caractère), elle sera reconvertie en nombre.
// (Si elle le peut bien sur sinon la reconversion emmènera à un retour "NaN" (Not A Number))
// À contrario, une conversion de nombre peut-être reconvertie si elle rencontre par la suite une chaîne de caractère de l'opérande "+",
// ce qui signifie que tous autres opérandes que "+" lors de cette reconversion emmènera a un retour "NaN" (Not A Number) si ce dernier ne peux être reconvertie.