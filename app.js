// Journal météorologique de la ferme — point d'entrée : le menu.
// À vous d'écrire tout le menu : accueil, chargement des données, menu affiché avant chaque choix,
// actions, sortie et gestion des erreurs. Comportement et textes imposés : fiches/3-ajouter-lister.md.
// Lancer : node app.js
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { ajouterReleve, formaterReleve, listerReleves, trouverParId } from './src/registre.js';
import { SEUIL_JOUR_PLUVIEUX, joursPluvieux, trierParPluie, trierParTemperature, trouverParDate } from './src/recherche.js';
import { cumulPluie, moyenneTemperature, temperatureMinMax } from './src/synthese.js';
import { trierParTemperatureDecroissante, journeeLaPlusChaude,supprimerReleve,modifierReleve } from './src/bonus.js';

const FICHIER_DONNEES = 'donnees/releves.json';

async function main() {
  ouvrirSaisie();
  console.log('==================================================');
  console.log('   JOURNAL MÉTÉOROLOGIQUE DE LA FERME');
  console.log('   Suivi agroclimatique de la ferme pédagogique');
  console.log('==================================================');

  let releves = [];
  try {
    releves = await chargerJson(FICHIER_DONNEES);
    console.log(releves.length + ' relevé(s) chargé(s).');
  } catch (erreur) {
    console.log('Impossible de lire les données : ' + erreur.message);
    //releves = [];
  }
  let continuer = true;

  while (continuer) {

    console.log('\n---------------- MENU ----------------');
    console.log('1. Ajouter un relevé');
    console.log('2. Lister les relevés');
    console.log('3. Rechercher un relevé');
    console.log('4. Trier les relevés');
    console.log('5. Synthèse de la série');
    console.log('6. Supprimer un relevé');
    console.log('7. Modifier un relevé');
    console.log('0. Quitter');

    const choix = await demander('Votre choix : ');
    if (choix === null || choix === '0') {
      console.log('Au revoir !');
      continuer = false;
      break;
    }

    try {
      switch (choix) {
        case '1': {
          console.log('--- Ajouter un relevé ---');
          const id = await demander('Identifiant : ');
          if (id === null) break;
          const date = await demander('Date (AAAA-MM-JJ) : ');
          if (date === null) break;
          const temperatureC = await demander('Température en °C : ');
          if (temperatureC === null) break;
          const pluieMm = await demander('Pluie en mm : ');
          if (pluieMm === null) break;
          const humiditeAirPct = await demander("Humidité de l'air en % : ");
          if (humiditeAirPct === null) break;
          const saisie = {
            id: id.toUpperCase(),
            date: date,
            temperatureC: temperatureC,
            pluieMm: pluieMm,
            humiditeAirPct: humiditeAirPct
          };
          const erreurs = ajouterReleve(releves, saisie);
          if (erreurs.length === 0) {
            await enregistrerJson(FICHIER_DONNEES, releves);
            console.log('Relevé ajouté avec succès.');
          } else {
            console.log('Relevé refusé :');
            for (const erreur of erreurs) {
              console.log('- ' + erreur);
            }
          }
          break;
        }
        case '2': {
          console.log('--- Liste des relevés ---');
          console.log(listerReleves(releves));
          break;
        }
        case '3': {
          console.log('--- Rechercher ---');
          console.log('1. Par identifiant');
          console.log('2. Par date');
          console.log('3. Journées pluvieuses');
          const sousChoix = await demander('Votre choix : ');
          if (sousChoix === null) break;
          switch (sousChoix) {
            case '1': {
              const id = await demander('Identifiant : ');
              if (id === null) break;

              const resultat = trouverParId(releves, id.toUpperCase());

              if (resultat) {
                console.log(formaterReleve(resultat));
              } else {
                console.log('Relevé introuvable.');
              }

              break;
            }

            case '2': {
              const date = await demander('Date : ');
              if (date === null) break;

              const resultat = trouverParDate(releves, date);

              if (resultat) {
                console.log(formaterReleve(resultat));
              } else {
                console.log('Relevé introuvable.');
              }

              break;
            }

            case '3': {
              const resultats = joursPluvieux(releves, SEUIL_JOUR_PLUVIEUX);

              console.log(resultats.length + ' journée(s) pluvieuse(s).');
              console.log(listerReleves(resultats));

              break;
            }

            default:
              console.log('Choix inconnu.');
          }

          break;
        }

        case '4': {
          console.log('--- Trier ---');
          console.log('1. Température croissante');
          console.log('2. Pluie croissante');
          console.log('3. Température décroissante');
          const sousChoix = await demander('Votre choix : ');
          if (sousChoix === null) break;

          switch (sousChoix) {
            case '1':
              console.log(listerReleves(trierParTemperature(releves)));
              break;
            case '2':
              console.log(listerReleves(trierParPluie(releves)));
              break;
            case '3':
              console.log(listerReleves(trierParTemperatureDecroissante(releves)));
              break;
            default:
              console.log('Choix inconnu.');
          }
          break;
        }
        case '5': {
          console.log('--- Synthèse de la série ---');
          console.log('Nombre de relevés : ' + releves.length);
          const moyenne = moyenneTemperature(releves);
          if (moyenne === null) {
            console.log('Température moyenne : aucune donnée');
          } else {
            console.log('Température moyenne : ' + moyenne + ' °C');
          }

          const extremes = temperatureMinMax(releves);

          if (extremes === null) {
            console.log('Températures minimales et maximales : aucune donnée');
          } else {
            console.log('Température minimale : ' + extremes.min + ' °C');
            console.log('Température maximale : ' + extremes.max + ' °C');
          }

          console.log('Cumul de pluie : ' + cumulPluie(releves) + ' mm');

          const pluvieux = joursPluvieux(releves, SEUIL_JOUR_PLUVIEUX);

          console.log('Journées pluvieuses : ' + pluvieux.length);

          const plusChaude = journeeLaPlusChaude(releves);

          if (plusChaude === null) {
            console.log('Journée la plus chaude : aucune donnée');
          } else {
            console.log('Journée la plus chaude : ' + formaterReleve(plusChaude));
          }

          console.log('Rappels :');
          console.log('- Une courte série météo ne décrit pas le climat régional.');
          console.log('- Le seuil de 10 mm est une catégorie d exercice.');
          console.log("- L'humidité de l'air n'est pas l'humidité du sol.");

          break;
        }

        case '6': {
          const id = await demander('Identifiant du relevé à supprimer : ');
          if (id === null) break;

          const resultat = supprimerReleve(releves, id.toUpperCase());

          if (resultat) {
            await enregistrerJson(FICHIER_DONNEES, releves);
            console.log('Relevé supprimé avec succès.');
          } else {
            console.log('Relevé introuvable.');
          }

          break;
        }

        case '7': {
          const id = await demander('Identifiant du relevé à modifier : ');
          if (id === null) break;

          const champ = await demander(
            'Champ à modifier (date, temperatureC, pluieMm, humiditeAirPct) : '
          );
          if (champ === null) break;

          const valeur = await demander('Nouvelle valeur : ');
          if (valeur === null) break;

          const erreurs = modifierReleve(releves, id.toUpperCase(), champ, valeur);

          if (erreurs.length === 0) {
            await enregistrerJson(FICHIER_DONNEES, releves);
            console.log('Relevé modifié avec succès.');
          } else {
            console.log('Modification refusée :');

            for (const erreur of erreurs) {
              console.log('- ' + erreur);
            }
          }

          break;
        }

        default:
          console.log('Choix inconnu. Tapez un chiffre du menu.');
      }

    } catch (erreur) {
      console.log('Erreur : ' + erreur.message);
    }
  }

  fermerSaisie();
}

main();















