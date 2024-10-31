function startGame(){
    function userName () {
        userName=prompt("What is your name?");
        console.log("Hello,"+userName+", welcome to the haunted All Saints High School");
        }
    prompt("which path do you choose library(1) or basement(2)?")
    let basement=2
    let library=1
}
   function basement(){
    prompt("You see a spooky looking closet. you decide to investigate. There is a ladder going up. do you (1)climb it or (2) move on?")
        let climbIt=1
        let moveOn=2
        if(climbIt){
            alert("you see a ladder and climb it, Oh and it takes you to a pile of candy! Horray!")    
        }else(moveOn){
            alert("Oh no!!!! A scary ghost!!!")
        }

   }
   function library(){
        prompt("You see a creepy old book on a dusty table. Do you (1) open it or (2) leave it alone?")
    let openIt=1
    let leaveIt=2
    if(openIt){
        alert("A ghost emerges from the book and scares you to death!")
    }else(leaveIt){
        alert("You quietly leave the library and find the exit. You survive!")
    }
    }
    alert("The End. Thanks for playing!")
   }

   function autoshop(){
    prompt("You hear strange noises. Do you (1) investigate or (2) run away?")
        let investigateNoise = 1
        let runAway = 2
        if (investigateNoise){
            alert("You discover a car trunk filled with candy!")
        }else (runAway){
            alert("You trip and fall... The ghost catches you!")
        }
        }
    )
   }
   startGame();