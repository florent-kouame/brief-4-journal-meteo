# Journal météorologique de la ferme

> Projet individuel du SAS DFS, brief 4 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte

## Contexte
 Le suivi des conditions météorologiques est important pour une bonne gestion des activités agricoles. Le projet Journal météorologique de la ferme consiste à développer une application en JavaScript avec Node.js permettant d'enregistrer, de consulter et d'analyser les relevés quotidiens de température, de pluviométrie et d'humidité relative de l'air. Il s'agit d'un outil pédagogique de suivi météorologique et non de prévision du temps.
 La température permet de mesurer le degré de chaleur ou de fraîcheur de l'air. Elle est exprimée en degrés Celsius (°C). La pluviométrie indique la quantité de pluie tombée pendant une période donnée et s'exprime en millimètres (mm). L'humidité relative de l'air mesure la quantité de vapeur d'eau présente dans l'air par rapport à sa capacité maximale. Elle est exprimée en pourcentage (%). Enfin, la date permet de préciser le jour de chaque observation au format AAAA-MM-JJ, tandis que l'identifiant (ID) sert à distinguer chaque relevé et ne possède pas d'unité.

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
- [X] Bonus : supprimer et modifier un relevé (choix 6 et 7)
- [X] Bonus : tri par température décroissante, journée la plus chaude

## Données
Les relevés utilisés dans ce projet sont des données fictives, créées uniquement à des fins pédagogiques. Ils ne représentent pas des observations météorologiques réelles.

Les données sont enregistrées dans le fichier (donnees/releves.json)
Chaque relevé comporte les informations suivantes :

Identifiant : permet d'identifier chaque relevé 
Date : date de réalisation du relevé 
Température : température de l'air exprimée en degrés Celsius (°C)
Pluie : quantité de pluie enregistrée en millimètres (mm)
Humidité de l'air : humidité relative exprimée en pourcentage (%)

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

Entraide avec OUEDRAOGO BOURAHIMA, FAKAYODE ABDUL, KOFFI VICTOIRE, IRIE BI BOTTY, LEVI ANOH, KONE ABDOULAYE, THYEDIE AKPLI, ESSY ABRAN, FALLE SEROKO, KONATE KABA sur des quetions de comphehension de differents tâches à faire dans le doc, les fiches, les sources et les test et aussi sur des fonctions tels que Json.parse, Json.Stringify, Try/catch et bien d'autres.