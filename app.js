/* --------------------------- */
/*     Single Page JS Code     */
/* --------------------------- */

/* Saving section elements(pages) to pages variable*/
const pages = document.querySelectorAll('section')

/* Saving nav buttons with class navButton to a variable*/
const pageLinks = document.querySelectorAll('.navButton')

//Loop to add an event listener to all nav buttons
for (let i = 0; i < pages.length; i++) {
    // save each button to a variable called btn
    const btn = pageLinks[i]

    // Adding event listener to all nav buttons
    btn.addEventListener('click', (event) => {
        for (let section of pages) {
            //Show the section that matches the button name
            if (event.target.innerText.toLowerCase() === section.id) {
                section.style.display = 'block'
            } else { //hide all other sections
                section.style.display = 'none'
            }
        }
    })
}

/* --------------------------- */
/*        Carousel Code        */
/* --------------------------- */

//global variables that keep track of current and previous image
let previousImg = 0;
let currentImg = 0;

//Saving next and prev button to variables
const nextB = document.getElementById("nextButton");
const prevB = document.getElementById("prevButton");

//Saving images to a var
const images = document.querySelectorAll(".images");

//Function for next button
nextB.addEventListener("click",()=>{
    previousImg = currentImg;
    currentImg++;

    images[previousImg].style.display="none";
    if(currentImg>=images.length){
        currentImg=0;
    }
    images[currentImg].style.display="block";
})

//Function for previous button
prevB.addEventListener("click",()=>{
    
    previousImg=currentImg;
    currentImg--;
    
    images[previousImg].style.display="none";

    if(currentImg<0){
        currentImg=images.length-1;
    }
    images[currentImg].style.display="block";
})

/* --------------------------- */
/*          Modal Code         */
/* --------------------------- */

// Setting spaceship image to a var
const spaceImg = document.getElementById("spaceBattle");

// Setting modal div to a var
const modalDiv = document.getElementById("modalDiv");

// Setting modal div close button to a var
const modalClose = document.getElementById("closeModal");

// Adding event listener to the picture
spaceImg.addEventListener("click",()=>{
    console.log("You clicked space battle");
    modalDiv.style.display="block";
})

modalClose.addEventListener('click',()=>{
    console.log("closing modal");
    modalDiv.style.display="none";
})

/////////////////////
//   Inside Modal  //
/////////////////////

const playGame = document.getElementById("playGame");

const gameBoard = document.getElementById("gameBoard");

playGame.addEventListener('click',()=>{
    let newP = document.createElement("p");
    newP.innerText="DO NOT PLAY THIS GAME";
    gameBoard.append(newP);
})

const resetBoard = document.getElementById("resetBoard");

resetBoard.addEventListener('click', ()=>{
    gameBoard.innerHTML="";
})
