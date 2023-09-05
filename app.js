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