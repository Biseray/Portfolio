import KasaAccueil from "../assets/kasa/kasa-accueil.png"
import kasaApropos from "../assets/kasa/kasa-a-propos.png"
import kasaFicheDetailLocation from "../assets/kasa/kasa-fiche-location.png"

import galleryAccueil from "../assets/gallery/gallery.png"
import galleryLoader from "../assets/gallery/gallery-loader-biseray.png"
import galleryMobile from "../assets/gallery/gallery-biseray-mobile.png"
import galleryFicheDetails from "../assets/gallery/fiche-photo-gallery.png"


import GMaccueil from "../assets/GreenMarket/accueil.jpg"
import GMficheProduit from "../assets/GreenMarket/ficheProduit.jpg"
import GMapropos from "../assets/GreenMarket/apropos.jpg"
import GMlesProduits from "../assets/GreenMarket/lesProduits.jpg"
import GMPanier from "../assets/GreenMarket/panier.jpg"


import ohmyfoodMobile from "../assets/ohmyfood/ohmyfood-mobile.png"
import ohmyfoodMenu from "../assets/ohmyfood/ohmyfood-page-menu.png"
import ohmyfoodAccueil from "../assets/ohmyfood/ohmyfoodaccueil.png"



import reactLogo from "../assets/outils/react.png"
import cssLogo from "../assets/outils/css.png"
import htmlLogo from "../assets/outils/html.png"
import jsLogo from "../assets/outils/js.png"
const projetList = [
    {
        "id": "ad4632",
        "title": "Kasa ",



        "pictures": [KasaAccueil, kasaApropos, kasaFicheDetailLocation],
        "description": "Le site Kasa est un site qui regroupe plusieurs locations de logements.Sur ce site j'ai utilisé React, nous retrouvons plusieurs composants réutilisables. ",
        "outil": [
            reactLogo,
            cssLogo,


        ],

        "link": "https://biseray.github.io/kasa"



    },
    {
        "id": "ad4635",
        "title": "OhMyFood ",



        "pictures": [ohmyfoodAccueil, ohmyfoodMenu, ohmyfoodMobile,],
        "description": "Le site OhMyFood est un site qui affiche des menus pour plusieurs restaurants entant développer en mobile first . Il y a plusieurs animations et transitions présentes sur le site",
        "outil": [
            htmlLogo,
            cssLogo,



        ],

        "link": "https://biseray.github.io/p3_oc_biseray/"

    },

    {
        "id": "ad4633",
        "title": "Galerie photo ",



        "pictures": [galleryLoader, galleryAccueil, galleryMobile, galleryFicheDetails],
        "description": "Ce site est une galerie photos qui affiche quelques photos,  on peut cliquer sur les images pour avoir l'image agrandie  ",
        "outil": [
            htmlLogo,
            jsLogo,
            cssLogo,



        ],

        "link": "https://biseray.github.io/galleryPhoto-/",

    },
    {
        "id": "ad4634",
        "title": "GreenMarket ",



        "pictures": [
            GMaccueil,
            GMficheProduit,
            GMlesProduits,
            GMPanier,
            GMapropos,
        ],
        "description": " Ce site a été créé en utilisant React et est un site e- commerce.Il comprend plusieurs composants, tels que le carrousel, les cardPlant, ainsi qu'une page panier.",
        "outil": [
            reactLogo,
            cssLogo,


        ],
        "link": "https://biseray.github.io/GreenMarket/",
    },


]

export default projetList;