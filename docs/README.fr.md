# Folio · 1.4.28

Les raccourcis G / T / D sont désactivés par défaut, même après une mise à jour. Activez-les dans les réglages Folio → Navigation. Les flèches ne changent plus de jour. Le déplacement des tâches conserve leur hiérarchie.

[简体中文 · English · Français · Deutsch · Español · Italiano](../README.md#languages)

<a id="fr"></a>


## Français

[Présentation](#fr-overview) · [Barre droite](#fr-sidebar) · [Notes marginales](#fr-asides) · [Notes vidéo](#fr-video) · [Fenêtre de réglages](#fr-settings) · [Installation](#fr-install) · [Apparence et polices](#fr-appearance) · [Interface et navigation](#fr-navigation) · [Étiquettes et contenu](#fr-content) · [Écriture et code](#fr-writing) · [Journal et calendrier](#fr-calendar) · [Lecture et médias](#fr-media) · [Analyse des pages](#fr-insights) · [Tâches et révision](#fr-review) · [Développement](#fr-development) · [Remerciements](#fr-credits)

<a id="fr-overview"></a>

### Présentation

**Une mise en page de magazine pour Roam, avec des outils quotidiens utilisables séparément.**

Des couleurs de papier chaleureuses, des titres clairs et des marges confortables invitent à lire et écrire longtemps. Folio harmonise aussi le journal, les barres latérales, les étiquettes, les propriétés et certaines extensions communautaires, ainsi que l’IA native de Roam et The Desk.

**Autres plugins indépendants**

- **Reading Desk** — Réunissez lectures, annotations et idées pour transformer ce que vous lisez en connaissances durables.
- **Version Studio** — Comparez les versions de vos notes, suivez l’évolution de vos idées et réécrivez en confiance.

Ces plugins se téléchargent et s’installent séparément ; ils ne sont pas inclus dans Folio.

Un interrupteur commande le thème ; les composants actifs gardent les couleurs natives lorsque le thème est désactivé. Les 29 composants sont répartis en sept groupes fonctionnels accessibles à gauche. Chacun conserve son interrupteur et son niveau de ressources estimé. Apparence, noms des étiquettes, hauteur du code et raccourcis restent dans leurs sections respectives. Ces niveaux ne mesurent pas la CPU en direct.

Une nouvelle installation active le thème et les composants. Désactiver un composant libère ses ressources. L’arrêt temporaire de Folio permet une comparaison avec Roam natif.

<a id="fr-sidebar"></a>

### Une barre latérale droite pour travailler côte à côte

Les notes de la barre latérale droite deviennent des cartes que l’on parcourt horizontalement, en gardant la page principale visible. Chaque carte conserve son défilement et ses commandes natives pour ouvrir, replier et fermer le contenu.

L’entrée de l’IA native se trouve dans la barre supérieure principale ; le chat reste dans une carte à droite, avec son historique, ses conversations et sa commande de création. Les cartes ordinaires gardent leur fonctionnement.

<a id="fr-asides"></a>

### Une place pour les idées complémentaires

Placez certains blocs enfants dans la marge gauche ou droite pour garder exemples et explications près du texte. Choisissez **Aside: Left** ou **Aside: Right** dans le menu de la puce, ou ajoutez `#.aside-left` ou `#.aside`. Les autres enfants conservent leur structure ; si la marge est trop étroite, les notes restent dans le texte.

Le placement suit la largeur native de Roam et l’espace disponible. Les annotations marginales de Reading Desk sont indépendantes ; utilisez une seule méthode par bloc parent pour éviter les chevauchements.

<a id="fr-video"></a>

### Regarder une vidéo et garder ses notes à proximité

Le mode Theater réunit la vidéo et les commentaires horodatés natifs sur la page principale. **Timestamp** utilise la création de commentaires native de Roam. Folio affiche ces commentaires sous la vidéo et retrouve la nouvelle entrée. Cliquez sur l’heure pour revenir au passage ; les modifications sont enregistrées dans le même commentaire. **Open** ouvre le bloc original dans la barre droite.

Les fenêtres plus basses et étroites limitent la hauteur de la vidéo pour laisser de la place aux notes. Les grandes fenêtres conservent leurs marges, avec vidéo et notes alignées.

<a id="fr-settings"></a>

### Fenêtre de réglages

Le bouton à curseurs de la barre supérieure ouvre une fenêtre compacte de réglages. Déplacez-la par sa barre de titre tout en utilisant la page. La page complète des réglages et cette fenêtre permettent de masquer ou rétablir ce bouton, visible par défaut. Les 29 composants sont répartis en sept groupes, plus les réglages d’apparence ; thème et composants se règlent séparément. Les niveaux de ressources sont des estimations.

<a id="fr-install"></a>

### Installation

1. Désactivez les anciens `roam/css` du thème et les `roam/js` associés pour éviter les doublons.
2. Décompressez le ZIP.
3. Ouvrez Settings → Roam Depot → Developer Mode → Load unpacked extension.
4. Sélectionnez le dossier contenant directement `extension.js`.
5. Choisissez la langue et les options dans Extension Settings → Folio. Auto suit la langue du navigateur.

<a id="fr-appearance"></a>

### Apparence et polices

Saisissez le `font-family` CSS d’une police installée, pas un fichier ou une URL ; vide restaure les valeurs par défaut. Le texte et les titres/notes marginales ont des réglages distincts. La devise comporte deux lignes de 24 unités maximum : caractère latin = 1 ; caractère chinois, pleine chasse ou emoji = 2.

<a id="fr-navigation"></a>

### Interface et navigation

| Composant | Impact sur les ressources |
| --- | --- |
| Garder visibles les boutons des barres latérales | Très faible |
| Masquer les icônes supérieures | Très faible |
| Masquer des éléments de la barre gauche | Très faible |
| Compatibilité des listes Workbench | Très faible |
| Afficher la barre uniquement pendant le défilement | Très faible |
| Bouton graphe de page | Faible |
| Cartes de la barre droite | Faible |

Les espacements des menus, le redimensionnement des colonnes Query/Data Table et les liens natifs de Roam sont conservés.

La commande native « Adjust width of the main page » de Roam règle la largeur du texte. Folio n’ajoute ni paliers ni largeur fixe. Le redimensionnement Query/Data Table et les liens restent natifs.

<a id="fr-content"></a>

### Étiquettes et contenu

| Composant | Impact sur les ressources |
| --- | --- |
| Étiquettes et tampons spéciaux | Très faible |
| Sélecteur OR | Très faible |
| Fiche de propriétés | Faible |
| Poids visuel par références | Modéré |

Les noms d’étiquettes sont configurables ; changer la langue ne renomme jamais les pages Roam. Les types de notes et Reading List utilisent la même taille de **12px** en `[[lien de page]]` et en `#tag`, comme les tampons Q1, sans suivre la taille du corps du texte. Les personnes et secteurs suivent toujours le corps du texte. Les livres, personnes, secteurs, motive et rediscover conservent les clics natifs.

Les fiches de propriétés rassemblent les informations de la page. Le poids visuel ajuste la taille et l’accentuation des blocs selon leurs références, sans retirer les compteurs ni la navigation natifs.

<a id="fr-writing"></a>

### Écriture et code

| Composant | Impact sur les ressources |
| --- | --- |
| Mode machine à écrire et objectif | Très faible |
| Notes marginales | Faible |
| Limiter la hauteur du code | Très faible |
| Outils des blocs de code | Plus élevé |

Le mode machine à écrire garde la position d’écriture visible et propose un objectif. Les notes marginales se positionnent bloc par bloc, comme indiqué plus haut.

La limite de hauteur du code est de **420px** par défaut ; `0` la supprime. Le code long défile dans son bloc, dont le conteneur suit la largeur disponible. Les outils apparaissent automatiquement dans les notes nouvellement dépliées : début/fin, copie, recherche, remplacement courant et remplacement de toutes les occurrences du bloc. La recherche est littérale, sans distinction de casse, et conserve requête et position après fermeture. Les remplacements utilisent les transactions natives de l’éditeur et sont annulables.

<a id="fr-calendar"></a>

### Journal et calendrier

| Composant | Impact sur les ressources |
| --- | --- |
| En-tête du journal | Très faible |
| Actions rapides du calendrier | Très faible |
| Navigation clavier du calendrier | Très faible |
| Modèles quotidiens automatiques | Très faible |
| Carte thermique et aperçu du calendrier | Modéré |
| Reporter les TODO d’hier | Modéré |
| Capture rapide du calendrier | Plus élevé |

Raccourcis par défaut : G pour une date, T pour aujourd’hui, D pour le journal, flèches gauche/droite pour les jours voisins. Ils sont configurables et inactifs pendant la saisie.

L’icône du calendrier et Alt-clic sur une référence de date partagent la même présentation enrichie. La sélection de la date référencée conserve le comportement natif de Roam. Les aperçus disparaissent dès que le pointeur quitte la date, à la fermeture du calendrier ou à la perte de focus de la fenêtre.

Le bandeau du journal masque le séparateur natif en double au-dessus du jour ; le désactiver rétablit ce trait, y compris pour les dates chargées en défilant. La capture rapide ajoute notes, TODO ou plan à la date choisie.

**Modèles** : renseignez un UID de bloc ou `((une référence))` pour le SmartBlock de semaine, celui du week-end et le modèle du plan du jour. Les trois champs sont vides par défaut. Les deux modèles automatiques nécessitent l’extension SmartBlocks ; configurez-les avant de les activer. Ils s’exécutent au démarrage du composant si la page du jour existe, au plus une fois par jour et par modèle configuré.

Le plan du jour copie les enfants du bloc choisi et leur hiérarchie, sans exécuter les commandes SmartBlocks. Chaque modèle est copié au plus une fois par date, même après rechargement. Un modèle absent ou vide ne signale pas de réussite. Après une interruption, vérifiez le contenu partiel avant de compléter manuellement.

<a id="fr-media"></a>

### Lecture et médias

| Composant | Impact sur les ressources |
| --- | --- |
| Images et légendes | Faible |
| Fenêtre PDF | Faible |
| Lecteur vidéo | Plus élevé |

**Open** ouvre le bloc vidéo à droite ; **Theater** active le mode cinéma et **Notes** contrôle la vue native des horodatages. Roam gère la création via **Timestamp** et conserve la note comme commentaire natif. Folio ne crée pas de bloc enfant séparé sous la vidéo. L’édition dans Theater met à jour le même commentaire. Les modifications s’enregistrent automatiquement après une courte pause de saisie ; quitter le champ, Ctrl/Cmd＋Entrée ou **Enregistrer** lance immédiatement la sauvegarde. Les brouillons sont conservés lors du rafraîchissement de la liste et les écritures de chaque commentaire sont exécutées dans l’ordre. La réussite n’est indiquée qu’après relecture du texte dans le graphe. En cas d’échec, le brouillon est conservé avec l’action **Réessayer**. La suppression demande un second clic.

Images et légendes reprennent le style de lecture. La vue PDF élargie propose un lien de sortie et la touche Échap.

<a id="fr-insights"></a>

### Analyse des pages

| Composant | Impact sur les ressources |
| --- | --- |
| Statistiques de page | Modéré |
| Pouls de la page | Plus élevé |

La ligne de statistiques indique le nombre de mots, le temps de lecture estimé et d’autres informations. Le pouls de la page montre ses mentions récentes. Les deux composants se règlent séparément.

<a id="fr-review"></a>

### Tâches et révision

| Composant | Impact sur les ressources |
| --- | --- |
| Bureau éditorial | Plus élevé |
| 3 tâches aléatoires | Plus élevé |

**Editorial Desk** enrichit The Desk natif de Roam : filtres par type, plusieurs cartes épinglées, choix/retrait d’une une et neuf tris — manuel, récemment modifié, modifié depuis le plus longtemps, échéance, progression, type, longueur, activité, ancienneté sur le bureau. Commandes, indications et statistiques suivent les six langues de Folio ; les titres et types personnels restent inchangés. Il est distinct du plugin Reading Desk.

#### Random TODO 3 · Exclusions

Random TODO 3 effectue une sélection pondérée de trois TODO absents du journal du jour, pour retrouver des tâches inachevées.

Dans Tâches et révision, les pages exclues sont initialement `SmartBlock` et `roam/templates`. Saisissez un titre exact par ligne, modifiable ou complétable. Le filtre concerne la page contenant la tâche, y compris ses blocs enfants imbriqués ; une simple référence à cette page ne suffit pas à exclure une tâche.

L’exclusion des TODO avec une date future est activée par défaut. Désactivez-la pour inclure les tâches dont le texte lie explicitement une date de journal future. Les changements sont immédiats et enregistrés, même avec une liste vide ou un interrupteur désactivé. La réinitialisation restaure les deux pages et active l’option. Les tâches originales ne sont jamais modifiées.

<a id="fr-development"></a>

### Développement et vérification

Exécutez `npm run build` et `npm run check`. Les contrôles facultatifs `npm run check:layout` et `npm run check:interaction` nécessitent Playwright/Chromium ; utilisez `FOLIO_TEST_CHROMIUM` pour l’exécutable et `FOLIO_DOM_FIXTURE` pour un DOM exporté. Le fichier distribué est `extension.js` ; les sources sont dans `src/` et `source/`.

Consultez [CHANGELOG.md](../CHANGELOG.md) pour l’historique. Les vérifications DOM locales et doublures d’API ne garantissent pas toutes les interactions dans les graphes réels ou sur tous les appareils.

<a id="fr-credits"></a>

### Remerciements et licence

Merci à **ESTHER不二 / esthersjw** et à [esther-design-system](https://github.com/esthersjw/esther-design-system), à l’origine de l’identité visuelle et du thème adapté de Folio. Le design original et le thème adapté relèvent de **CC BY-NC-SA 4.0** ; voir [LICENSE.md](../LICENSE.md).

Merci à **Date Picker Enhance**, explicitement cité par le code original du calendrier, ainsi qu’à Roam Research et aux développeurs de la communauté pour les fonctions natives, interfaces et idées d’interaction. Aucun auteur ni lien de projet non vérifié n’est attribué par supposition.

Merci à **Azlen Elza** et au [thème Zenith](https://github.com/azlen/roam-themes#zenith), dont les pages côte à côte et la lecture épurée ont inspiré Folio.

[Retour aux langues](../README.md#languages)
