/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

/*
i=0

> while(1 < 5) => alert(1) (Affiché)
> while(2 < 5) => alert(2) (Affiché)
> while(3 < 5) => alert(3) (Affiché)
> while(4 < 5) => alert(4) (Affiché)
> while(5 < 5) => alert(5)
 */
let i = 0;
while (++i < 5) alert(i);
// (1)
// (2)
// (3)
// (4)

alert('Nouvelle phase');

/*
i=0

> while(0 < 5) => alert(1) (Affiché)
> while(1 < 5) => alert(2) (Affiché)
> while(2 < 5) => alert(3) (Affiché)
> while(3 < 5) => alert(4) (Affiché)
> while(4 < 5) => alert(5) (Affiché)
> while(5 < 5) => alert(6)
 */
i = 0;
while (i++ < 5) alert(i);
// (1)
// (2)
// (3)
// (4)
// (5)