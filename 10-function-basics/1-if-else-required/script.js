/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Did parents allow you?');
    }
}

// Question : La fonction fonctionnera-t-elle différemment si else est supprimé ?
// Non

function _checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Did parents allow you?');
}

// Question : Existe-t-il une différence dans le comportement de ces deux variantes ?
// Oui et non.
// Oui, car nous n'avons pas besoin de dire "sinon" à la machine.
// Non, car le résultat sera le même.