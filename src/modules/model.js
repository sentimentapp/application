import * as embeddings from './model/embeddings'
import wordEmbeddingsObject from './model/pretrained/word-embeddings.object.js'
import * as tf from '@tensorflow/tfjs'

let sentimentModel, wordEmbeddings

const maxEntryLength = 15
const maxSentenceLength = 70

export function emotions(text){
  text
  const es = Math.floor(Math.random() * 2)
  const ts = Math.floor(Math.random() * 2)
  return new Promise((r)=>{
    setTimeout(()=>{
      r([
        (es%2) ? 'happy' : 'sad',
        (ts%2) ? 'angry' : 'bored',
      ])
    }, 1000)
  })
}

async function loadModel() {
  const sentimentModel = await tf.loadLayersModel('model.json')
  const wordEmbeddings = await embeddings.loadModel(wordEmbeddingsObject)

  return sentimentModel, wordEmbeddings
}

let zeros = dimensions => {
  let array = [];

  for (let i = 0; i < dimensions[0]; ++i) {
      array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
  }

  return array;
}

loadModel().then(res => { sentimentModel, wordEmbeddings = res }).then(classifySentiment(['summer', 'breeze', 'makes', 'me', 'feel', 'fine']).then(console.log))

async function classifySentiment(inputText) {
  let inputSequence = zeros([maxEntryLength, maxSentenceLength])
  for (let i = 1; i <= inputText.length; i++) {
    inputSequence[inputSequence.length - i] = wordEmbeddings.transformSequence(inputText[inputText.length - i], maxSentenceLength)
  }
  console.log(inputSequence)
  const predictOut = sentimentModel.predict(inputSequence.expandDims(0))
  const score = predictOut.dataSync()[0]
  return score
}
