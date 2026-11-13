**Languages / 语言：简体中文 · English · Français · Deutsch · Español · Italiano**

[简体中文](../README.md) | [English](README.en.md) | [Français](README.fr.md) | [Deutsch](README.de.md) | [Español](README.es.md) | [Italiano](README.it.md)

# Folio · 1.4.20

Déplacez le panneau par sa barre de titre et continuez à utiliser la page pour observer les changements en activant ou désactivant les options.

Le bouton à curseurs de la barre supérieure ouvre tous les réglages Folio. Le premier réglage des deux interfaces contrôle sa visibilité. Le chat IA natif reste dans la barre latérale droite et s’ouvre depuis la barre supérieure ; l’icône de recherche du Desk natif est décalée vers l’intérieur.

Folio apporte à Roam une mise en page chaleureuse inspirée des magazines, avec des outils pour les étiquettes, notes marginales, calendriers, lectures et tâches. Activez chaque composant séparément pour des notes plus claires et une lecture plus attentive.

**Autres plugins indépendants**

- **Reading Desk** — Réunissez lectures, annotations et idées pour transformer ce que vous lisez en connaissances durables.
- **Version Studio** — Comparez les versions de vos notes, suivez l’évolution de vos idées et réécrivez en confiance.

Ces plugins se téléchargent et s’installent séparément ; ils ne sont pas inclus dans Folio.

## Installation

1. Désactivez les anciens `roam/css` du thème et les `roam/js` associés pour éviter les doublons.
2. Décompressez le ZIP.
3. Ouvrez Settings → Roam Depot → Developer Mode → Load unpacked extension.
4. Sélectionnez le dossier contenant directement `extension.js`.
5. Choisissez la langue et les options dans Extension Settings → Folio. Auto suit la langue du navigateur.

## Thème et composants

Un interrupteur commande le thème ; les composants actifs gardent les couleurs natives lorsque le thème est désactivé. Les 29 composants sont répartis en sept groupes fonctionnels accessibles à gauche. Chacun conserve son interrupteur et son niveau de ressources estimé. Apparence, noms des étiquettes, hauteur du code et raccourcis restent dans leurs sections respectives. Ces niveaux ne mesurent pas la CPU en direct.

- Interface et navigation: Garder visibles les boutons des barres latérales, Masquer les icônes supérieures, Masquer des éléments de la barre gauche, Compatibilité des listes Workbench, Afficher la barre uniquement pendant le défilement, Bouton graphe de page, Cartes de la barre droite.
- Étiquettes et contenu: Étiquettes et tampons spéciaux, Sélecteur OR, Fiche de propriétés, Poids visuel par références.
- Écriture et code: Mode machine à écrire et objectif, Notes marginales, Limiter la hauteur du code, Outils des blocs de code.
- Journal et calendrier: En-tête du journal, Actions rapides du calendrier, Navigation clavier du calendrier, Modèles quotidiens automatiques, Carte thermique et aperçu du calendrier, Reporter les TODO d’hier, Capture rapide du calendrier.
- Lecture et médias: Images et légendes, Fenêtre PDF, Lecteur vidéo.
- Analyse des pages: Statistiques de page, Pouls de la page.
- Tâches et révision: Bureau éditorial, 3 tâches aléatoires.

Une nouvelle installation active le thème et les composants. Désactiver un composant libère ses ressources. L’arrêt temporaire de Folio permet une comparaison avec Roam natif.

## Random TODO 3 · Exclusions

Dans Tâches et révision, les pages exclues sont initialement `SmartBlock` et `roam/templates`. Saisissez un titre exact par ligne, modifiable ou complétable. Le filtre concerne la page contenant la tâche, y compris ses blocs enfants imbriqués ; une simple référence à cette page ne suffit pas à exclure une tâche.

L’exclusion des TODO avec une date future est activée par défaut. Désactivez-la pour inclure les tâches dont le texte lie explicitement une date de journal future. Les changements sont immédiats et enregistrés, même avec une liste vide ou un interrupteur désactivé. La réinitialisation restaure les deux pages et active l’option. Les tâches originales ne sont jamais modifiées.

## Polices, devise et étiquettes

Saisissez le `font-family` CSS d’une police installée, et non un fichier ou une URL ; une valeur vide restaure les choix par défaut. La devise comporte au maximum deux lignes, avec un budget de 24 par ligne : caractère latin = 1 ; caractère chinois, pleine chasse ou emoji = 2. La largeur disponible peut réduire cette limite.

Les noms d’étiquettes sont configurables ; changer la langue ne renomme jamais les pages Roam. Les types de notes et Reading List utilisent la même taille de **12px** en `[[lien de page]]` et en `#tag`, comme les tampons Q1, sans suivre la taille du corps du texte. Les personnes et secteurs suivent toujours le corps du texte. Les livres, personnes, secteurs, motive et rediscover conservent les clics natifs.

## Fonctionnement

- Open, dans la barre vidéo, ouvre le bloc vidéo à droite. Timestamp, Theater et Notes gardent leurs traitements existants. Le code vidéo fourni permet aussi de modifier et supprimer les notes horodatées du mode cinéma.
- Ajoutez `#.aside` ou `#.aside-left` à un bloc enfant, ou utilisez le menu de sa puce. Sans espace suffisant, la note reste dans le texte. La projection des commentaires est désactivée.
- Le PDF plein écran propose un lien de sortie et Échap. La hauteur du code vaut 420px par défaut ; 0 supprime la limite. Son interrupteur est indépendant.
- Query/Data Table conserve le redimensionnement natif des colonnes. Roam gère les espacements des menus de blocs et des commandes.
- Une seule couche centre l’article ; le séparateur de bloc mesure 8px et les compteurs de références sont conservés. La barre gauche native mesure 232px ; Folio n’ajoute pas son redimensionnement.
- Raccourcis par défaut : G pour une date, T pour aujourd’hui, D pour le journal, flèches gauche/droite pour les jours voisins. Ils sont configurables et inactifs pendant la saisie.
- Random TODO 3 exclut par défaut les dates quotidiennes futures explicites (option désactivable) et évite les liens de provenance répétés. Le vieillissement du papier, mark it et leurs réglages ont été supprimés.

L’icône du calendrier et Alt-clic sur une référence de date partagent la même présentation enrichie. La sélection de la date référencée conserve le comportement natif de Roam. Les aperçus disparaissent dès que le pointeur quitte la date, à la fermeture du calendrier ou à la perte de focus de la fenêtre.

## Développement et vérification

Exécutez `npm run build` et `npm run check`. Les contrôles facultatifs `npm run check:layout` et `npm run check:interaction` nécessitent Playwright/Chromium ; utilisez `FOLIO_TEST_CHROMIUM` pour l’exécutable et `FOLIO_DOM_FIXTURE` pour un DOM exporté. Le fichier distribué est `extension.js` ; les sources sont dans `src/` et `source/`.

Consultez [TEST-REPORT.md](../TEST-REPORT.md) et [CHANGELOG.md](../CHANGELOG.md). Les tests locaux et doublures d’API ne remplacent pas une validation complète dans un graphe connecté.

## Remerciements et licence

Merci à **ESTHER不二 / esthersjw** et à [esther-design-system](https://github.com/esthersjw/esther-design-system), à l’origine de l’identité visuelle et du thème adapté de Folio. Le design original et le thème adapté relèvent de **CC BY-NC-SA 4.0** ; voir [LICENSE.md](../LICENSE.md).

Merci à **Date Picker Enhance**, explicitement cité par le code original du calendrier, ainsi qu’à Roam Research et aux développeurs de la communauté pour les fonctions natives, interfaces et idées d’interaction. Aucun auteur ni lien de projet non vérifié n’est attribué par supposition.
