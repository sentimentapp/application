// import * as tf from '@tensorflow/tfjs'

// This function needs to return an array that contains the different emotions being felt
export function model_predict(text){

  console.log(text)

  const es = Math.floor(Math.random() * 2); 
  const ts = Math.floor(Math.random() * 2); 

  return new Promise((r)=>{
    setTimeout(()=>{
      r([
        (es%2) ? 'joy' : 'sadness',
        (ts%2) ? 'anger' : 'love',
      ])
    })
  });
}
