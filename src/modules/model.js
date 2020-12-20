// import * as tf from '@tensorflow/tfjs'

export function emotions(text){
  text
  const es = Math.floor(Math.random() * 2); 
  const ts = Math.floor(Math.random() * 2); 

  return new Promise((r)=>{
    setTimeout(()=>{
      r([
        (es%2) ? 'happy' : 'sad',
        (ts%2) ? 'angry' : 'bored',
      ])
    })
  });
}
