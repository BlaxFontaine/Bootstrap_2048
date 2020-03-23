(function($) // début du pluggin
{
    $.fn.game2048 = function() //function game2048 du pluggin
    {
        // génération du tableau (table, tr, td) vide (rempli de zéros)
        function generateMap()
        {
            let table = $('<table></table>');
            for (let y = 0; y < 4; y++)
            {
                let line = $('<tr></tr>');
                for (let x = 0; x < 4; x++)
                {
                    let cell = $('<td>0</td>').attr('x', x).attr('y', y).attr('nbr', 0);
                    line.append(cell);
                }
                table.append(line);
            }
            return table;
        }

        // génération d'un certain nombre de cases (argument cases) aléatoirement placées sur les cases d'attribut 'nbr=0'
        function generateCell(cells)
        {
            for (let i = 0; i < cells; i++)
            {
                let empty = false;

                while (empty === false) // tant que la case récupéré aléatoirement n'est pas vide
                {
                    let x = Math.floor((Math.random() * 4)); // retourne un entier entre 0 et 3
                    let y = Math.floor((Math.random() * 4));
                    var elem = $('[x="' + x + '"][y="' + y + '"][nbr=0]');

                    if (elem[0])
                        empty = true;
                }

                let value =  2 * (Math.floor((Math.random() * 2) + 1)); // retourne (1 ou 2)*2 donc 2 ou 4
                if (value === 4 && Math.random() > 0.5) // proba de 0.5 d'avoir un 4 ou un 2
                    value = 2;


                elem.attr('nbr', value); // on change la valeur de l'attr nbr
                elem.text(value); // on change le text de la case
            }
        }

        // fonction de gestion des évenements (appuie de touches)
        $('html').keydown(function(event) {
            switch (event['key']) {
                case 'ArrowLeft':
                    // insérer algo move left
                    // faire une boucle sur chacune des ligne i=0 i<4
                    for (let i = 0; i < 4; i++) {
                      //// récupérer les valeurs de la ligne
                      let tab = [];
                      for (let j = 0; j < 4; j++) {
                      //// créer un tableau avec les valeurs de la ligne [0,0,0,0]
                        let val = $('[x="' + j + '"][y="' + i + '"]');
                        // console.log(val[0].innerText);
                        tab.push(parseInt(val[0].innerText));
                      }

                      console.log(tab);
                      //// checker si tableau de 0 -> on ne fait rien
                      //// on regarde les cases 2 par 2: 0 1, 1 2, 2 3, 3 4
                      //// si une paire est égale, la 1ère valeur est doublée et la 2ème égale à 0
                      //// à la fin s'il y a des 0, on les met à la fin et les autres au début
                      //// on affecte les valeur du tableau à la ligne

                    }

                    //// vérifier si la ligne est vide
                    //// si oui -> on ne fait rien
                    //// si non:
                    ////// vérifier si la première case de la ligne est vide
                    ////// si oui -> la première case non vide prend sa place
                    //////// ensuite -> la prochaine case non vide se colle à celle-ci
                    //////// si elles sont du même chiffre -> on multiplie la 1ère case par deux et on supprime la 2ème
                    console.log("Left");
                    break;
                case 'ArrowUp':
                    // insérer algo move up
                    console.log("Up");
                    break;
                case 'ArrowRight':
                    // insérer algo move right
                    console.log("Right");
                    break;
                case 'ArrowDown':
                    // insérer algo move down
                    console.log("Down");
                    break;
            }
        });

        // début du code lancé
        $(this).append(generateMap()); // génération du tableau vide
        generateCell(2); // génération aléatoire de deux cases pleines (2 ou 4)
    }

})(jQuery); // fin du pluggin
