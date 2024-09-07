let data1 = [
  "Is simply dummy text of the printing and typesetting industry.",
  "To fright the souls of fearful adversaries.",
  "Now is the winter of our discontent",
  "Now are our brows bound with victorious wreaths",
  "Nor made to court an amorous looking glass",
  "The carriage held but just ourselvesAnd Immortality",
  "We paused before a house that seemed A swelling of the ground",
  "You can hear the dew falling, and the hushed town breathing.",
  "Now is the winter of our discontent Made glorious summer by this sun of York"

];
var start = "";
var end = "";
var questionvalue = "";
var uservalue = "";
var right;
var value;
var questioninner;
const url = "https://goquotes-api.herokuapp.com/api/v1/random";
const input = document.querySelector("[name=input]");
const button = document.querySelector("button");
const question = document.querySelector(".question");
question.style.diplay = "none";

function getrandom(item) {
  let index = Math.floor(Math.random() * item.length);
  return item[index];
}

function playgame() {
  let date = new Date();
  start = date.getTime();
  questioninner = getrandom(data1);
  questionvalue = questioninner.split(" ");

  input.disabled = false;
  button.innerHTML = "Done";
  question.innerHTML = questioninner;
  question.style.diplay = "block";
}

function endgame() {
if(input.value.length < 5){
  input.placeholder = "Please type the above case."
}
else{
 
  var date = new Date();
  end = date.getTime();
  button.innerHTML = "Start Again!";

  value = input.value.split(" ");

  input.disabled = true;
  input.value = "";
  let speed = time(start, end, value.length);
  let check1 = check(value);
  if((check1 == questioninner.split(" ").length) || (speed <= 4) ){
    question.innerHTML = `YOU TYPED A WRONG CASE`}
  
  else{
  question.innerHTML = `You are able to type at the speed of  ${speed} words per minutes. There are ${check1} misspelled or incorrect words you typed.`;}}
}

function time(start, end, value) {
  let tot = (end - start) / 1000;
  tot = Math.round((value / tot) * 60);
  return tot;
}

function check(value) {
  let count = 0;
  right = questioninner.split(" ").forEach((element1, index) => {
    if (element1 !== value[index]) {
      count++;
    }
    return count

  });
 


  return count;
}

button.addEventListener("click", () => {
 

  if (button.innerHTML === "Done") {
    
    endgame()

  } else {
    playgame();
  }
});
