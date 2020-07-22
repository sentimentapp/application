import * as embeddings from './model/embeddings'
import * as tf from '@tensorflow/tfjs'

const maxEntryLength = 15
const maxSentenceLength = 70
const embeddingDimensions = 300

export async function emotions(text){
  let sentiments = await classifySentiment(sentences(text))
  return [
    (sentiments[0] > 3) ? 'happy' : 'sad',
    (sentiments[1] > 3) ? 'angry' : 'bored',
  ]
}

const loadModel = (()=>{
  let loaded = false
  let sM, wE
  return async function loadModel() {
    if(!loaded){
      console.log("LOADING MODEL")
      sM = await tf.loadLayersModel('/model.json')
      wE = await embeddings.loadModel('/word-embeddings.json')
      loaded = true
    }else{
      console.log("ALREADY LOADED")
    }
    return [sM, wE]
  }
})()

let zeros = dimensions => {
  let array = [];

  for (let i = 0; i < dimensions[0]; ++i) {
      array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
  }

  return array;
}

let sentences = inp => {
  var words = inp.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|")
  for (let i in words) {
      words[i] = words[i].toLowerCase();
      words[i] = words[i].replace(/[.?!,;:()/]/g,"")
      words[i] = words[i].split(' ')
  }
  return words
}

async function classifySentiment(inputText) {
  let [sentimentModel, wordEmbeddings] = await loadModel()
  let inputSequence = zeros([maxEntryLength, maxSentenceLength, embeddingDimensions])
  for (let i = 1; i <= inputText.length; i++) {
    let y = wordEmbeddings.transformSequence(inputText[inputText.length - i], maxSentenceLength)
    console.log(typeof y)
    inputSequence[inputSequence.length - i] = y
  }
  const predictOut = sentimentModel.predict(tf.tensor([inputSequence]))
  const score = await predictOut.data()
  return score
}


//classifySentiment(sentences("The next step is making sure that a body of text can be passed into the embedding layer which shouldn't be too hard. In order for the text to be processed by the Keras embedding layer it needs to be converted to a list of numbers that correspond with the words in the text. There is already a framework in place to do this within the code, so I will try to finish that before next meeting")).then(res => console.log(res))
