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

## Déploiement sur Heroku
GitLab a été utilisé pour le versioning et Heroku pour l'hébérgement. 

Heroku est un service d'hébergement en nuage qui permet de déployer et de gérer des applications web, y compris des applications Node.js comme l'API de conversion de chiffres romains.

### Prérequis pour déployer l'API sur Heroku :

- Créer un compte Heroku sur Heroku.com.
- Installer l'interface en ligne de commande Heroku (CLI) pour le système d'exploitation en suivant les instructions de la documentation Heroku CLI.
- Connecter à Heroku en ouvrant le terminal et exécuter la commande suivante pour se connecter à votre compte Heroku en utilisant la CLI :
````
heroku login
````
- Suiver les instructions à l'écran pour vous authentifier.

- Créer un fichier Procfile : Heroku utilise un fichier appelé Procfile à la racine de votre projet pour déterminer comment exécuter l'application et ajouter le contenu suivant pour indiquer à Heroku comment lancer l'API :
````
web: node server.js
````

Cela indique à Heroku d'exécuter la commande node server.js lorsque l'application est déployée.


### Déployer l'application  
Utiliser la CLI Heroku pour déployer votre application en exécutant la commande suivante depuis le répertoire racine de votre projet :
````
git add .
git commit -m "Initial commit"
heroku create
git push heroku main
````

Cela créera une nouvelle application Heroku, ajoutera le code source à cette application et le déploiera sur Heroku. Lier avec le repo GitLab existant pour faciliter le CD.

### Configuration du Pipeline CI/CD :

- Créez un fichier .gitlab-ci.yml à la racine de votre projet GitLab 
- Ajoutez le contenu suivant à votre fichier .gitlab-ci.yml pour configurer le pipeline de déploiement sur Heroku :

````
stages:
  - deploy

deploy_to_heroku:
  stage: deploy
  only:
    - main  
  script:
    - apt-get update -qy
    - apt-get install -y ruby-dev
    - gem install dpl
    - dpl --provider=heroku --app=NOM_DE_VOTRE_APP_HEROKU --api-key=HEROKU_API_KEY
````
- Remplacer NOM_DE_VOTRE_APP_HEROKU par le nom de l'application Heroku et le HEROKU_API_KEY par l'API key Heroku
- Enregistrez ce fichier et poussez-le vers votre repo GitLab.
- Accédez aux paramètres de votre projet GitLab, puis à l'onglet "CI/CD" ou "Pipelines".

Lorsque vous apportez des modifications à votre repo GitLab (branche main), GitLab CI/CD déclenchera automatiquement un pipeline de déploiement sur Heroku.

Vous pouvez suivre l'état du pipeline dans GitLab pour vérifier si le déploiement s'est déroulé avec succès ou s'il y a des erreurs.

Consulter la documentation Heroku CLI pour en savoir plus sur les commandes disponibles.
