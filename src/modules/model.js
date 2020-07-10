export function emotions(text){
  const es = (text.match(/e/g)||[]).length;
  const ts = (text.match(/t/g)||[]).length;
  return new Promise((r)=>{
    setTimeout(()=>{
      r([
        (es%2) ? 'happy' : 'sad',
        (ts%2) ? 'excited' : 'bored',
      ])
    }, 1000)
  });
}
