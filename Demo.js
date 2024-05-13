var yourresult=document.getElementById("degree")
var sumbitbutton= document.getElementById("btn1")
var inputfield1= document.getElementById("input1")
var inputfield2=document.getElementById("input2")
var inputfield3=document.getElementById("input3")
var inputfield4=document.getElementById("input4")
var resultphrase1= document.getElementById("phrase")
var yourgrade= document.getElementById("grade")
var score1= document.getElementById("score")
console.log(score1)
sumbitbutton.onclick=function(){
    var myresult1 = Number(inputfield1.value)
    var myresult2 = Number(inputfield2.value)
    var myresult3 = Number(inputfield3.value)
    var myresult4 = Number(inputfield4.value)
    console.log(myresult1,myresult2,myresult3,myresult4)
    var finalscore= (myresult1+myresult2+myresult3+myresult4)/4
    console.log(finalscore)
    yourresult.textContent=finalscore
    if (finalscore >= 0 && finalscore < 60){
        resultphrase1.textContent="You scored lower than 60%. Try again!"
        yourgrade.textContent="Fail"
        yourgrade.style.color="red"
        yourgrade.style.fontSize="20px"
        score1.style.backgroundColor="red"
    }
    else if (finalscore>=60 && finalscore<=70){
        resultphrase1.textContent="Well done! Your score falls between 60% and 70%. Keep striving for excellence!"
        yourgrade.textContent="Well Done"
        yourgrade.style.color="yellow"
        yourgrade.style.fontSize="20px"
        score1.style.backgroundColor="hsl(39, 100%, 56%)"
    }
    else if (finalscore >70 && finalscore< 100 ){
        resultphrase1.textContent= "Congratulations! You scored above 70%."
        yourgrade.textContent=" Excellent work"
        yourgrade.style.color="blue"
        yourgrade.style.fontSize="20px"
        score1.style.backgroundColor="hsl(234, 85%, 45%)"
    }
    else if (finalscore==100){
        resultphrase1.textContent= "Perfect score! Well done!"
        yourgrade.textContent="Fantastic! "
        yourgrade.style.color="green"
        yourgrade.style.fontSize="20px"
        score1.style.backgroundColor="green"
    } 
}