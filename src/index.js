console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {

    getImg()
    getBreed()
    breedsThatStartWithLetter()


})

function getImg(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
    fetch(imgUrl)
        .then((res) => res.json())
        .then(res => {res.message.forEach(image => addImg(image))});
}

function addImg(image){
    let dogThing = document.querySelector('#dog-image-container')
    let dogImg = document.createElement('img')
    dogImg.src = image
    dogThing.appendChild(dogImg)
}

function getBreed(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
    fetch(breedUrl)
        .then((res) => res.json())
        .then(res => Object.entries(res.message).forEach(breed => addBreed(breed)));

        breedsThatStartWithLetter()
}

function addBreed(breed){
    let breedList = document.querySelector('#dog-breeds')
    let breedItem = document.createElement('li')
    breedItem.className = "breed-name"
    breedItem.innerHTML = breed[0]
    breedList.appendChild(breedItem)
    breedItem.addEventListener('click', changeColor);

}

function newBreedList(breeds){
    let ul = document.querySelector('#dog-breeds')
    removeChildren(ul)
    
}

function changeColor(){
    event.target.style.color = 'red';
}

function breedsThatStartWithLetter(){
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
    breedNames(event.target.value);
  });
}

function breedNames(event){
    console.log(event.target.value)
}
