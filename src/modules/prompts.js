
let prompts = ["How was your Day?", "What is one word to describe your whole day?", "Write down the first 10 things that come to your mind", "What was the 1 best part of your day and the 1 worst part of your day?"];

export function pickPrompt() {
    var x = Math.floor(Math.random() * prompts.length);  
    return prompts[x]
}
