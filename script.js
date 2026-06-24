let yesSize = 20;
const messages = [
    "দিব না🥺", "সত্যি দিবি না?🔪", "প্লিজ দে না!😭", 
    "তুই কি কৃপণ?😡", "দিতেই হবে!🔥", "চুপচাপ হ্যাঁ বলে দে!👊",
    "আর কত না বলবি?😂", "আমি কিন্তু তোর বাপকে বলে দিব!😤", 
    "শেষবার বলছি, হ্যাঁ বলে দে!💣", "তোকে আজ ছাড়ছি না!😈"
];
let msgIndex = 0;

function noClick() {
    yesSize += 15;
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    yesBtn.style.fontSize = yesSize + 'px';
    yesBtn.style.padding = (yesSize/2) + 'px ' + (yesSize + 20) + 'px';
    msgIndex = (msgIndex + 1) % messages.length;
    noBtn.innerText = messages[msgIndex];
}

function yesClick() {
    document.getElementById('question').style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
    const msg = document.getElementById('message');
    msg.classList.remove('hidden');
    document.body.style.background = "#2ecc71";
}
