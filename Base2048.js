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
                      //// créer un tableau avec les valeurs de la ligne
                        let val = $('[x="' + j + '"][y="' + i + '"]');
                        tab.push(parseInt(val[0].innerText));
                      }

                      //// checker si tableau de 0 -> on ne fait rien
                      let sum = tab.reduce((a,b) => a + b, 0);

                      //// enlever les 0
                      tab = tab.filter(item => item !== 0);

                      let newTab = [];

                      if (sum != 0) {
                        for (let k = 0; k < tab.length; k++) {
                          if (tab[k] == tab[k + 1]) {
                            newTab[k] = tab[k] * 2;
                            newTab[k + 1] = 0;
                            tab[k + 1] = 0
                          } else if (tab[k] == 0) {
                            newTab[k] = 0;
                          } else {
                            newTab[k] = tab[k];
                          }
                        }
                        newTab = newTab.filter(item => item !== 0);
                        let n = newTab.length;
                        for (let l = n; l < 4; l++) {
                          newTab[l] = 0;
                        }
                      } else {
                        newTab = [0, 0, 0, 0];
                      }

                      //// on affecte les valeur du tableau à la ligne
                      for (let z = 0; z < 4; z++) {
                        var elem = $('[x="' + z + '"][y="' + i + '"]');
                        elem.attr('nbr', newTab[z]); // on change la valeur de l'attr nbr
                        elem.text(newTab[z]);
                      }
                    }

                    console.log("Left");
                    break;
                case 'ArrowUp':
                    // insérer algo move up
                    for (let i = 0; i < 4; i++) {
                      //// récupérer les valeurs de la ligne
                      let tab = [];
                      for (let j = 0; j < 4; j++) {
                      //// créer un tableau avec les valeurs de la ligne
                        let val = $('[x="' + i + '"][y="' + j + '"]');
                        tab.push(parseInt(val[0].innerText));
                      }

                      //// checker si tableau de 0 -> on ne fait rien
                      let sum = tab.reduce((a,b) => a + b, 0);

                      //// enlever les 0
                      tab = tab.filter(item => item !== 0);

                      //// on regarde les cases 2 par 2: 0 1, 1 2, 2 3, 3 4
                      let newTab = [];

                      if (sum != 0) {
                        for (let k = 0; k < tab.length; k++) {
                          if (tab[k] == tab[k + 1]) {
                            newTab[k] = tab[k] * 2;
                            newTab[k + 1] = 0;
                            tab[k + 1] = 0
                          } else if (tab[k] == 0) {
                            newTab[k] = 0;
                          } else {
                            newTab[k] = tab[k];
                          }
                        }
                        newTab = newTab.filter(item => item !== 0);
                        let n = newTab.length;
                        for (let l = n; l < 4; l++) {
                          newTab[l] = 0;
                        }
                      } else {
                        newTab = [0, 0, 0, 0];
                      }

                      //// on affecte les valeur du tableau à la ligne
                      for (let z = 0; z < 4; z++) {
                        var elem = $('[x="' + i + '"][y="' + z + '"]');
                        elem.attr('nbr', newTab[z]); // on change la valeur de l'attr nbr
                        elem.text(newTab[z]);
                      }
                    }
                    console.log("Up");
                    break;
                case 'ArrowRight':
                    // insérer algo move right
                    for (let i = 0; i < 4; i++) {
                      //// récupérer les valeurs de la ligne
                      let tab = [];
                      for (let j = 0; j < 4; j++) {
                      //// créer un tableau avec les valeurs de la ligne
                        let val = $('[x="' + j + '"][y="' + i + '"]');
                        tab.push(parseInt(val[0].innerText));
                      }

                      //// checker si tableau de 0 -> on ne fait rien
                      let sum = tab.reduce((a,b) => a + b, 0);

                      //// enlever les 0
                      tab = tab.filter(item => item !== 0);
                      let newTab = [];
                      if (sum != 0) {
                        let p = tab.length;
                        newTab.length = p;
                        for (let k = (p - 1); k >= 0; k--) {
                          if (tab[k] == tab[k - 1]) {
                            newTab[k] = tab[k] * 2;
                            tab[k - 1] = 0
                          } else if (tab[k] == 0) {
                            newTab[k] = tab[k - 1];
                            tab[k - 1] = 0;
                          } else {
                            newTab[k] = tab[k];
                          }
                        }
                        newTab = newTab.filter(item => item !== 0);
                        let n = newTab.length;
                        for (let l = 0; l < 4 - n; l++) {
                          newTab.unshift(0);
                        }
                      } else {
                        newTab = [0, 0, 0, 0];
                      }

                      //// on affecte les valeur du tableau à la ligne
                      for (let z = 0; z < 4; z++) {
                        var elem = $('[x="' + z + '"][y="' + i + '"]');
                        elem.attr('nbr', newTab[z]); // on change la valeur de l'attr nbr
                        elem.text(newTab[z]);
                      }
                    }
                    console.log("Right");
                    break;
                case 'ArrowDown':
                    // insérer algo move down
                    for (let i = 0; i < 4; i++) {
                      //// récupérer les valeurs de la ligne
                      let tab = [];
                      for (let j = 0; j < 4; j++) {
                      //// créer un tableau avec les valeurs de la ligne
                        let val = $('[x="' + j + '"][y="' + i + '"]');
                        tab.push(parseInt(val[0].innerText));
                      }

                      //// checker si tableau de 0 -> on ne fait rien
                      let sum = tab.reduce((a,b) => a + b, 0);

                      //// enlever les 0
                      tab = tab.filter(item => item !== 0);
                      let newTab = [];
                      if (sum != 0) {
                        let p = tab.length;
                        newTab.length = p;
                        for (let k = (p - 1); k >= 0; k--) {
                          if (tab[k] == tab[k - 1]) {
                            newTab[k] = tab[k] * 2;
                            tab[k - 1] = 0
                          } else if (tab[k] == 0) {
                            newTab[k] = tab[k - 1];
                            tab[k - 1] = 0;
                          } else {
                            newTab[k] = tab[k];
                          }
                        }
                        newTab = newTab.filter(item => item !== 0);
                        let n = newTab.length;
                        for (let l = 0; l < 4 - n; l++) {
                          newTab.unshift(0);
                        }
                      } else {
                        newTab = [0, 0, 0, 0];
                      }

                      //// on affecte les valeur du tableau à la ligne
                      for (let z = 0; z < 4; z++) {
                        var elem = $('[x="' + z + '"][y="' + i + '"]');
                        elem.attr('nbr', newTab[z]); // on change la valeur de l'attr nbr
                        elem.text(newTab[z]);
                      }
                    }
                    console.log("Down");
                    break;
            }
            generateCell(1);
        });

        // début du code lancé
        $(this).append(generateMap()); // génération du tableau vide
        generateCell(2); // génération aléatoire de deux cases pleines (2 ou 4)
    }

})(jQuery); // fin du pluggin
