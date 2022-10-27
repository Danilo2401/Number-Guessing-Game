let userBtn = document.querySelector("#user-btn");
let output = document.querySelector(".output");
let randomNumber = Math.floor(Math.random() * 100);
let countAttempt = 0;

userBtn.addEventListener("click",function(){ 

    let userNumber = document.querySelector("#userNumber").value;
    let attempt = document.querySelector(".attempt");
    
    if (randomNumber == userNumber) {
        output.innerHTML = `You guessed right! The random number was ${randomNumber}`;
        attempt.innerHTML = `Numbers of attempts : ${countAttempt}`;
    }else if(randomNumber > userNumber){
        output.innerHTML = `You guessed too low!`;
        countAttempt++;
        attempt.innerHTML = `Numbers of attempts : ${countAttempt}`;  
    }else if(userNumber > randomNumber){
        output.innerHTML = `You guessed too high!`;
        countAttempt++;
        attempt.innerHTML = `Numbers of attempts : ${countAttempt}`;
    }

    console.log(randomNumber);
    
    
});