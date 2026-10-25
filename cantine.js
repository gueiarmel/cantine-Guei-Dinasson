const client = "Awa " ;
const codePlat = 1;
let quantite = "3"
let montantVerse = 5000;
// conversion de la quantité en nombre
quantite = Number(quantite);

// Détermine le prix unitaire du plat
let nomPlat =  " "
let prixUnitaire = 0;

if (codePlat === 1)  {
    nomPlat = "Attiéké-poisson";
       prixUnitaire = 1500;
}
else if (codePlat === 2) {
        nomPlat = "Riz-poulet";
       prixUnitaire = 2000;
}
else { 
        nomPlat = "alloco-oeuf";
        prixUnitaire = 1000;
    }
   
    // le plat choisi
    if(codePlat >= 1 && codePlat <= 3){
        console.log(` client : ${client}`);
        console.log("plat choisi :", nomPlat);
        console.log("prix unitaire :" , prixUnitaire , "FCFA" )
    }