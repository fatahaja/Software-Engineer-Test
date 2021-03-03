function solution(N, users) {
  let probArr = [];
  let devider = users.length;
  let answer = [];

  // checking the probability
  for(let i = 0; i < N; i++) {
    if (!users.includes(i+1)) { // first time element and not available in probArr
      probArr.push({
        stage : i + 1,
        probability : 0
      })
    } else {
      count = 0;
      // calculate the probability
      users.forEach(item => (item === i+1) ? count += 1 : count += 0);
      probArr.push({
        stage : i + 1,
        probability : (count/devider).toFixed(3)
      });
      devider -= count;
    } 
  }

  // sort decending
  probArr.sort(function(a, b) {return b.probability - a.probability})

  // update the answer
  probArr.forEach(item => answer.push(item.stage))

  return answer;
}

// let j = solution(5, [2,1,2,6,2,4,3,3]);
