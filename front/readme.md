# Front Projet e-commerce SILL

Vous voulez accéder au front ? Ca tombe bien c'est ici.

## Installation

### Pré-requis

Vous devez au préalable installer npm et n

Pour npm :

    sudo apt-get install npm

Pour n :

    sudo npm -g install n

Ensuite il faut cloner le dossier git front à la racine de votre projet (/sill) :

http://gitlab.beable.fr/sill/front

### Lancement du container

Lancer le container du front. Pour cela, il faut se placer dans /sill/docker et faire :

    docker-compose -f front.yml up -d

### Lancement des imports

Effectuer la mise à jour :

    sudo n latest

Puis l'installation :

    npm install

### Lancement de webpack

Pour que les modifications effectuées soient prises immédiatement en compte :

    node_modules/.bin/webpack --watch

