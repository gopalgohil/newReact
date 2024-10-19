let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetGame = () => {
    turnO = true;
    enableBox();
    msgContainer.classList.add("hide")
}
//   1 first rit
/*
box.forEach(function(box){
    box.addEventListener("click",function(){
        console.log("Click is")
    })
})*/

// 2 second rit
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box is click")
        if (turnO) {
            box.innerText = "O";
            turnO = false;

        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })

})
const disableBox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Winner is  ${winner}`
    msgContainer.classList.remove("hide");
    disableBox();
}
const checkWinner = () => {
    for (let pattern of winPattern) {
        // console.log(pattern[0],pattern[1],pattern[2]); aa run karavanu nathiW

        //  box[pattern[0]] individual array pr lai jase
        // console.log(box[pattern[0]].innerText,box[pattern[1]].innerText)
        let post1Val = boxes[pattern[0]].innerText;
        let post2Val = boxes[pattern[1]].innerText;
        let post3Val = boxes[pattern[2]].innerText;
        if (post1Val != "" && post2Val != "" && post3Val != "") {
            if (post1Val === post2Val && post2Val === post3Val) {
                console.log("winner", post1Val);
                showWinner(post1Val);
            }
        }
    }
  
}
resetBtn.addEventListener("click", resetGame);