let btns = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");

let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");
let newgame=document.querySelector("#newgame");
let hide=document.querySelector(".hide");
let container1=document.querySelector(".container1");
let turnO=true;
let gameOver=false;


const patternArray=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 3, 8],
    [0, 4, 8],
    [2, 4, 6],

];

const resetbtn = () => {
    turnO=true;
    enablebtns();
    container1.classList.add("hide");

}
// reset.addEventListener("click", resetbtn);

const newgamebtn = () => {
    turnO=false;
    enablebtns();
    container1.classList.add("hide");

}
    

btns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        console.log("button is clicked");

        if(turnO){
            btn.innerText="O";
            turnO=false;
        }
        else{
            btn.innerText="X";
            turnO=true;
        }
        btn.disabled=true;

        check();
        
        
        
    })

   
})


const disablebtns = () => {
    for(let btn of btns ){
        btn.disabled=true;
    }
};

const enablebtns = () => {
    for(let btn of btns ){
        btn.disabled=false;
        btn.innerText="";
    }
};

const show = (winner) => {
    msg.innerText=`\n\n\nCongratulaions the winner is \n\n\n\n\n "${winner}" `;
    container1.classList.remove("hide");
    disablebtns();
}

// const draw = () => {
//     msg.innerText=`\n\n\nIt's a TIE\n\n\n`;
//     container1.classList.remove("hide");
//     disablebtns();
// }



const check=()=>{
    for(let arr of patternArray){
        let pos1=btns[arr[0]].innerText;
        let pos2=btns[arr[1]].innerText;
        let pos3=btns[arr[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1 == pos2 && pos2 == pos3){
                console.log("won");
                show(pos1);
                disablebtns();
            
            }
            
        }
        
        
        
    }
    
    
}
// function checkdraw(){
//     const winner=check();
//     if(winner){
//         return false;
//     }
//     for(let btn of btns){
//         if (btn.innerText!=""){
//             return true;
//             draw();
//         }
//     }
// }
// checkdraw();

// const checkdraw=()=>{
//     for (let arr of patternArray){
//         if(btns.innerText!=""){
//             draw();
            
//         }
        
//     }
// }


reset.addEventListener("click", resetbtn);
newgame.addEventListener("click", newgamebtn);

