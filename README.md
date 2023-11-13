# ws-roman-numerals

Ce projet est une API REST développée avec Node.js et Express.js pour convertir des nombres en numéraux romains et vice versa. L'API est simple à utiliser et peut être intégrée dans toute application nécessitant de telles fonctionnalités de conversion.

### Prérequis
Avant de pouvoir utiliser cette API, assurez-vous d'avoir les éléments suivants installés :
````
Node.js : Un environnement d'exécution JavaScript côté serveur.
npm : Le gestionnaire de paquets Node.js pour installer les dépendances.
````
  
### Installation
Clonez le dépôt GitLab :

````
git clone https://gitlab.com/votre-utilisateur/ws-kata-roman-numerals.git
````

### Installez les dépendances du projet :
````
cd kata-roman-numerals
npm install
````
### Lancez le serveur :
````
node server.js
````


## Usage
Voici quelques exemples de comment vous pouvez utiliser l'API :

### Convertir un nombre entier en numéral romain
`GET http://localhost:3000/api/convert-arabic?arabic=4`

### Convertir un numéral romain en nombre entier
`GET http://localhost:3000/api/convert-roman?roman=X`

## Deploiement
GitLab a été utilisé pour le versioning et Heroku pour l'hébérgement. 
Il y aussi une configuration des mécanismes d'authentification et d'autorisation pour sécuriser l'API.



