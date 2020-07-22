import * as lzstring from 'lz-string'
import * as tf from '@tensorflow/tfjs'

export const unpackVectors = (data, type) => {
  let jsonData = JSON.parse(lzstring.decompressFromBase64(JSON.stringify(data)))
  let array = tf.tensor(jsonData.vectors, jsonData.shape, type)
  return array
}
