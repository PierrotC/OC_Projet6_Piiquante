OPENCLASSROOMS -- PARCOURS DEVELOPPEUR WEB -- PROJET 6 HOT TAKES -- PIERRE COURTEILLE

(For English instructions, see below)

COMMENT INSTALLER

- Clonez ce repository localement, c'est votre backend
- Clonez le frontend depuis cette adresse : https://github.com/OpenClassrooms-Student-Center/Web-Developer-P6
- Dans le dossier backend, créez un fichier .env
- Ajoutez-y les lignes suivantes :
    MONGO_URI = ''
    SIGN = ''
- Entre les apostrophes à la ligne MONGO_URI, copiez les informations de connexion à votre base de données MongoDB
- Entre les apostrophes à la ligne SIGN, créez une signature complexe pour le JSON Web Token (une chaîne de caractères difficile à deviner)
- (optionnel) Si vous souhaitez configurer un port personnalisé, ajoutez également la ligne PORT = suivi de la valeur de votre port
- Dans la console, depuis le dossier backend, exécutez la commande `npm install`
- Toujours depuis le dossier backend, exécutez la commande `node server`
- Dans une console séparée, depuis le dossier frontend, exécutez la commande `npm run start`
- Ouvrez votre navigateur à l'adresse `localhost:4200`
- Vous pouvez naviguer !

FONCTIONNEMENT

- Créez d'abord un compte depuis la page `Sign up`
- Entrez une adresse mail et un mot de passe
    !! Le mot de passe DOIT contenir au moins une minuscule, une majuscule, un chiffre et un caractère spécial ou l'application renverra une erreur HTTP 400 !!
- Si vous essayez de vous connecter plus tard, entrez ces identifiants sur la page `Login`
- Une fois sur la page principale, vous verrez les sauces ajoutées par les utilisateurs

FONCTIONNALITES

- Ajoutez une nouvelle sauce à la page `Add Sauce`
    * Entrez les informations, ajoutez une image et sélectionnez la puissance
- Inspectez une sauce en cliquant sur sa carte
    * Notez-la en choisissant Like ou Dislike ou retirez votre note en cliquant à nouveau
    * Si c'est une sauce que vous avez ajouté, vous pouvez la modifier ou la supprimer


~~~~~~~~~~~~ ENGLISH ~~~~~~~~~~~~

HOW TO INSTALL

- Clone this repository locally, this is your backend
- Clone the frontend from this address : https://github.com/OpenClassrooms-Student-Center/Web-Developer-P6
- In your backend folder, create a file .env
- Add the following lines to it :
    MONGO_URI = ''
    SIGN = ''
- Between the apostrophes of the line MONGO_URI, copy your MongoDB database connection info
- Between the apostrophes of the line SIGN, create a complex signature for the JSON Web Token (a string of hard to guess characters)
- (optional) If you want to setup your own connection port, add the line PORT = followed by your preferred port value
- In the console, from the backend folder, run the command `npm install`
- Again from the backend folder, run the command `node server`
- In another console, from the frontend folder, run the command `npm run start`
- Open your browser at the URL `localhost:4200`
- You can browse the app !

HOW IT WORKS

- First, create an account at the page `Sign up`
- Choose an email address and a password
    !! The password MUST include at least a lowercase letter, an uppercase letter, a number and a special character otherwise the app will return an HTTP error of 400 !!
- If you want to use the app later, just login in the `Login` page with your info
- Once on the landing page, you will see all the sauces added by the users

WHAT YOU CAN DO

- Add a new sauce at `Add Sauce`
    * Fill in the characteristics of your sauce, add an image and choose the strength
- See a specific sauce by clicking the card
    * Give it a rating by clicking the appropriate thumb or cancel your rating by clicking again
    * If you added this sauce, you will have the option to delete or modify it