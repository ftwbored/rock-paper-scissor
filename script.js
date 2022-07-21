
const input = document.querySelectorAll('input');
let result = document.querySelector('.result');

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    let choices = ['Rock','Paper','Scissor']
    let randomInt = getRandomInt(3);

    return choices[randomInt];
}


input.forEach(
    button =>{
        button.addEventListener('click',function(){
            console.log(button.value);
            
            let pcChoice = getComputerChoice();
            result.textContent = `Your choice: ${button.value}.PC choice's: ${pcChoice} `;
        }
            
        )
    }
)

