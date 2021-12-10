/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/


//Transcription: 5 (Nombre) > 4 (Nombre)
const A = 5 > 4;
// (true)

//Transcription: 1 (Character : a) > 16 (Character : p)
const B = "apple" > "pineapple";
// (false)

//Transcription: 2 (Character : 2) > 1 (Character: 1)
const C = "2" > "12";
// (true)

//Transcription: 0 == 0
const D = undefined == null;
// (true)
//Transcription: (typeof undefined) == (typeof null) && 0 == 0
const E = undefined === null;
// (false)

const F = null == "\n0\n";
// (false)

const G = null === +"\n0\n";
// (false)