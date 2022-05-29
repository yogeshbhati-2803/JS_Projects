let grids=document.getElementsByClassName("col")
let currentTurnText=document.getElementById("current-turn")
winningCombination=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

]
function checkPlayerturn()
{
    
currentTurn=Math.ceil(Math.random()*2)
currentTurnText.innerText=`Player ${currentTurn}'s Turn`
}
gameOver=false
const SingleMove=(index)=>{
    if(!gameOver && grids[index].innerText=='')
    {

        grids[index].innerText= currentTurn === 1 ?'X':'O'
        
        let winningPlayer =checkWinningStatus()
        if(winningPlayer)
        {
            gameOver=true
            currentTurnText.innerText= winningPlayer==='X'?'Player 1 won': 'Player 2 won'
            return;
        }
        currentTurn = currentTurn === 1 ? 2 :1
        currentTurnText.innerText = `Player ${currentTurn}'s Turn`
    }

}
const checkWinningStatus=()=>{
    for(let i=0;i<winningCombination.length;i++)
    {
        combination= winningCombination[i]
        if(grids[combination[0]].innerText===grids[combination[1]].innerText && grids[combination[1]].innerText===grids[combination[2]].innerText && grids[combination[0]].innerText!=='')
        {
            addStyle(combination)
            return grids[combination[0]].innerText
        }
    }
    return
}
const addStyle=(indexArray)=>{
    indexArray.forEach(index => grids[index].style.cssText= 'background-color:lightgreen;');
}