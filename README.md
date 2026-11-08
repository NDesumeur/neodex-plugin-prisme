# Prisme

Un jeu de rythme au clavier : les notes jaillissent d'un cristal au centre de l'écran et filent vers quatre socles, à gauche, en bas, en haut et à droite. Frappe la bonne flèche quand la note se pose dans son socle. Joue les 200 morceaux du plugin Rythme, ou ta propre musique.

*English version: [README.en.md](README.en.md)*

## Comment jouer

- **Flèches** ou **ZQSD** : une touche par socle (gauche, bas, haut, droite). On peut aussi cliquer ou toucher les socles.
- Frappe quand la note arrive dans son socle : le bord du socle devient blanc à ce moment-là.
- **Accords** : des coins blancs entourent deux notes qui arrivent ensemble ; appuie sur les deux touches à la fois (ou clique en diagonale).
- **Notes longues** : garde la touche enfoncée tant que le rayon de la note n'est pas passé.
- **Espace** : jouer · **P** : pause · **Plein écran** pendant la partie.

## Précision et points

Chaque note est jugée selon l'écart avec le bon moment : **Parfait** (environ ±75 ms, 300 points), **Bien** (±150 ms, 200 points), **OK** (±230 ms, 100 points), sinon ratée. Prisme est plus indulgent que Rythme.

Les points d'une note augmentent de 1 % par note de combo, jusqu'au double à 100 notes de suite ; une note ratée remet le combo à zéro.

À la fin, la précision donne une note : **S** à partir de 95 %, **A** à 90 %, **B** à 80 %, **C** à 70 %, **D** en dessous. Score et note sont gardés pour chaque niveau.

## Chansons

L'onglet **Chansons** reprend les 200 morceaux de Rythme. La difficulté de chaque niveau est calculée d'après ses notes, de 1 à 10 étoiles ; plus elle est haute, plus les notes arrivent vite.

## Mes musiques

Dans **Mes musiques**, crée un niveau à partir d'un **fichier audio** importé ou d'une musique de ta bibliothèque **NeoMusic** : le jeu trouve son tempo et ses temps forts et place les notes dessus, à la **difficulté** choisie (1 à 10 étoiles).

## Réglages

- **Volume** de la musique.
- **Décalage** (−300 à +300 ms) : il se règle tout seul après chaque partie. Si tu frappes en moyenne en retard ou en avance, le jeu corrige une bonne partie de l'écart ; tu peux aussi le changer à la main.

## Données et synchronisation

Tes scores et notes par niveau et tes réglages sont enregistrés par NeoDex, sauvegardés et synchronisés entre tes PC si la synchro est activée.

## Installer

Dans NeoDex : **NeoStore → À découvrir → Prisme → Installer**.

Développer un plugin : voir le [SDK NeoDex](https://github.com/NDesumeur/neodex-sdk).
