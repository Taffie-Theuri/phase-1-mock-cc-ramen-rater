// write your code here
fetch("http://localhost:3000/ramens")
.then(response => response.json())
.then(ramens => displayRamens(ramens))

const newRamenForm = document.querySelector("#new-ramen")
newRamenForm.addEventListener('submit', handleNewRamen)

function displayRamens(ramens)
{
    ramens.forEach(ramen => {
        const image = document.createElement('img')
        image.src = ramen.image
        const ramenMenu= document.querySelector('#ramen-menu')
        ramenMenu.appendChild(image)
        //write callback function in this way to be able to pass data in the callback function without calling it per se.
        image.addEventListener('click', () => displayDetails(ramen))


    })
}
 function displayDetails(ramen)
{
    //console.log(ramen)
    const imgRamen = document.querySelector ('.detail-image')
    imgRamen.src = ramen.image



    const ramenName = document.querySelector ('.name')
    ramenName.innerText = ramen.name


    const ramenRestaurant = document.querySelector ('.restaurant')
    ramenRestaurant.innerText = ramen.restaurant


    const ramenRating = document.querySelector('#rating-display')
    ramenRating.innerText = ramen.rating



    const ramenComment = document.querySelector('#comment-display')
    ramenComment.innerText = ramen.comment






     //console.log(imgRamen)

}

function handleNewRamen(e)
{
    e.preventDefault();
    const newName = document.querySelector('#new-name').value
    const newRestaurant = document.querySelector('#new-restaurant').value
    const newImage = document.querySelector('#new-image').value
    const newRating= document.querySelector('#new-rating').value
    const newComment = document.querySelector('#new-comment').value

    //console.log(e) *** check if event listener is working
    let newRamen = {

        name:newName,
        restaurant:newRestaurant,
        image:newImage,
        rating:newRating,
        comment:newComment // e.target["new-comment"].value ***use bracket notation bcs of the hyphen in the name

    }
    //console.log(newRamen) *** display new populated form on console

    //call function to display newly created ramen image
    displayRamens([newRamen])// has to have [] bcs the function is created for arrays(forEach) not single object

}