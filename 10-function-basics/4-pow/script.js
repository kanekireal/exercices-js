/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

const pow = (x, n) => {
    let _x = x;
    for (let i = 0; i < n - 1; i++) x *= _x;
    return x;
}

let number = prompt('Nombre');
let efficient = prompt('Efficient');
alert(pow(number, efficient));