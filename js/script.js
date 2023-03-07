//-------------------- Générer aléatoirement une combinaison

let colors = ["bleu", "rouge", "jaune", "vert", "violet", "orange", "gris", "rose"];
let pions = 4;
let combination = [];

function createCombination(){
    //Tant qu'il n'y a pas 4 couleurs données
    while (combination.length < pions) {
        //Générer un index aléatoirement
        let index = Math.floor(Math.random() * 7);
        //Si la combinaison ne contient pas encore la couleur sélectionnée
        if (!combination.includes(colors[index])) {
            //Ajouter la couleur à la combinaison
            combination.push(colors[index]);
        }
    }
}
createCombination()
console.log(combination)



//-------------------- Clôner le pion sélectionné et le descendre dans la section "essai1" (4 pions max)

let test = 10; //10 essais de 4(=pions) couleurs
let colorMax = 0

function move(essai, color, divLesEssais, couleursBienPlacees, couleursCorrectes){
    document.getElementById(essai).appendChild(document.getElementById(color).cloneNode(true));
    colorMax ++;
    getColors(divLesEssais, couleursBienPlacees, couleursCorrectes);
}

function moveColor(color){
    if (colorMax >= pions && colorMax < (pions * 2)){
        move('essai2', color, '#essai2', 'couleursBienPlacees2', 'couleursCorrectes2');
    } else if (colorMax >= (pions * 2) && colorMax < (pions * 3)) {
        move('essai3', color, '#essai3', 'couleursBienPlacees3', 'couleursCorrectes3');
    } else if (colorMax >= (pions * 3) && colorMax < (pions * 4)) {
        move('essai4', color, '#essai4', 'couleursBienPlacees4', 'couleursCorrectes4');
    } else if (colorMax >= (pions * 4) && colorMax < (pions * 5)) {
        move('essai5', color, '#essai5', 'couleursBienPlacees5', 'couleursCorrectes5');
    } else if (colorMax >= (pions * 5) && colorMax < (pions * 6)) {
        move('essai6', color, '#essai6', 'couleursBienPlacees6', 'couleursCorrectes6');
    } else if (colorMax >= (pions * 6) && colorMax < (pions * 7)) {
        move('essai7', color, '#essai7', 'couleursBienPlacees7', 'couleursCorrectes7');
    } else if (colorMax >= (pions * 7) && colorMax < (pions * 8)) {
        move('essai8', color, '#essai8', 'couleursBienPlacees8', 'couleursCorrectes8');
    } else if (colorMax >= (pions * 8) && colorMax < (pions * 9)) {
        move('essai9', color, '#essai9', 'couleursBienPlacees9', 'couleursCorrectes9');
    } else if (colorMax >= (pions * 9) && colorMax < (pions * 10)) {
        move('essai10', color, '#essai10', 'couleursBienPlacees10', 'couleursCorrectes10');
    } else if (colorMax >= (pions * 10)) {
        document.getElementsByClassName("pion").disabled = true;
    } else {
        move('essai1', color, '#essai1', 'couleursBienPlacees1', 'couleursCorrectes1');
    }

    if(test<=0){
        document.getElementsByClassName("pion").disabled = true; //ne fonctionne pas
        alert("Dommage ! Vous avez atteint le nombre maximal de tentatives...");
    }
    /*else {
        test-=1
        document.getElementById("numberOfAttempts").innerHTML = test + " essais restants"
    }*/
}



//-------------------- Récupérer les propositions de couleurs

function getColors(divLesEssais, couleursBienPlacees, couleursCorrectes){
    let container = document.querySelector(divLesEssais)
    let couleursChoisies = container.querySelectorAll('div.couleur > p'); //divLesEssais = par exemple 'essai2 .couleur > p'
    console.log("couleursChoisies : ", couleursChoisies)

    let pion1 = couleursChoisies[0].innerHTML
    let pion2 = couleursChoisies[1].innerHTML
    let pion3 = couleursChoisies[2].innerHTML
    let pion4 = couleursChoisies[3].innerHTML
    console.log("pion1 : ", pion1)

    let proposition = [pion1, pion2, pion3, pion4]
    console.log("proposition : ", proposition)

    checkCombination(combination, proposition, couleursCorrectes, couleursBienPlacees);

}



//-------------------- Vérifier si les couleurs sont OK

function checkCombination(combination, proposition, couleursCorrectes, couleursBienPlacees){
    let goodColors = 0
    let placedColors = 0

    for (const couleur of combination){
        for (let j=0; j<proposition.length; j++){

            //si la couleur proposée est au même emplacement que la couleur à trouver
            if ((proposition[j] != null) && (combination[j] != null) && proposition[j] == combination[j]){
                proposition[j] = null;
                placedColors += 1
            } 

            //si la couleur proposée fait partie des couleurs à trouver
            else {
                if ((proposition[j] != null) && (combination[j] != null) && (proposition[j] == couleur)){
                    proposition[j] = null
                    goodColors += 1
                } 
            }
        }
    }

    //Afficher les indices en fonction des couleurs proposées
    hints(placedColors, goodColors, couleursCorrectes, couleursBienPlacees);

}



//-------------------- Afficher les indices de placement

function hints(placedColors, goodColors, couleursCorrectes, couleursBienPlacees) {

    //Couleurs correctes et bien placées
    if (placedColors == 0 || placedColors == 1){
        document.getElementById(couleursBienPlacees).innerHTML = placedColors + " couleur correctement placée." 
    } else if (placedColors == 4) {
        document.getElementById(couleursBienPlacees).innerHTML = "BRAVO ! La combinaison est correcte !"
        document.getElementById(couleursCorrectes).innerHTML.display = none
        document.getElementById("numberOfAttempts").innerHTML.display = none
    } else {
        document.getElementById(couleursBienPlacees).innerHTML = placedColors + " couleurs correctement placées." 
    }

    //Couleurs correctes
    if (goodColors == 0 || goodColors == 1){
        document.getElementById(couleursCorrectes).innerHTML = "Parmi les autres : " + goodColors + " couleur correcte."
    } else {
        document.getElementById(couleursCorrectes).innerHTML = "Parmi les autres : " + goodColors + " correctes."
    }
}



//-------------------- Faire apparaître les règles du jeu au survol

let boutonRegle = document.getElementById("rules");
boutonRegle.onclick = function afficherRegles() {
    if (document.getElementById("rulesDetails").style.display == "none") {
        document.getElementById("rulesDetails").style.display = "block"
    } else {
        document.getElementById("rulesDetails").style.display = "none"
    }
}





/*-------------------- Lancer/arrêter le jeu [OLD]
let essai = 10; 
function gameOK(){  
    combinationOK(); 
    if(essai<1){
        document.getElementById("boutonJouer").disabled = true;
        document.getElementById("boutonEffacer").disabled = true;
        document.getElementsByName('pion').disabled = true;
        document.getElementById("essaisMax").innerHTML = "Dommage ! Vous avez atteint le nombre maximal de tentatives...";
    } else if (combinationOK() == true) {
        document.getElementById("boutonJouer").disabled = true;
        document.getElementById("boutonEffacer").disabled = true;
        //document.getElementById("gagne").innerHTML = "Félicitations !";  
    } else {
        //combinationOK(); 
        essai-=1
        document.getElementById("numberOfAttempts").innerHTML = "Nombre d'essais restants : " + essai
    }
}
*/



/*---------------------Permettre de changer de pion [A FAIRE]
document.getElementsByClassName("essaisCLASS").onclick = function () {
    document.getElementById('essai2').appendChild(document.getElementById(color))
};
*/


//---------------------JEST

module.exports = {
    colors,
    pions,
    combination,
    test, 
    colorMax,
    createCombination,
    move,
    moveColor,
    getColors,
    checkCombination,
    hints
}