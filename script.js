const container = document.querySelector('#maincontainer');
const button = document.querySelector('#button');


function addSquares(num){
    for(i = 0; i < (num * num); i++){
        let newSquare = document.createElement("div");
        newSquare.classList.add("squares");
        container.appendChild(newSquare);
        
    }
}

addSquares(16);

container.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = "red";
});

button.addEventListener('click', () => {
    let askUser = prompt ("How many blocks?")
    askUser = parseInt(askUser);

    container.style.setProperty("--column-row", askUser);

    for(i = 0; i < (askUser * askUser); i++){
        let newSquare = document.createElement("div");
        newSquare.classList.add("squares");
        container.appendChild(newSquare);

}});

