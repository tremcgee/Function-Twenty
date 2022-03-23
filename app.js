function uname(){
    var pname = prompt("What ya name?")
    return pname
}
function gennum(){
    var num = Math.floor(Math.random() * 10) +1;
    return num
}
function pturn(){
    var pscore = 0
    var play = "y"
    do{
        var num = gennum()
        pscore = pscore + num
        alert(`Your number is ${num}
        Your total is ${pscore}`)
        play = prompt("Do you what to play again y/n")
    }while((pscore < 20) && (play == "y"))
    return pscore
}
function cturn(){
    var cscore = 0
    do{
        var num = gennum()
        cscore = cscore + num
        alert(`The new number is ${num}.
        The total is ${cscore}.`)
    }while(cscore < 17)
    return cscore
}
function compare(b, c){
    if((b >= 20) && (c >= 20)){
        alert("Both the user and the computer have gone over 20, no one wins.")
    }else if(b >= 20){
        alert("The user has gone over 20 and therefore loses!")
    }else if(b >= 20){
        alert("The computer has gone over 20 and therefore loses!")
    }else if(b > c){
        alert("The user has won!")
    }else if(b < c){
        alert("The computer has won!")
    }else if(b == c){
        alert("It's a tie. No one wins.")
    }
}
function game(){
    var name = uname()
    alert(`Hello, ${name}!`)
    pturn()
    cturn()
    compare(pturn, cturn)
}

game()