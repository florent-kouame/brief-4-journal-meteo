# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.

| Champ | Signification | Type | Règle de validation | Unité | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | Identifiant unique | texte | non vide, absent des données | — | M08 |
| date | Date de relevé | Texte | AAAA-MM-JJ | — | 2026-11-03 |
| temperatureC| Temperature de l'air | Nombre | valeur numerique positive ou negative | °C | 30 |
| pluieMm | Quantité de pluie enregistrée | Nombre | Supérieure ou égale à 0 | mm | 15 |
| humiditeAirPct | Humidité relative de l'air | Nombre | Comprise entre 0 et 100 | % | 84 |

**Listes de valeurs autorisées** : similaire aux règles de validation des differents champ donné.

**Sources** : d'après  le SUJET.md et le fichier de donnees
