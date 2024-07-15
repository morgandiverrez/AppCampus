# AppCampus

## Table des Matières
- [Description](#description)
- [Fonctionnalités](#fonctionnalités)
- [Technologies](#technologies)
- [Installation](#installation)
- [Déploiement](#déploiement)
- [Contribuer](#contribuer)
- [Licence](#licence)

## Description
AppCampus est une application cross-platform développée en JSX avec Expo et React-Native. L'objectif est de fournir une application comprenant plusieurs modules destinés aux associations et aux étudiants d'un campus universitaire.

## Fonctionnalités
- **Fil d'Actualité** : Un module connecté à la plateforme Merer (https://github.com/morgandiverrez/merer) pour afficher les actualités des associations du campus.
- **Emploi du Temps** : Affiche les emplois du temps des étudiants selon leur établissement.
- **Horaires de Bus** : Fournit les horaires des bus aux stations proches des lieux d'études.

## Technologies
- **Framework** : Expo et React-Native
- **Langage** : JSX
- **Gestion des dépendances** : Yarn

## Installation
Pour installer et configurer ce projet localement, suivez ces étapes :

1. Clonez le dépôt :
    ```bash
    git clone https://github.com/votre-utilisateur/AppCampus.git
    cd AppCampus
    ```

2. Installez les dépendances nécessaires :
    ```bash
    yarn add @react-navigation/native
    expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
    yarn add @react-navigation/stack
    yarn add @react-navigation/bottom-tabs
    ```

## Déploiement
Pour déployer cette application, vous pouvez utiliser Expo's build service pour générer les fichiers nécessaires pour iOS et Android.

1. Assurez-vous que toutes les dépendances sont installées.
2. Exécutez la commande suivante pour créer une build :
    ```bash
    expo build:android
    expo build:ios
    ```

Suivez les instructions d'Expo pour déployer les builds sur les app stores correspondants.

## Contribuer
Les contributions sont les bienvenues ! Pour proposer des modifications, suivez ces étapes :

1. Forkez le projet.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/NouvelleFonctionnalité`).
3. Commitez vos modifications (`git commit -m 'Ajoute une nouvelle fonctionnalité'`).
4. Poussez votre branche (`git push origin feature/NouvelleFonctionnalité`).
5. Ouvrez une Pull Request.

## Licence
Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
