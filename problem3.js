function solution(relation) {
  let row = relation.length;
  let column = relation[0].length;
  let answer = 0;
  let comElement = Array.from(new Array(column), (x, i) => i + 1);

  // create possible combination based on column 
  const combinations = (array) => {
    return new Array(1 << array.length).fill().map(
      (e1, i) => array.filter((e2, j) => i & 1 << j));
  }
  
  // remove the []
  let arrOfCombine = combinations(comElement).slice(1);

  // check from the lowest elements of possible combination
  for(let n = 1; n <= column; n++) {
    for(let k = 0; k < arrOfCombine.length; k++) {
      if(arrOfCombine[k] !== undefined) { // we not use the undefined column
        if(arrOfCombine[k].length == n) {
          cek = [];
          combiNum = arrOfCombine[k];
          for(let i = 0; i < row; i++) {
            // combine the column base on arrOfCombine
            let temp = ''
            for(let u = 0; u < arrOfCombine[k].length; u++) {
              temp += relation[i][(arrOfCombine[k][u])-1];
            }
            // generate cek
            cek.push(temp); 
          }
    
          cek = cek.filter((x, i, a) => a.indexOf(x) == i); // return only unique element
    
          // checking the length
          if(cek.length === relation.length) {
            for(let x = 0; x < combiNum.length; x++) {
              for(let y = 0; y < arrOfCombine.length; y++) {
                if(arrOfCombine[y] !== undefined) { // we not use the undefined column
                  if(arrOfCombine[y].includes(combiNum[x])) {
                    delete arrOfCombine[y]; // the value will be undefined for the column that could be key
                  }
                }
              }
            }

            // update the answer
            answer++;
          }
        }
      }
    }
  }

  return answer;
}

// let j = [["100","ryan","music","2"],["200","apeach","math","2"],
//         ["300","tube","computer","3"],["400","con","computer","4"],
//         ["500","muzi","music","3"],["600","apeach","music","2"]];

// solution(j);
