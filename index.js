// Score variables
let comScore = 0;
let userScore = 0;

document.getElementById("us").innerHTML= userScore;
document.getElementById("cs").innerHTML= comScore;

//Played variables
let user = 3;
let com = 3;





// rock button
let roc = document.getElementById("roc");
roc.addEventListener('click', event => {

    //Makes the user equal rock
    user = 0;
    document.getElementById("img").src= "rock.png";

    //Makes the com
    com = Math.floor(Math.random() * 3);

    // Scores
    score(0,com)

    // Makes com output
    // if (com == 0) {
    //     document.getElementById("cp").innerHTML= "rock";
    //     document.getElementById("us").innerHTML= userScore;
    //     document.getElementById("cs").innerHTML= comScore;
    // } else if (com == 1) {
    //     document.getElementById("cp").innerHTML= "paper";
    //     document.getElementById("us").innerHTML= userScore;
    //     document.getElementById("cs").innerHTML= comScore;
    // } else {
    //     document.getElementById("cp").innerHTML= "scisssors";
    //     document.getElementById("us").innerHTML= userScore;
    //     document.getElementById("cs").innerHTML= comScore;
    // }

    //Scoring
    // if (user == 0 && com == 1){
    //     comScore = comScore + 1;
    // } else if (user == 0 && com == 2){
    //     userScore = userScore + 1;
    // }
})





// paper button
let pap = document.getElementById("pap");
pap.addEventListener('click', event => {

    // Makes the user equal to paper
    user = 1;
    document.getElementById("img").src= "paper.png";

    //Makes the com
    com = Math.floor(Math.random() * 3);

    // Scores
    score(1,com)

    // Makes com output
    // if (com == 0) {
    //     document.getElementById("cp").innerHTML= "rock";
    //     document.getElementById("us").innerHTML= userScore;
    //     document.getElementById("cs").innerHTML= comScore;
    // } else if (com == 1) {
    //     document.getElementById("cp").innerHTML= "paper";
    //     document.getElementById("us").innerHTML= userScore;
    //     document.getElementById("cs").innerHTML= comScore;
    // } else {
    //     document.getElementById("cp").innerHTML= "scisssors";
    //     document.getElementById("us").innerHTML= userScore;
    //     document.getElementById("cs").innerHTML= comScore;
    // }

    //Scoring
    // if (user == 1 && com == 2){
    //     comScore = comScore + 1;
    // } else if (user == 1 && com == 0){
    //     userScore = userScore + 1;
    // }
})





//scissors button
let sci = document.getElementById("sci");
sci.addEventListener('click', event => {

    // Makes the user equal to scissors
    user = 2;
    document.getElementById("img").src= "scissor.png";

    //Makes the com
    com = Math.floor(Math.random() * 3);

    // Scores
    score(2,com)

    // Makes com output
    // if (com == 0) {
    //     document.getElementById("img2").innerHTML= "rock";
    //     document.getElementById("us").innerHTML= userScore;
    //     document.getElementById("cs").innerHTML= comScore;
    // } else if (com == 1) {
    //     document.getElementById("cp").innerHTML= "paper";
    //     document.getElementById("us").innerHTML= userScore;
    //     document.getElementById("cs").innerHTML= comScore;
    // } else {
    //     document.getElementById("cp").innerHTML= "scisssors";
    //     document.getElementById("us").innerHTML= userScore;
    //     document.getElementById("cs").innerHTML= comScore;
    // }

    //Scoring
    // if (user == 2 && com == 0){
    //     comScore = comScore + 1;
    // } else if (user == 2 && com == 1){
    //     userScore = userScore + 1;
    // }
})


// creates the scoring function
function score(a,b) {
    if(a == 0 && b == 1){
        comScore = comScore + 1;
        document.getElementById("img2").src= "paper2.png";
        document.getElementById("us").innerHTML= userScore;
        document.getElementById("cs").innerHTML= comScore;
    } else if (a == 0 && b == 2){
        userScore = userScore + 1;
        document.getElementById("img2").src= "scissor2.png";
        document.getElementById("us").innerHTML= userScore;
        document.getElementById("cs").innerHTML= comScore;
    } else if(a == 1 && b == 0){
        userScore = userScore + 1;
        document.getElementById("img2").src= "rock2.png";
        document.getElementById("us").innerHTML= userScore;
        document.getElementById("cs").innerHTML= comScore;
    } else if(a == 1 && b == 2){
        comScore = comScore+1;
        document.getElementById("img2").src= "scissor2.png";
        document.getElementById("us").innerHTML= userScore;
        document.getElementById("cs").innerHTML= comScore;
    } else if (a == 2 && b == 0){
        comScore = comScore+1;
        document.getElementById("img2").src= "rock2.png";
        document.getElementById("us").innerHTML= userScore;
        document.getElementById("cs").innerHTML= comScore;
    } else if (a ==2 && b == 1){
        userScore = userScore + 1;
        document.getElementById("img2").src= "paper2.png";
        document.getElementById("us").innerHTML= userScore;
        document.getElementById("cs").innerHTML= comScore;
    } else if (a == 0 && b == 0){
        document.getElementById("img2").src= "rock2.png";
        document.getElementById("us").innerHTML= userScore;
        document.getElementById("cs").innerHTML= comScore;
    } else if (a == 1 && b == 1){
        document.getElementById("img2").src= "paper2.png";
        document.getElementById("us").innerHTML= userScore;
        document.getElementById("cs").innerHTML= comScore;
    } else if (a == 2 && b == 2){
        document.getElementById("img2").src= "scissor2.png";
        document.getElementById("us").innerHTML= userScore;
        document.getElementById("cs").innerHTML= comScore;
    }
}
