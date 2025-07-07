# Structure du Projet, le projet est stucture comme suit : 

![Texte alternatif](/mini-projet/src/assets/structureprojet.png)

Comme, vous pouvez le voir sur l'image:

Nous avons créé dans le dossier assets, les dossiers, components, layouts et pages,
contenant chacun respectivement: 
    components :
        - Header.tsx : l'entete de notre page d'accueil. Il contient les liens, le logo, profile et la barre de recherche
        - Hero.tsx: contient le titre de notre page à droit et une image descriptive du projet à gauche.
        - Feature.tsx: contient les fonctionnalités principales du projet.
        - Sidebar.tsx: contient la navigation latérale pour dashboard
        - Footer.tsx: à son tour, contient le pieds de page avec 4 colonnes.
    layouts: 
        - MainLayout.tsx : c'est le Layout principal avec Header et Footer
        - SedebarLayout.tsx : Layout avec sidebar fixe
    pages : Dashboard.tsx : c'est la page utilisant le sideba.

    Enfin: App.tsx, main.tsx et index.css, des fichiers primordiaux pour l'execution du projet.
