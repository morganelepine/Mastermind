//-------------------- Choisir la combinaison à trouver

/*
let chosenColor1 = prompt("Choisissez le premier pion à trouver", "Le premier pion choisi");
let chosenColor2 = prompt("Choisissez le deuxième pion à trouver", "Le deuxième pion choisi");
let chosenColor3 = prompt("Choisissez le troisième pion à trouver", "Le troisième pion choisi");
let chosenColor4 = prompt("Choisissez le quatrième pion à trouver", "Le quatrième pion choisi");

let combinaison = [chosenColor1, chosenColor2, chosenColor3, chosenColor4] 
*/

let combinaison = ["bleu", "jaune", "rose", "orange"]


//-------------------- Clôner le pion sélectionné et le descendre dans la section "essai1" (4 pions max)

let essai = 10; 
let colorMax = 0
function moveColor(color){
    if (colorMax>=4 && colorMax<8){
        document.getElementById('essai2').appendChild(document.getElementById(color).cloneNode(true))
        colorMax ++
        combinationOK('#essai2', 'couleursBienPlacees2', 'couleursCorrectes2')
    } else if (colorMax>=8 && colorMax<12) {
        document.getElementById('essai3').appendChild(document.getElementById(color).cloneNode(true))
        colorMax ++
        combinationOK('#essai3', 'couleursBienPlacees3', 'couleursCorrectes3')
    } else if (colorMax>=12 && colorMax<16) {
        document.getElementById('essai4').appendChild(document.getElementById(color).cloneNode(true))
        colorMax ++
        combinationOK('#essai4', 'couleursBienPlacees4', 'couleursCorrectes4')
    } else if (colorMax>=16 && colorMax<20) {
        document.getElementById('essai5').appendChild(document.getElementById(color).cloneNode(true))
        colorMax ++
        combinationOK('#essai5', 'couleursBienPlacees5', 'couleursCorrectes5')
    } else if (colorMax>=20 && colorMax<24) {
        document.getElementById('essai6').appendChild(document.getElementById(color).cloneNode(true))
        colorMax ++
        combinationOK('#essai6', 'couleursBienPlacees6', 'couleursCorrectes6')
    } else if (colorMax>=24 && colorMax<28) {
        document.getElementById('essai7').appendChild(document.getElementById(color).cloneNode(true))
        colorMax ++
        combinationOK('#essai7', 'couleursBienPlacees7', 'couleursCorrectes7')
    } else if (colorMax>=28 && colorMax<32) {
        document.getElementById('essai8').appendChild(document.getElementById(color).cloneNode(true))
        colorMax ++
        combinationOK('#essai8', 'couleursBienPlacees8', 'couleursCorrectes8')
    } else if (colorMax>=32 && colorMax<36) {
        document.getElementById('essai9').appendChild(document.getElementById(color).cloneNode(true))
        colorMax ++
        combinationOK('#essai9', 'couleursBienPlacees9', 'couleursCorrectes9')
    } else if (colorMax>=36 && colorMax<40) {
        document.getElementById('essai10').appendChild(document.getElementById(color).cloneNode(true))
        colorMax ++
        combinationOK('#essai10', 'couleursBienPlacees10', 'couleursCorrectes10')
    } else if (colorMax>=40) {
        document.getElementsByClassName("pion").disabled = true;
    } else {
        document.getElementById('essai1').appendChild(document.getElementById(color).cloneNode(true))
        colorMax ++
        combinationOK('#essai1', 'couleursBienPlacees1', 'couleursCorrectes1')
    }

    if(essai<=0){
        document.getElementsByClassName("pion").disabled = true; //ne fonctionne pas
        alert("Dommage ! Vous avez atteint le nombre maximal de tentatives...")
    /*} else if (essai>10) {
        document.getElementById("numberOfAttempts").disabled = true;*/
    } else {
        essai-=1
        document.getElementById("numberOfAttempts").innerHTML = essai + " essais restants"
    }
}


//-------------------- Vérifier si les couleurs sont OK

function combinationOK(divLesEssais, couleursBienPlacees, couleursCorrectes){
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

    let result = ""
    let goodColors = 0
    let placedColors = 0

    for (let i=0; i<combinaison.length; i++){
        for (let j=0; j<proposition.length; j++){

            //si la couleur proposée est au même emplacement que la couleur à trouver
            if ((proposition[j] != null) && (combinaison[j] != null) && proposition[j] == combinaison[j]){
                proposition[j] = null;
                placedColors += 1
            } 

            //si la couleur proposée fait partie des couleurs à trouver
            else {
                if ((proposition[j] != null) && (combinaison[j] != null) && (proposition[j] == combinaison[i])){
                    proposition[j] = null
                    goodColors += 1
                } 
            }
        }
    }

    if (placedColors == 0 || placedColors == 1){
        document.getElementById(couleursBienPlacees).innerHTML = placedColors + " couleur correctement placée." 
    } else if (placedColors == 4) {
        result = true
        document.getElementById(couleursBienPlacees).innerHTML = "BRAVO ! La combinaison est correcte !"
        document.getElementById(couleursCorrectes).innerHTML.display = none
        document.getElementById("numberOfAttempts").innerHTML.display = none
    } else {
        document.getElementById(couleursBienPlacees).innerHTML = placedColors + " couleurs correctement placées." 
    }

    if (goodColors == 0 || goodColors == 1){
        document.getElementById(couleursCorrectes).innerHTML = "Parmi les autres : " + goodColors + " couleur correcte."
    } else {
        document.getElementById(couleursCorrectes).innerHTML = "Parmi les autres : " + goodColors + " correctes."
    }

    return result
    
}


//-------------------- Faire apparaître les règles du jeu au survol

document.getElementById("rules").addEventListener("mouseover", () => {
    document.getElementById("rulesDetails").style.display = "block";
});
document.getElementById("rules").addEventListener("mouseout", () => {
    document.getElementById("rulesDetails").style.display = "none";
});



/*-------------------- Lancer/arrêter le jeu

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




/*---------------------Permettre de changer de pion [EN COURS]


document.getElementsByClassName("essaisCLASS").onclick = function () {
    document.getElementById('essai2').appendChild(document.getElementById(color))

};
*/
