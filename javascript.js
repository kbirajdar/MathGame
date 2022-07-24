var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer
// we click the Start/Reset Button
document.getElementById("startreset").onclick=
function(){
        // after the clicking start/reset button we check we are playing 
    if(playing==true){
        location.reload();
    }
    else{
        playing=true;
        //set the score value to zero
        score=0;
        
        document.getElementById("scorevalue").innerHTML=score;
            
        //after the satrt we display the time remaining bolck 
        timeremaining=60;
        hide("GameOver");
    
        document.getElementById("timeremaining").style.display="block";
        // we also change the satrt buttone to reset button
        document.getElementById("startreset").innerHTML= "Reset Game";
        // Start the countdown
        countdown();

        // Generatr Q&A 
        generateQA();
    }
}

//clicking Answer box

for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick=function(){
        //if we are playing
        if(playing==true){
            if(this.innerHTML==correctAnswer){
                // correct answer
                score++;
                document.getElementById("scorevalue").innerHTML=score;
    
                // show correct box and hide wrong box;
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                },1000);
    
                // generate new Question;
                generateQA();
    
            }else{
                show("wrong");
                hide("correct");
                setTimeout(function(){
                    hide("wrong");
                },1000)
    
            }
        }
    
    }
}





//Start The Counter
function countdown(){
    action = setInterval(function(){
        timeremaining -=1;
        document.getElementById("timevalue").innerHTML=timeremaining;
        if(timeremaining==0){
            stopcount();
            show("GameOver");

            document.getElementById("GameOver").innerHTML="<p>Game Is Over!</p><p>Your Score Is "+ score +"</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing =false;
            document.getElementById("startreset").innerHTML ="Start Game";
        }
    },1000)

}
//Stop The Counter
function stopcount(){
    clearInterval(action);

}
//Hide the Containt
function hide(Id){
    document.getElementById(Id).style.display="none";
}

//Show the Containt
function show(Id){
    document.getElementById(Id).style.display="block";
}

function generateQA(){
    var x=1+ Math.round(9*Math.random());
    var y=1+ Math.round(9*Math.random());

    correctAnswer=x*y;
    document.getElementById("quation").innerHTML=x +"X"+y;

    var correctPosition=1+ Math.round(3*Math.random());
    // fill the box with correct Answer
    document.getElementById("box"+correctPosition).innerHTML=correctAnswer;

    // fill the other box with wrong Answer
    

    var ans=[correctAnswer];
    for(i=1;i<5;i++){
        if(i!=correctPosition){
            var wrongAnswer;
            // wrong answer is not equel to correctAnswer
            do{
                wrongAnswer=(1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random()));
            }while(ans.indexOf(wrongAnswer)>-1)


            document.getElementById("box"+i).innerHTML=wrongAnswer;
            ans.push(wrongAnswer);

        }
    }



    
}