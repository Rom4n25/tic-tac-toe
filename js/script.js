const displayController = (() => {
    
    return {};
})();

const gameBoard = (() => {
    let board = ["X","X","X","X","X","O","O","O","O"];
    const boxOne = document.getElementById("1");
    const boxTwo = document.getElementById("2");
    const boxThree = document.getElementById("3");
    const boxFour = document.getElementById("4");
    const boxFive = document.getElementById("5");
    const boxSix = document.getElementById("6");
    const boxSeven = document.getElementById("7");
    const boxEight = document.getElementById("8");
    const boxNine = document.getElementById("9");
    const boxes = [boxOne,boxTwo,boxThree,boxFour,boxFive,boxSix,boxSeven,boxEight,boxNine];

    boxes.forEach(box => box.addEventListener("click", () => console.log(box)));

    return {board};
})();

const Player = () =>{
    const name = document.getElementById("player_name");
    const marker = document.querySelector(".marker");

    return {name,marker};
}