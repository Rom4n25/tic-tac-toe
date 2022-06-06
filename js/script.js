const displayController = (() => {    

    const markerBoxes = document.querySelectorAll(".marker-box");

    const computerPlaceMarker = (boxId,marker) =>{
        const box = document.getElementById(boxId.toString());
        box.textContent = marker;
    }

    const playerPlaceMarker = (box,marker) =>{
        box.textContent = marker;
    };
    
    return {playerPlaceMarker,computerPlaceMarker,markerBoxes};
})();

const gameController = (() => {

    const startBtn = document.getElementById("start");
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

    function computerMove(marker){

      while(true){
        let randomIndex = Math.round(Math.random()*8);

        if(board[randomIndex]==undefined){
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

    function startRound(){
        board = [];
        displayController.markerBoxes.forEach(box => box.textContent="");
        
        displayController.markerBoxes.forEach(box => box.addEventListener("click", () => {
            if(board[box.id]==undefined){
                displayController.playerPlaceMarker(box,Player().marker);
                board[box.id] = Player().marker;
            
                if(checkWin()){
                    console.log("You WIN! " + Player().name);
                }else if(board.filter(s=>s!=undefined).length==9)
                    console.log("TIE");
                else{
                    computerMove(getComputerMarker());

                    if(checkWin()){
                        console.log("Computer WIN!")
                    }
                }
            }
        }));
    } 

    return {startRound};
})();

const Player = () =>{
    const marker = document.querySelector('input[name="marker"]:checked').value;
    const name = document.getElementById("player_name").value;
    return{marker,name};
}