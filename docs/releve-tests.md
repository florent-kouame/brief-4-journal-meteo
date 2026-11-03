# Relevé des tests

> Écrivez le résultat attendu avant d'essayer. Un écart n'est pas une faute : notez-le, corrigez, refaites le test.

**Calculs à la main** : refaites à la main les résultats de référence de `SUJET.md`, puis comparez avec votre programme. 
Moyenne de temperature = (27+28+26+29+27+30+28+26+29+30)/10 = 28°C
Température minimale = 26°C ; ID:"M03"; ID:"M08"
Température maximale = 30°C ; ID:"M06"; ID:"M10"
Cumul de pluie = (0+5+12+0+3+0+8+15+0+2) = 45 mm
Journées avec au moins 10 mm : "M03"(12 mm); "M08"(15 mm)

**Essais dans le menu** : un ajout valide (encore là après redémarrage), chaque règle refusée, une recherche introuvable, chaque tri, la synthèse, un choix inconnu.

| Action | Attendu | Obtenu | Testeur |
| --- | --- | --- | --- |
| Ajouter un relevé valide | Le relevé est enregistré |A tester| par moi-même |
| Ajouter un relevé avec une date invalide | Le programme refuse la date |A tester | moi-même |
| Ajouter un relevé avec une pluie négative | Le programme refuse la valeur |A tester | moi-même |
| Rechercher un relevé inexistant | Le programme indique qu'aucun résultat n'a été trouvé | A tester | moi-même|
| Trier les relevés par température | Les relevés sont classés par température croissante | A tester | moi-même |
| Afficher la synthèse météorologique | Moyenne : 28 °C ; minimum : 26 °C ; maximum : 30 °C ; pluie : 45 mm ; 2 journées pluvieuses | A tester | moi-même |

**Sur un autre poste** (`git clone`, `node app.js`, `npm test`, en suivant le README) : ✏️
