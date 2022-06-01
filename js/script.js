const displayController = (() => {
    const start = () =>{
        const player = Player();
        console.log("Player name:" + player.name);
        console.log("Player marker:" + player.marker);
        gameBoard.board = [];
       
    }
    
    
    const selectBox = (box) =>{
        console.log(box.id);
    
      
    };
    
    return {selectBox,start};
})();

const gameBoard = (() => {
    
    const startBtn = document.getElementById("start");
    const boxes = document.querySelectorAll(".marker-box");

    let board = ["X","X","X","X","X","O","O","O","O"];
    
    startBtn.addEventListener("click",displayController.start);
    
    boxes.forEach(box => box.addEventListener("click", () => {displayController.selectBox(box)}));

    return {board};
})();

const Player = () =>{
    const name = document.getElementById("player_name").value;
    const marker = document.querySelector('input[name="marker"]:checked').value;
    return {name,marker};
}