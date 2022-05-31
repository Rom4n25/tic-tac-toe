const gameBoard = (() => {
    board = ["X","X","X","X","X","O","O","O","O"];

    return {board};
})();

const displayController = (() => {


})();


const Player = () =>{
    const name = document.getElementById("player_name");
    const marker = document.querySelector(".marker");

    return {name,marker};
}