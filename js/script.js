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

    const checkWin = () => {
    
        for (let i = 0; i<3; i++){
            console.log(board);
            if((board[i] == board[i+3]) && (board[i+3] == board[i+6]) && (board[i+3]!=undefined)){
                return true;
            }else if((board[3*i] == board[(3*i)+1]) && (board[(3*i)+1] == board[(3*i)+2]) && (board[(3*i)+1]!=undefined)){
                return true;
            }else if(i!=1){
                if((board[i] == board[4]) && (board[4] == board[8-i]) && (board[4]!=undefined)){
                    return true;
                };
            }else{
                return false;
            };
        };
    };



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
            if(checkWin()){
                console.log("You WIN!")
            }else{
                computerMove(computerMarker);
                if(checkWin()){
                    console.log("Computer WIN!")
                }
            }
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