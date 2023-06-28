<h1 align="center">Location immobiliere</h1>

<div align="center">
    <a href="https://fr.reactjs.org/">
      <img src="https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="ReactJs" />
    </a>
    <a href="https://sass-lang.com/">
      <img src="https://img.shields.io/badge/Sass-CE649A?&style=for-the-badge&logo=sass&logoColor=white" alt="Sass" />
    </a>
</div>

## Projet 6: Créez une application web de location immobilière avec React
## Informations globales :

- Statut : 🟢 Terminé
- Projet réalisé seul
- Lien vers le [GitHub](https://github.com/archi974/Location_immobiliere)

## Mise en situation :

<p align="justify">Kasa vous recrute en tant que développeur front-end en freelance pour développer sa nouvelle plateforme web. Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre particuliers en France.</p>

<p align="justify">Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel, qui est en freelance. Un gros chantier pour cette année !</p>

<p align="justify">Le recrutement de la personne en charge du back-end n'est pas terminé et va prendre plus de temps que prévu. Du coup, il va falloir que tu fasses sans pour le moment. Je t'ai extrait les 20 dernières annonces de logements dans [ce fichier JSON](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json) pour que tu puisses construire le Front qui correspond.</p>

## Objectif :

- Initialiser l'application ✅
- Installer les dépendances ✅
- Créer un routage fonctionnel avec React router ✅
- Ajouter Sass pour les styles ✅
- Créer des composants banner et card ✅
- Créer le composant collapse ✅
- Ajouter la page d'erreur 404 avec redirection d'URL ✅
- Ajouter le composant Slideshow pour le carrousel ✅
- Améliorer la redirection d'erreur 404 en l'ajoutant aux URL avec id fausse ✅
- Rendre les pages responsive desktop et mobile ✅
- Finalisez le rendu esthétique du site en ce basant sur la maquette ✅

## Contraintes techniques :

**🛠 Outils standards**
  - Create React App
  - React Router
  - Styling: Tout le style CSS doit être codé en utilisant Sass.
  - Pas de librairie React externe

**⚙️ Contraintes techniques**

**React :**

- Il est impératif d’utiliser ces éléments de React pour un code de qualité :
  - Découpage en composants modulaires et réutilisables ;
  - Un composant par fichier ;
  - Structure logique des différents fichiers ;
  - Utilisation des props entre les composants ;
  - Utilisation du state dans les composants quand c'est nécessaire ;
  - Gestion des événements ;
  - Listes : React permet de faire des choses vraiment intéressantes avec
les listes, en itérant dessus, par exemple avec map. Il faut les utiliser
autant que possible.

Il est également recommandé, mais pas imposé, d’utiliser des composants
fonctionnels plutôt que des composants classes.

**React Router :**
- Les paramètres des routes sont gérés par React Router dans l'URL
pour récupérer les informations de chaque logement.
- Il existe une page par route.
- La page 404 est renvoyée pour chaque route inexistante, ou si une
valeur présente dans l’URL ne fait pas partie des données
renseignées.
- La logique du routeur est réunie dans un seul fichier.
Général :
- Le code ne doit pas produire d'erreur ou de warning dans la console.

## Instruction d'installation et d'utilisation :

### Installation

- Installer [Visual Studio Code](https://code.visualstudio.com/).
- Avoir un terminal en bash.
- Crée un dépôt GitHub.
- Récupérer la clé SSH du dépôt.
- Dans le terminal faite `git clone lien-ssh nom-du-projet`.
- Entrer dans le dossier `cd nom-du-projet`.
- Ajouter l'application [React](https://fr.legacy.reactjs.org/docs/create-a-new-react-app.html) `npx create-react-app frontEnd`.
- Entrer dans le dossier `cd frontEnd`.
- Lancer l'application `npm start`
- Ouvrez un autre terminal **(raccourci mac cmd + n)**
- Dans l'application React installer [Sass](https://create-react-app.dev/docs/adding-a-sass-stylesheet/) `npm install node-sass --save`

### Utilisation

- git clone git@github.com:archi974/Location_immobiliere.git
- cd frontEnd
- npm i
- npm start

## Lien utile

`https://fr.legacy.reactjs.org/docs/create-a-new-react-app.html`

`https://create-react-app.dev/docs/adding-a-sass-stylesheet/`

`https://coolors.co/contrast-checker/ffffff-000000`

## Rendu final

![Page home Kasa](https://cdn.discordapp.com/attachments/1019304376193532035/1120343389225877578/Capture_decran_2023-06-19_a_15.23.36.png)
![Page fiche logement](https://cdn.discordapp.com/attachments/1019304376193532035/1120343390018613358/Capture_decran_2023-06-19_a_15.24.04.png)
![Page À propos](https://cdn.discordapp.com/attachments/1019304376193532035/1120343390622589058/Capture_decran_2023-06-19_a_15.24.14.png)

## Futur ajout d'optimisation hors évaluation

Pour optimiser la taille des images, les compresser et redimensionner afin d'avoir le bon format et des performances optimales que ce soit en desktop ou mobile nous devons ajouter à l'application React la librairie react-image-file-resizer `npm install react-image-file-resizer`.

## Droits d’auteurs et informations sur la licence.

Réaliser par Vincent K/BIDI.

©2000 [Openclassroom](https://openclassrooms.com/fr/), Inc. Tout droit réservés.

![Openclassroom](https://camo.githubusercontent.com/e47c349811ac404b8147bd362c598e61c7d20225df17499c6373b44f6ee08a3d/68747470733a2f2f31746f3170726f67726573732e66722f77702d636f6e74656e742f75706c6f6164732f323031392f30352f6f70656e636c617373726f6f6d732d65313535373736313233363135382e706e67)
