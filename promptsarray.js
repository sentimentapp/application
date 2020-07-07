
let prompts = [ "How was your Day?" , "What is one word to describe your whole day? " , "Write down the first 10 things that come to your mind" , "What was the 1 best part of your day and the 1 worst part of your day?", "wow more prompts", "wow more prompts", "wow more prompts"];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.random() * (max - min +1)) + min;
}

function pickprompt() {
    x = getRandomInt(0,8)
    return prompts[x]
}
