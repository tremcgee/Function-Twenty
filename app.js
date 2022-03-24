function uname(){
    var pname = prompt("What ya name?")
    return pname
}
function greet (a){
    alert(`Hello, ${a}!`)
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
    if((b >= 21) && (c >= 21)){
        alert("Both the user and the computer have gone over 20, no one wins.")
    }else if(b >= 21){
        alert("The user has gone over 20 and therefore loses!")
    }else if(c >= 21){
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
    var userscore = pturn()
    var comscore = cturn()
    compare(userscore, comscore)
    var play2 = prompt("Do want to play again? y for yes n for no")
    return play2
}
greet(uname())
do{
    repeat = game() 
}while(repeat == "y")