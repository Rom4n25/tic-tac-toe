const displayController = (() => {    

    const playerDetails = document.querySelector(".player-details");
    const markerBoxes = document.querySelectorAll(".marker-box");
    const playBtn = document.getElementById("play_btn");
    playBtn.addEventListener("click", () => playerDetails.classList.remove("hide"));

    const computerPlaceMarker = (boxId,marker) =>{
        const box = document.getElementById(boxId.toString());
        box.textContent = marker;
        box.classList.add("selected");
    }

    const playerPlaceMarker = (box,marker) =>{
        box.textContent = marker;
        box.classList.add("selected");
    };
    
    return {playerPlaceMarker,computerPlaceMarker,playerDetails,markerBoxes};
})();

const gameController = (() => {

    const startBtn = document.getElementById("start_btn");
    startBtn.addEventListener("click",startRound);

    let board = [];

    const checkWin = () => {
    
        for (let i = 0; i<3; i++){
            if((board[i] == board[i+3]) && (board[i+3] == board[i+6]) && (board[i+3] != undefined)){
                return true;
            }else if(((board[3*i] == board[(3*i)+1]) && (board[(3*i)+1] == board[(3*i)+2])) && (board[(3*i)+1] != undefined)){
                return true;
            }else if(i != 1){
                if((board[i] == board[4]) && (board[4] == board[8-i]) && (board[4] != undefined)){
                    return true;
                };
            };
        };
        return false;
    };

    function computerMove(){

        const marker = getComputerMarker();

      while(true){
        let randomIndex = Math.round(Math.random()*8);

        if(board[randomIndex]===undefined){
            board[randomIndex] = marker;
            displayController.computerPlaceMarker(randomIndex,marker);
            break;
        }else{
            continue;
        }
      } 
    }

    function getComputerMarker(){
        return Player().marker=="X"?"O":"X";
    }

    function checkIfGameHasResult(){

        if(checkWin()){
            document.querySelector(".output_text").textContent = Player().name + "!, You won! Play Again!";
            return true;
        }else if(board.filter(s=>s!=undefined).length==9){
            document.querySelector(".output_text").textContent = "Tie! Play Again!";
            return true;
        }else{
            setTimeout(computerMove,800);
                if(checkWin()){
                document.querySelector(".output_text").textContent = "Computer won Play Again!";
                return true;
                }
        }
        return false;
    }

    function playerMove(){
        
        if(board[this.id]===undefined){
            displayController.playerPlaceMarker(this,Player().marker);
            board[this.id] = Player().marker;
            checkIfGameHasResult() ? displayController.markerBoxes.forEach(box => box.removeEventListener("click",playerMove)):false
        }
    }

    function startRound(){
        document.querySelector(".output_text").textContent = "";
        displayController.playerDetails.classList.add("hide");
        board = [];
        displayController.markerBoxes.forEach(box => box.textContent="");
        displayController.markerBoxes.forEach(box => box.addEventListener("click", playerMove));
        displayController.markerBoxes.forEach(box => box.classList.remove("selected"));
    } 

})();

const Player = () =>{
    const marker = document.querySelector('input[name="marker"]:checked').value;
    const name = document.getElementById("player_name").value;
    return{marker,name};
}