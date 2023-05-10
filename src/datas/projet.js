import KasaAccueil from "../assets/kasa/kasa-accueil.png"
import kasaApropos from "../assets/kasa/kasa-a-propos.png"
import kasaFicheDetailLocation from "../assets/kasa/kasa-fiche-location.png"

import galleryAccueil from "../assets/gallery/gallery.png"
import galleryLoader from "../assets/gallery/gallery-loader-biseray.png"
import galleryMobile from "../assets/gallery/gallery-biseray-mobile.png"
import galleryFicheDetails from "../assets/gallery/fiche-photo-gallery.png"


import kanapFormulairePanier from "../assets/kanap/formulaire-panier.png"
import kanapPanier from "../assets/kanap/kanap-panier.png"
import kanapProduit from "../assets/kanap/produit-kanap.png"
import kanapAccueil from "../assets/kanap/site-kanap-accueil.png"


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
        "description": " Le site Kasa est un site qui regroupe plusieurs locations. Sur ce site j'ai utiliser React nous retrouvont plusieurs composant reutilisable.",
        "outil": [
            reactLogo,
            cssLogo,
            
            
        ],

        "link": "https://biseray.github.io/kasa"

        

    },
    {
        "id": "ad4633",
        "title": "Galerie photo ",



        "pictures": [galleryLoader, galleryAccueil, galleryMobile, galleryFicheDetails],
        "description": " Description ",
        "outil": [
            htmlLogo,
            jsLogo,
            cssLogo,
             


        ],
 
        "link": "https://biseray.github.io/galleryPhoto-/",

    },  
    {
        "id": "ad4634",
        "title": "Kanap ",



        "pictures": [kanapAccueil, kanapFormulairePanier, kanapPanier, kanapProduit,  ],
        "description": " Description ",
        "outil": [
            htmlLogo,
            cssLogo,
           jsLogo,


        ],

    },

    {
        "id": "ad4635",
        "title": "OhMyFood ",



        "pictures": [ohmyfoodAccueil,ohmyfoodMenu, ohmyfoodMobile,],
        "description": " Description ",
        "outil": [
            htmlLogo,
            cssLogo,
           


        ],

        "link": "https://biseray.github.io/p3_oc_biseray/"

    },

]

export default projetList;