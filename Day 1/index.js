const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const contLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
    console.log("Butonul Increase a fost apăsat");
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
    console.log("Butonul Decrease a fost apăsat");
}

resetBtn.onclick = function(){
    count = 0
    countLabel.textContent = count;
    console.log("Butonul Reset a fost apăsat");

}
