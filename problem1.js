function solution(record) {
  let data = [];
  let answer = [];
  let idContainer = {};

  for (i = 0; i < record.length; i++) {
    let x = record[i].split(' ');

    // store split record in data
    data[i] = {
      type: x[0],
      id: x[1],
      username: x[2]
    }

    // store the id with the index
    if(idContainer[data[i].id]) {
      idContainer[data[i].id].push(i);
    } else {
      idContainer[data[i].id] = [];
      idContainer[data[i].id].push(i);
    }

    // checking the data
    if(data[i].type === 'Leave') { // type 'Leave'
      // grab username with the same id and update the property answer
      for(let u of idContainer[data[i].id]) {
        data[i].username = data[u].username;
        data[i].answer = data[u].username + ' has left.';
      }
    } else { // type 'Enter' or 'Change' will change the old username
      // change the username with the same id
      for(let k of idContainer[data[i].id]) {
        data[k].username = data[i].username;
        if (data[k].type === 'Enter') {
          data[k].answer = data[i].username + ' came in.';
        } else if (data[k].type === 'Leave'){
          data[k].answer = data[i].username + ' has left.';
        }
      }

      // update the property answer 
      if (data[i].type === 'Enter') {
        data[i].answer = data[i].username + ' came in.';
      } else {
        data[i].answer = null;
      }
    }
  }

  // update answer if data.answer not null
  data.forEach(item => {
    if (item.answer) {
      answer.push(item.answer);
    }
  })
  
  return answer;
}

// let j = solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]);
