function rollDice() {
let randomNumber1= Math.floor(Math.random() * 6) + 1;

let randomImage= "dice"+ randomNumber1 + ".png";
let randomImageSrc="./images/" + randomImage;
let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSrc);

let randomNumber2= Math.floor(Math.random() * 6) + 1;

let randomImage2= "dice"+ randomNumber2 + ".png";
let randomImageSrc2="./images/" + randomImage2;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

if (randomNumber1>randomNumber2) {
    document.getElementById("winner").innerHTML="Player 1 wins!";
} else if (randomNumber2>randomNumber1) {
    document.getElementById("winner").innerHTML="Player 2 wins!";
} else {
    document.getElementById("winner").innerHTML="It's a draw!";
}
    
}

