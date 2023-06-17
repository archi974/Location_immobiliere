# Location_immobiliere

npm i
npm start
npx create-react-app mon-app
npm install node-sass --save


Options qui reste le plus appropriées pour redimensionner et compresser les images :

npm install react-image-file-resizer
import { Resizer } from 'react-image-file-resizer';

const file = ... // Récupérez le fichier image
const maxWidth = 800; // Définissez la largeur maximale souhaitée
const maxHeight = 600; // Définissez la hauteur maximale souhaitée
const quality = 80; // Définissez la qualité de l'image (0-100)

Resizer.imageFileResizer(
  file,
  maxWidth,
  maxHeight,
  'JPEG', // Format de sortie souhaité
  quality,
  0, // Rotation de l'image (0 = pas de rotation)
  (resizedImage) => {
    // Le résultat est disponible dans la variable "resizedImage"
    // Vous pouvez l'utiliser pour l'affichage ou l'envoyer au serveur
  },
  'base64', // Format de sortie (base64 ou blob)
  200, // Largeur maximale de la miniature (facultatif)
  200 // Hauteur maximale de la miniature (facultatif)
);
