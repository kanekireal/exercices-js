/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

const isPrimeNumber = (nbr) => {
    for (let i = 2; i < nbr; i++) if (nbr % i === 0) return false;
    return nbr > 1;
}

function primes(nbr) {
    let results = [];
    for (let i = 2; i < nbr; i++) isPrimeNumber(i) && results.push(i);
    return results;
}


alert(primes(prompt("Jusque quel nombre devrais-je vous donner les nombres premiers ?")))