// N days before today
const daysAgo = (days)=>(
  Date.now() - 1000*60*60*24*days
)

// All entries within time period
const timePeriod = (entries, days)=>{
  const start = daysAgo(days)
  return entries.filter((entry)=>(
    entry.date.getTime() > start
  ))
}

const analyzeEmotions = (entries)=>{
  // List all emotions througout entries
  const allEmos = entries
    .map((entry)=>(entry.emotions))
    .flat()
  // Percentage of each emotion
  const percents = {}
  allEmos.forEach((emotion)=>{
    if(!percents[emotion]) percents[emotion]=0;
    percents[emotion]++;
  })
  for(let emotion in percents){
    percents[emotion] /= allEmos.length;
  }
  // Over and out
  return percents;
}

export function statistics(entries){
  // This function should output:
  //  - Stats from 1 week and 1 month past
  //  - The percentages of each emotion
  //  - A graph of emotions over time
  return {
    week : analyzeEmotions(timePeriod(entries, 7)),
    month: analyzeEmotions(timePeriod(entries, 30)),
  }
}
