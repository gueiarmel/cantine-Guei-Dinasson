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
   
//     // le plat choisi
    if(codePlat >= 1 && codePlat <= 3){
         console.log(` client : ${client}`);
         console.log("plat choisi :", nomPlat);
         console.log("prix unitaire :" , prixUnitaire , "FCFA" )
     }
//     // Créer la fonction de calcul
//     function 
//     calculerTotal(prixUnitaire, quantite) { 
//     return prixUnitaire * quantite;
//     }
//     // Calculer le montant total
//     const total = calculerTotal(prixUnitaire, quantite);

//     // le recapitulatif
//     console.log("==== CAISSE DE LA CANTINE ====");
//     console.log(`Client : ${client}`)
//     console.log(`Plat choisi par ${client} : ${nomPlat}`);
//     for (let i = 1; i <= quantite; i++) {
//         console.log(
//             `Portion ${i} : ${nomPlat} - ${prixUnitaire} FCFA`)
//     }
//     console.log(`Quantité" : ${quantite}`);
//     console.log(`Total à payer : ${total} FCFA`);

//     // Vérification du paiement
//     if (montantVerse >= total) {
//         const monnaie = montantVerse - total;
//         console.log(`Montant versé : ${montantVerse} FCFA`);
//         console.log(`Monnaie à rendre : ${monnaie} FCFA`);
//     } else {
//         const manque = total - montantVerse;
//         console.log(`montant manquant : ${manquant} FCFA`)
        


//     }