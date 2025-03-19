const btn=document.querySelectorAll("button")
const resultele=document.getElementById("result")
const userscoreele=document.getElementById("user-score")
const compscoreele=document.getElementById("comp-score")
let userscore = 0
let compscore = 0
btn.forEach((e)=>{
    e.addEventListener("click",()=>{
    // console.log("you clicked on",btn.id);
    // console.log("computer choice",compchoice());
let result=playround(e.id, compchoice())
// console.log(result);
resultele.textContent=result
    })
   

})

function compchoice(){
    const choices=["rock","paper","scissor"]

    const randomchoice=Math.floor (Math.random()*choices.length);
    return choices [randomchoice]
}
function playround( userselection, compselection){
    if(userselection===compselection){
        return"it's a tie!"
    }else if(
        (userselection==="rock"&& compselection ==="scissor")||
        (userselection==="paper"&& compselection ==="rock")||  (userselection==="scissor"&& compselection ==="paper")
    )
    {
        userscore++
        // console.log(userscore);
        userscoreele.textContent = userscore
        return `you won ! ${userselection} beats ${compselection}`
    }else{
        compscore++;
        // console.log(compscore) 
        compscoreele.textContent=compscore
        return `you lose! ${userselection} beats ${compselection}`
         
    }
    
} 