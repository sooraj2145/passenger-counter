let count = 0;
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

function incrementCount() {
    count++;
    countEl.textContent = count;
}

function saveCount(){
    let countStr= count  + " - ";
    saveEl.textContent += countStr;
    count = 0;
    countEl.textContent = count;
}