const displayController = (() => {    

    const computerPlaceMarker = (boxId,marker) =>{
        const box = document.getElementById(boxId.toString());
        box.textContent = marker;
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

    function start(){
        
        let computerMarker = "";

        switch(Player().marker){
            case "X" :  
                computerMarker = "O";
                break;
            case "O" :  
                computerMarker = "X";
                break;
        }

        markerBoxes.forEach(box => box.addEventListener("click", () => {
            if(board[box.id]==undefined){
                displayController.playerPlaceMarker(box,Player().marker);
                board[box.id] = Player().marker;
            
                if(checkWin()){
                    console.log("You WIN!")
                }else if(board.filter(s=>s!=undefined).length==9)
                    console.log("TIE");
                else{
                    computerMove(computerMarker);

                    if(checkWin()){
                        console.log("Computer WIN!")
                    }
                }
            }
        }));
    } 

    const startBtn = document.getElementById("start");
    startBtn.addEventListener("click",start);

    const markerBoxes = document.querySelectorAll(".marker-box");

    return {markerBoxes};
})();

const Player = () =>{
    const marker = document.querySelector('input[name="marker"]:checked').value;
    return{marker};
}