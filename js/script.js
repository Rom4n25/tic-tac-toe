const displayController = (() => {    

    const computerPlaceMarker = (boxId,marker) =>{
        const box = document.getElementById(boxId.toString());
        box.textContent=marker;
    }

    const playerPlaceMarker = (box,marker) =>{
        box.textContent = marker;
    };
    
    return {playerPlaceMarker,computerPlaceMarker};
})();

const game = (() => {

    let board = [];

    function computerMove(marker){

      while(true) {
        let randomNumber = Math.round(Math.random()*9);
        if(board[randomNumber]==null){
            board[randomNumber] = marker;
            displayController.computerPlaceMarker(randomNumber,marker);
            break;
        }else{
            continue;
        }
      } 
    }

    function start(){
        const player = Player();
        let computerMarker = "";

        if(player.marker=="X"){
            computerMarker = "O";
        }else{
            computerMarker = "X"
        };

        markerBoxes.forEach(box => box.addEventListener("click", () => {
            displayController.playerPlaceMarker(box,player.marker);
            board[box.id] = player.marker;
            computerMove(computerMarker);
            console.log(board);
    }));
    } 

    const startBtn = document.getElementById("start");
    const markerBoxes = document.querySelectorAll(".marker-box");

    startBtn.addEventListener("click",start);
    
    return {markerBoxes};
})();

const Player = () =>{
    const marker = document.querySelector('input[name="marker"]:checked').value;
    const name = document.getElementById("player_name").value;

    return{name,marker};
}