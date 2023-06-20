function sequenceSum(begin,end,step) {
  if (begin > end){
    return 0;
  } else if(begin === end){
    return begin;
  }
  
  let result = begin;
  
  for(let i = begin; i <= end; i = i + step ){

    if (i + step <= end){
      result += i+step;
    } else {
      break;
    }
    
  }
  return result;
}

module.exports = sequenceSum;
