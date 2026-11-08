# Prisme (Prism)

A keyboard rhythm game: notes burst from a crystal in the middle of the screen and fly towards four pads, left, down, up and right. Hit the right arrow when the note lands in its pad. Play the 200 tracks from the Rythme plugin, or your own music.

*Version française : [README.md](README.md)*

## How to play

- **Arrows** or **ZQSD** (WASD on QWERTY): one key per pad (left, down, up, right). You can also click or tap the pads.
- Hit when the note reaches its pad: the pad's edge turns white at that moment.
- **Chords**: white corners surround two notes arriving together; press both keys at once (or click diagonally).
- **Long notes**: hold the key until the note's beam has passed.
- **Space**: play · **P**: pause · **Full screen** during the game.

## Accuracy and points

Each note is judged by how far it is from the right moment: **Perfect** (about ±75 ms, 300 points), **Good** (±150 ms, 200 points), **OK** (±230 ms, 100 points), otherwise a miss. Prisme is more forgiving than Rythme.

A note's points rise by 1 % per note of combo, up to double at 100 notes in a row; a miss resets the combo.

At the end, accuracy gives a grade: **S** from 95 %, **A** at 90 %, **B** at 80 %, **C** at 70 %, **D** below. Score and grade are kept for each level.

## Songs

The **Songs** tab offers the 200 Rythme tracks. Each level's difficulty is worked out from its notes, from 1 to 10 stars; the higher it is, the faster the notes come.

## My music

In **My music**, create a level from an imported **audio file** or a track from your **NeoMusic** library: the game finds its tempo and strong beats and places the notes on them, at the chosen **difficulty** (1 to 10 stars).

## Settings

- Music **volume**.
- **Offset** (−300 to +300 ms): it adjusts itself after each game. If you hit late or early on average, the game corrects most of the gap; you can also change it by hand.

## Data and sync

Your scores and grades per level and your settings are stored by NeoDex, backed up and synced between your PCs when sync is on.

## Install

In NeoDex: **NeoStore → Discover → Prisme → Install**.

Building a plugin: see the [NeoDex SDK](https://github.com/NDesumeur/neodex-sdk).
