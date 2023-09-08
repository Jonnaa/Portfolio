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

// Setting modal div to a var
const modalDiv = document.getElementById("modalDiv");

// Setting modal div close button to a var
const modalClose = document.getElementById("closeModal");

// Setting inside of modal div to a var
const insideModal = document.getElementById("insideModal");

////////////////////////////////////
//          Inside Modal          //
////////////////////////////////////

/* --------------- */
/*   Space Battle  */
/*  -------------  */

// Setting spaceship image to a var
const spaceImg = document.getElementById("spaceBattle");

// Adding event listener to the picture
spaceImg.addEventListener("click",()=>{
    manualProjDesc.style.display="none";
    jsProjDesc.style.display="none";
    modalDiv.style.display="block";
    gameBoard.style.display="block";
})

modalClose.addEventListener('click',()=>{
    modalDiv.style.display="none";
})

const initialDesc = document.getElementById("gameText").innerHTML;

const playGame = document.getElementById("playGame");

const gameBoard = document.getElementById("gameBoard");
const gameText = document.getElementById("gameText");
let counter = 0;
playGame.addEventListener('click',()=>{
    let newP = document.createElement("p");
    newP.innerText=`DO NOT PLAY THIS GAME ${counter}`;
    gameText.appendChild(newP);
    console.log(gameBoard);
    console.log(insideModal);
    gameBoard.scrollIntoView({ block: "end" });
    counter++;
})

const resetBoard = document.getElementById("resetBoard");

resetBoard.addEventListener('click', ()=>{
    gameText.innerHTML=initialDesc;
    counter=0;
})

/* --------------- */
/*   Car Manuals   */
/*  -------------  */

// Set car manual project desc to a var
const manualProjDesc = document.getElementById('manualProjDesc');

// Set car manual project image to a var
const manualProjImage = document.getElementById('manualProjImage');

manualProjImage.addEventListener('click',()=>{
    jsProjDesc.style.display="none";
    modalDiv.style.display="block";
    gameBoard.style.display="none";
    manualProjDesc.style.display="block";
})

// const manualProjClose = document.getElementById("closeManualProj");

// manualProjClose.addEventListener('click',()=>{
//     manualProjDesc.style.display="none";
//     modalDiv.style.display="none";
// })

/* --------------- */
/*    JS Project   */
/*  -------------  */

// Set JS Proj Image to a var
const jsProjImage = document.getElementById('jsProjImage');

// Set random jsProject Div to a var
const jsProjDesc = document.getElementById('jsProjDesc');

//adding event listener to proj image
jsProjImage.addEventListener('click',()=>{
    manualProjDesc.style.display="none";
    gameBoard.style.display="none";
    modalDiv.style.display="block";
    jsProjDesc.style.display="block";
})

// // Set jsProjClose to a var
// const jsProjClose = document.getElementById('jsProjClose');

// //Adding event listener for close button
// jsProjClose.addEventListener('click',()=>{
//     jsProjDesc.style.display='none';
//     modalDiv.style.display="none";
// })