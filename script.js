const container = document.querySelector('#maincontainer');


function addSquares(num){
    for(i = 0; i < (num * num); i++){
        let newSquare = document.createElement("div");
        newSquare.classList.add("squares");
        container.appendChild(newSquare);
        
    }
}

addSquares(16);

container.addEventListener("mouseover", function(event) {
    event.target.style.color = "red";
});



