# Kit de démarrage pour créer une application React (Redux, ES6)

## Pour commencer
1. **Installer [Node 6](https://nodejs.org)**. Besoin d'exécuter plusieurs versions de Node ? Utiliser [nvm](https://github.com/creationix/nvm) ou [nvm-windows](https://github.com/coreybutler/nvm-windows)
2. **Cloner ce dépôt.** - `git clone https://bitbucket.org/si2m_cds_dev_team/react-starter-example.git` ou [download the zip](https://bitbucket.org/si2m_cds_dev_team/react-starter-example/downloads)
3. **Assurez-vous que vous êtes dans le répertoire que vous venez de créer.** - `cd si2m-react-starter-example`
4. **Installer les packages Node.** - `yarn` ou `npm install` ou `npm i`
5. **Lancer l'application.** - `npm start -s` Ceci lancera le processus de construction automatique, le démarrage d'un serveur web. Cette commande va surveiller tous vos fichiers. A chaque fois que vous effectuer une modification, le code est reconstruit, est linter, et les tests sont exécutés automatiquement. Remarque: L'option -s est facultative. Il active le mode silencieux qui supprime les messages inutiles lors de la construction.
6. **Installer [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) et [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** dans Chrome.

## Release

**Lancer la construction du build.** - `npm run build -s`

Cette commande effectuera les tâches suivantes:  
  * Suppression du dossier `dist`  
  * Copie du fichier `env-conf.js`  
  * Construction de l'application en mode `production`  
  * Modification du fichier `index.html` pour inclure les scripts finaux.  
  * Création d'une archive compressé.  

## Test

**Lancer les tests.** - `npm run test`

**Issues:**
  * Prises en charge du jsx avec mocha en mode `watch`.
  Pour éviter que `Eslint` trigger des erreurs liées aux `jsx`, ajouter ces lignes au début du fichier
  ```
    /* eslint react/jsx-filename-extension:0 */  
    /* eslint import/no-extraneous-dependencies:0 */
  ```

## Démarrer un nouveau projet

1. **Copier le contenu du starter kit** dans le dossier de destination.  
2. **Supprimer les fichiers non voulu de l'exemple** (application contact).
3. **Installer les packages Node.** - `yarn` ou `npm install` ou `npm i`  
4. **Lancer l'application.** - `npm start -s`
