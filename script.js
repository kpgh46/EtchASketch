const container = document.querySelector('#maincontainer');

function addSquares(num){
    for(i = 0; i < (num * num); i++){
        let newSquare = document.createElement("div");
        newSquare.classList.add("squares");
        container.appendChild(newSquare);
        addEventListener("mouseover",mouseOver);
    }
    
}

function mouseOver(){
    container.style.color = "black";
}

addSquares(16);



