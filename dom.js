console.log('Hello, DOM!');
    
//     window.onload = main();
    
//     function main() {
//       const studentList = document.getElementById('students');
//       const newLi = document.createElement('li');
//       newLi.innerHTML = '<a href="#">Mr. Javascript</a>';
//       studentList.appendChild(newLi);
      
//     }

console.log('Hello, DATA!');
function requestJSON(){
fetch('http://api.icndb.com/jokes/random')
  .then(response => response.json())
  .then(gotJSON);
}

function gotJSON(json) {
  console.log('Update Data');
  const joke = json.value.joke;
  console.log(json);

const answer = document.getElementById('joke_answer');

answer.innerHTML = '';

  for(const norrisJoke of joke){
    const desc = joke;
    console.log(desc);

  const newH3 = document.createElement('h3');
  newH3.innerHTML = desc;
  answer.appendChild(newH3);
  }
}

requestJSON();

  // console.log(json.title);
  // console.log(`My id is ${json.id}!`);


//what is the dollar sign?
//is there a process to setting this up?
//

    // console.log(variable)