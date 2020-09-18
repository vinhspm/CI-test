
//first problem
function findOppositeNumber(n, inputNumber){
    let outputNumber = 0
    if(inputNumber > n/2){
        outputNumber = inputNumber - n/2;
    }
    else {
        outputNumber = inputNumber + n/2;
    }
    console.log(outputNumber)
    
}
findOppositeNumber(10,2)
findOppositeNumber(10,6)

//second problem
function merge2String(s1,s2){
    let res = ""
    if(s1.length <= s2.length){
        for(let i = 0; i < s1.length; i++){
            res += s1[i] + s2[i]
        }
        for(let i = s1.length; i < s2.length; i++){
            res += s2[i]
        }
    }
    else{
        for(let i = 0; i < s2.length; i++){
            res += s1[i] + s2[i]
        }
        for(let i = s2.length; i < s1.length; i++){
            res += s1[i]
        }
    }
    console.log(res)
    
}
merge2String("abc", "123")
merge2String("abc", "0123")
merge2String("abcd", "123")

let input = document.querySelector("#hihi input")
let btn = document.querySelector("#hihi button")

btn.addEventListener("click", hoho)
let count = 0
function hoho(){
    let random = Math.round(Math.random()*10+1)
    let num = Number(input.value)
    if(num == random){
        alert("CONGRATS!!! YOU WIN")
        input.value = ""
        count = 0
    }
    else {
        if(count == 2){
            alert(`YOU LOOSE!!! THE LUCKY NUMBER IS: ${random} \n PLAY AGAIN`)

            input.value = ""
            count = 0
        }
        else{
            count++
        }    
    }
}