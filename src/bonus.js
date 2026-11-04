// BONUS — Pour aller plus loin. Facultatif : commencez seulement quand le socle est complet.
// Fiche : fiches/7-bonus.md · Vérifier : npm run test:bonus
// Pas de modèle pour ce fichier : à vous de combiner ce que vous avez appris.
import { trouverParId, verifierReleve } from './registre.js';

// Les champs qu'on a le droit de modifier. L'identifiant n'en fait pas partie.
export const CHAMPS_MODIFIABLES = ['date', 'temperatureC', 'pluieMm', 'humiditeAirPct'];

// Retire du journal le relevé qui a cet identifiant.
// Renvoie le relevé retiré, ou undefined s'il n'existe pas : le journal ne change pas.
export function supprimerReleve(releves, id) {
  for (let i = 0; i < releves.length; i++) {
    if (releves[i].id === id) {
      const retire = releves.splice(i, 1);
      return retire[0];
    }
  }
  return undefined;
}


// Modifie UN champ du relevé qui a cet identifiant. La nouvelle valeur arrive sous forme de TEXTE.
// Renvoie un tableau de messages d'erreur ; [] si la modification est faite.
// Vérifiez dans cet ordre et arrêtez-vous au premier problème : identifiant inconnu (une erreur)
// · champ 'id', non modifiable (une erreur) · champ absent de CHAMPS_MODIFIABLES (une erreur)
// · valeur refusée par les règles de l'ajout (leurs erreurs). En cas d'erreur, le relevé ne change pas.
// Exemple : modifierReleve(releves, 'M03', 'pluieMm', '11') → [] et M03 a maintenant 11 mm (un nombre).
export function modifierReleve(releves, id, champ, valeur) { 
  const releve = trouverParId(releves, id);
  if (releve === undefined) {
    return ['Relevé ' + id + ' introuvable.'];
  }
  if (champ === 'id') {
    return ["L'identifiant ne peut pas être modifié."];
  }
  if (CHAMPS_MODIFIABLES.indexOf(champ) === -1) {
    return ['Le champ « ' + champ + ' » n\'est pas modifiable.'];
  }
  if (champ === 'date') {
    if (!estDateValide(valeur)) {
      return ['La date doit être une date réelle au format AAAA-MM-JJ.'];
    }
  }

  if (champ === 'temperatureC') {
    const nombre = versNombre(valeur);
    if (Number.isNaN(nombre)) {
      return ['La température doit être un nombre (en °C).'];
    }
  }

  if (champ === 'pluieMm') {
    const nombre = versNombre(valeur);
    if (Number.isNaN(nombre) || nombre < 0) {
      return ['La pluie doit être un nombre positif ou nul (en mm).'];
    }
  }

  if (champ === 'humiditeAirPct') {
    const nombre = versNombre(valeur);
    if (Number.isNaN(nombre) || nombre < 0 || nombre > 100) {
      return ["L'humidité de l'air doit être un nombre entre 0 et 100 (en %)."];
    }
  }
 
  if (champ === 'date') {
    releve.date = valeur;
  } else if (champ === 'temperatureC') {
    releve.temperatureC = versNombre(valeur);
  } else if (champ === 'pluieMm') {
    releve.pluieMm = versNombre(valeur);
  } else if (champ === 'humiditeAirPct') {
    releve.humiditeAirPct = versNombre(valeur);
  }
  return []; 
}

// Renvoie une COPIE triée par température décroissante : la plus chaude d'abord.
export function trierParTemperatureDecroissante(releves) {
  const copie = [...releves];
  copie.sort(function (a, b) {
    // Ordre décroissant
    return b.temperatureC - a.temperatureC;
  });
  return copie;
}

// Renvoie le relevé dont la température est la plus haute (le premier en cas d'égalité),
// ou null si la liste est vide.
export function journeeLaPlusChaude(releves) {
  if (releves.length === 0) {
    return null;
  }
  let plusChaude = releves[0];
  for (let i = 1; i < releves.length; i++) {
    if (releves[i].temperatureC > plusChaude.temperatureC) {
      plusChaude = releves[i];
    }
  }
  return plusChaude;
}
