import * as utils from './utils'
import * as tf from '@tensorflow/tfjs'

export class WordEmbeddings {
  constructor(codes, centroids, vocabulary) {
    this.vocabulary = vocabulary
    this.centroids = centroids
    this.codes = codes
  }

  // Return the vector representation of a word as a tensor
  _getVector(word) {
    let index = this.vocabulary.indexOf(word)
    if (index === -1) return tf.zeros([this.codes.shape[1]*this.centroids.shape[2]])
    let codes = this._getSearchVector(index)
    let indices = tf.range(0, this.codes.shape[1], 1, 'int32')
    let search = tf.stack([indices, codes], -1)
    let vector = tf.gatherND(this.centroids, search).flatten()
    return vector
  }

  _getSearchVector(index) {
      return this.codes.gather([index]).as1D()
  }

  transformSequence(words, sequenceLength) {
    let vectors = []
    for (let i = 0; i < words.length; i++) {
      vectors.push(this._getVector(words[i]))
    }
    let sequence = tf.stack(vectors)
    sequence = sequence.pad([[sequenceLength - words.length, 0], [0, 0]])
    return sequence
  }

  // _getVector returns a Promis of the word vector as a float array
  getVector(word) {
    return this._getVector(word).dataSync()
  }
}

export const loadModel = async model => {
  console.log("Unpacking codes")
  let codes = utils.unpackVectors(model.codes, 'int32')
  await tf.nextFrame()
  console.log("Unpacking centroids")
  let centroids = utils.unpackVectors(model.centroids, 'float32')
  await tf.nextFrame()
  return new WordEmbeddings(codes, centroids, model.vocabulary)
}
