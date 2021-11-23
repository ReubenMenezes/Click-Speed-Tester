const welcome = document.querySelector(".welcome");
const counter = document.querySelector(".counter");
const info = document.querySelector(".info");
const test = document.querySelector(".test");
const countEl = document.querySelector(".count");
const countDiv = document.querySelector(".count-div");
const result = document.querySelector(".results");
const clicks = document.querySelector(".clicks");
const grade = document.querySelector(".grade");


let time = 5;
let count = 0;
let total = 0;
let timer = 0;
let clicked = false;


const countDown = setInterval(() => {
    time--;
    counter.textContent = time;
    if(time===0){
        counter.textContent = "0"
        info.style.display = "none";
        test.style.display = "contents"
        countDiv.style.display = "contents"
    }
}
,1000)

test.addEventListener("click",()=>{
    count++; 
    total=count;
    countEl.textContent=total;
    if (!clicked) {
        setTimeout(() => {
            test.style.display = "none"
            countDiv.style.display = "none"
            result.style.display = "flex"
            clicks.textContent = `You clicked ${total} times in 30 seconds!`;
            result.classList.add('final-result')
        },30*1000);
        clicked = true;
      }
    })
    
    
    if (count > 50){
        grade.textContent = "You are a cheetah";
    }
    else if (count > 25){
        grade.textContent = "You are a tortoise"
    }

    else{
        grade.textContent = "You are a snail"
    }



