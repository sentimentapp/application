// Imports Tensorflowjs
import * as tf from '@tensorflow/tfjs'

var index_labels = ['sadness', 'anger', 'love', 'surprise', 'anxiety', 'joy', 'neutral']

// Gets the JSON BERT Dictionary
const vocab = fetch('./transformer_model/vocab.json').then((dictionary) => {
  return dictionary.json()
})

// Function that sanitizes the text before tokenization
function sanitize_text(text){
  // Puts the text in lower case and removes trailing spaces
  text = text.toLowerCase().trim()

  // Removes links
  text = text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '')

  // Removes twitter usernames
  text = text.replace(/(^|\s)(@[a-z\d-]+)/ig, '')

  // Removes hashtags
  text = text.replace(/(^|\s)(#[a-z\d-]+)/ig, '')

  // Removes any additional special characters
  text = text.replace(/[^a-zA-Z?.!,]+/g, " ")

  // Puts a space between punctutation
  text = text.replace(/([?.!,])+/g, " $1")

  // Returns the string as an array
  return text.trim().split(" ")
}

// Tokenizes each word
function tokenize_word(word, vocab) {

  var token_array = []

  // Runs until each part of the word has been converted to a token
  while (word.length != 0) {

    // Loops backwards through the word to ensure longest segments are the word are found
    for (var i = word.length; i >= 0; i--) {
      
      // Stores the word segment being examined
      var substring = word.substring(0, i);

      // Removes a character from an input if the character isn't present in the dictionary
      if (substring.length == 0) {
        word = word.substring(1, word.length);
        break
      }

      // For the first part of the word added to the token array don't use the '##' seperator 
      else if (token_array.length == 0){
        if (vocab[substring]) {
          token_array.push(vocab[substring])
          word = word.substring(i, word.length)
          break
        }
      }

      // If other parts of the word have already been tokinzed, add a '##' in front of the segment to indicate that it is a part of the word
      else {
        if (vocab["##" + substring]) {
          token_array.push(vocab["##" + substring])
          word = word.substring(i, word.length)
          break
        }
      }
    }
  }
  return token_array
}


// This function needs to return an array that contains the different emotions being felt
export async function model_predict(text, model){
  
  var tokenized_sentence = []

  var result = vocab.then((dictionary) => {
    var word_list = sanitize_text(text)

    word_list.splice(0, 0, '[CLS]')
  
    for (var word of word_list) {
      tokenized_sentence = tokenized_sentence.concat(tokenize_word(word, dictionary))
    }
   
    var prediction = model.predict(tf.tensor([tokenized_sentence])).arraySync()[0]

    var emotion_index = prediction.indexOf(Math.max(...prediction));

    return [index_labels[emotion_index]]
  })

  return result
}
