const screen = document.getElementById("screen");

function append(value){
    screen.value += value;
}

function clearDisplay(){
    screen.value = "";
}

function backspace(){
    screen.value = screen.value.slice(0,-1);
}

function calculate(){
    try{
        screen.value = eval(screen.value);
    }
    catch{
        screen.value = "Error";
    }
}

const standardBtn = document.getElementById("standardBtn");
const scientificBtn = document.getElementById("scientificBtn");
const scientific = document.getElementById("scientific");

standardBtn.addEventListener("click",()=>{
    scientific.classList.add("hidden");
    standardBtn.classList.add("active");
    scientificBtn.classList.remove("active");
});

scientificBtn.addEventListener("click",()=>{
    scientific.classList.remove("hidden");
    scientificBtn.classList.add("active");
    standardBtn.classList.remove("active");
});
