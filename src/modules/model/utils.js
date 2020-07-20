import * as lzstring from 'lz-string'
import * as tf from 'tfjs'

export const unpackVectors = (data, type) => {
  let jsonData = JSON.parse(lzstring.decompressFromBase64(data))
  let array = tf.tensor(jsonData.vectors, jsonData.shape, type)
  return array
}

export const fetchModel = async url => {
  let response = await fetch(url)
  let data = await response.json()
  return data
}
