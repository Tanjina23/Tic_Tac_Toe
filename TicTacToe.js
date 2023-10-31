
let turn = "X";
let gameOver = false;

const changeTurn = () =>{
    return turn === "X" ? "0" : "X";
}

const checkWin =() =>{
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    wins.forEach(e =>{
        if((boxText[e[0]].innerHTML === boxText[e[1]].innerHTML) && (boxText[e[2]].innerHTML === boxText[e[1]].innerHTML) && (boxText[e[0]].innerHTML !== "")){
            document.querySelector('.info').innerHTML = boxText[e[0]].innerHTML + "Won"
            gameOver = true;
        }
    })

}

//Game Logic 

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', () =>{
           if(boxtext.innerHTML ===''){
               boxtext.innerHTML = turn;
              turn =  changeTurn();
               checkWin();
               if(!gameOver){
                document.getElementsByClassName("info")[0].innerHTML = "Turn for" + turn;
               }
           }
    })
})