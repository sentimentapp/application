
let prompts = ["How Was Your Day?", "What is One Word to Describe Your Day?", "Write Down the First 10 Things that Come to Your mind", "What Was the Best Part of your Day? What Was the Worst Part?"];

export function pickPrompt() {
    var x = Math.floor(Math.random() * prompts.length);  
    return prompts[x]
}