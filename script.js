const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;


increaseBtn.addEventListener("click", (e)=>{
    count++;
    countLabel.innerText = count;
});

resetBtn.addEventListener("click", (e) =>{
    count = 0;
    countLabel.innerText = count;
});

decreaseBtn.addEventListener("click", (e) =>{
    count--;
    countLabel.innerText = count;
});
