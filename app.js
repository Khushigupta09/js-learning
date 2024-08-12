let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



let turn0 = true; //playerO,playerX
let count = 0;

const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () => {
    trun0 = true;
    enabledboxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        // console.log("box is clicked");
       if(turn0){//playerO
        box.style.color="green"
        box.innerText = "O";
        turn0 = false; 
        
       }
       else{//playerX
        box.style.color="red"
        box.innerText = "X";
        turn0 = true;
       }
       box.disabled = true;
       count++;

     let isWinner =  checkWinner();

     if(count === 9 && !isWinner){
        gameDraw();
     }
    });
});

// const colorchange = () =>{
//    boxes.style.color = 'green';
// };

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const disabledboxes = () =>{
    for(box of boxes){
        box.disabled = true;
    }
};

const enabledboxes = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText =`Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledboxes();
};

const checkWinner = () => {
    for(let pattern of winPatterns){
        let posVal = boxes[pattern[0]].innerText;
        let posVa2 = boxes[pattern[1]].innerText;
        let posVa3 = boxes[pattern[2]].innerText;

        if(posVal != "" && posVa2 != "" && posVal){
            if(posVal === posVa2 && posVa2 ===posVa3 && posVa3 === posVal){
                // console.log("winner", posVal);
                showWinner(posVal);
            }
            
        }
    }
};

newGamebtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);