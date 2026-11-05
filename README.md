# Journal météorologique de la ferme

> Projet individuel du SAS DFS, brief 4 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte

## Contexte
 Les données sont enregistrées dans le fichier donnees/releves.json.
Le journal contient des relevés météorologiques fictifs utilisés dans le cadre de ce projet pédagogique.
Chaque relevé comporte les informations suivantes :

Identifiant : permet d'identifier chaque relevé 
Date : date de réalisation du relevé 
Température : température de l'air exprimée en degrés Celsius (°C).
Pluie : quantité de pluie enregistrée en millimètres (mm).
Humidité de l'air : humidité relative exprimée en pourcentage (%).

Ces données permettent de suivre les conditions météorologiques quotidiennes de la ferme et de réaliser des calculs statistiques simples.

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/VOTRE-COMPTE/brief-4-journal-meteo.git
cd brief-4-journal-meteo
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités

✏️ *Cochez seulement ce qui marche : `- [x]`.*
- [X] Données lues et enregistrées dans `donnees/releves.json`
- [X] Ajouter un relevé, saisies invalides refusées sans arrêter le programme
- [X] Lister les relevés, message si le journal est vide
- [X] Rechercher par identifiant ou par date ; journées pluvieuses (au moins 10 mm)
- [X] Trier par température ou par pluie
- [X] Synthèse : température moyenne, minimale et maximale de la série, cumul de pluie, journées pluvieuses
- [ ] Bonus : supprimer et modifier un relevé (choix 6 et 7)
- [X] Bonus : tri par température décroissante, journée la plus chaude

## Données
Les relevés utilisés dans ce projet sont des données fictives, créées uniquement à des fins pédagogiques. Ils ne représentent pas des observations météorologiques réelles.

Les données sont enregistrées dans le fichier (donnees/releves.json).
Le journal contient des relevés météorologiques fictifs utilisés dans le cadre de ce projet pédagogique.
Chaque relevé comporte les informations suivantes :

Identifiant : permet d'identifier chaque relevé 
Date : date de réalisation du relevé 
Température : température de l'air exprimée en degrés Celsius (°C).
Pluie : quantité de pluie enregistrée en millimètres (mm).
Humidité de l'air : humidité relative exprimée en pourcentage (%).

Ces données permettent de suivre les conditions météorologiques quotidiennes de la ferme et de réaliser des calculs statistiques simples.

## Limites

Le journal météorologique présente certaines limites :
Une courte période de relevés ne permet pas de caractériser le climat de la région à long terme.
Les données utilisées sont fictives et ne représentent pas nécessairement les conditions météorologiques réelles de la ferme.
Le programme ne permet pas de prévoir les conditions météorologiques futures.
L'humidité relative de l'air ne correspond pas à l'humidité du sol et ne permet donc pas de déterminer directement les besoins en eau des cultures.

## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

KOUADIO KONAN FLORENT KOUAME, https://github.com/florent-kouame
Entraide avec mon groupe du brief-4 sur des quetions de comphehension de differents tâches à faire dans le doc, les fiches, les sources et les test et aussi sur des fonctions tels que Json.parse, Json.Stringgify.