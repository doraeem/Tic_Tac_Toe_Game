let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#start-again");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true;  //playerX,playerO

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetGame = () =>{
     turnX = true;
     enableBoxes();
     msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnX){
            box.innerText = "X";
            box.style.color = "#ff79c6";
            turnX=false;
        } else{
            box.innerText = "O";
            box.style.color = "blue";
            turnX=true;
        }
        box.disabled = true;
        checkWinner(); 
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
       box.disabled=true;
    }
};
const enableBoxes = () =>{
    for(let box of boxes){
       box.disabled=false;
       box.innerText="";
    }
};
const showDraw = () => {
    msg.innerText = `Game is Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () =>{
    for(pattern of winPatterns){
       pos1Val = boxes[pattern[0]].innerText;
       pos2Val = boxes[pattern[1]].innerText;
       pos3Val = boxes[pattern[2]].innerText;

       if(pos1Val != "" && pos2Val != ""  && pos3Val != "" ){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
           showWinner(pos1Val);
        } 
       }
    }
    if([...boxes].every(box => box.innerText != "")){
        showDraw();
    }
};
resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
