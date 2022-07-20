var SCISSORS = '가위';
var ROCK = '바위';
var PAPER = '보';

// '가위', '바위', '보' 버튼 클릭 핸들러
function onButtonClick(userInput) {
  var comInput;
  var rnd = Math.floor(Math.random()*3 + 1);
  console.log(rnd)

  if (rnd == 1) {
    comInput = SCISSORS;
  } else if (rnd == 2) {
    comInput = ROCK;
  } else {
    comInput = PAPER;
  }

  var result = '컴퓨터: ' + comInput;

  if (userInput === SCISSORS) {
    if (comInput === SCISSORS) {
      result += ' - 컴퓨터와 비겼습니다.';
    } else if (comInput === ROCK) {
      result += ' - 컴퓨터에게 졌습니다...';
    } else {
      result += ' - 컴퓨터를 이겼습니다!!';
    }
  } else if (userInput === ROCK) {
    if (comInput === SCISSORS) {
      result += ' - 컴퓨터를 이겼습니다!!';
    } else if (comInput === ROCK) {
      result += ' - 컴퓨터와 비겼습니다.';
    } else {
      result += ' - 컴퓨터에게 졌습니다...';
    }
  } else {
    if (comInput === SCISSORS) {
      result += ' - 컴퓨터에게 졌습니다...';
    } else if (comInput === ROCK) {
      result += ' - 컴퓨터를 이겼습니다!!';
    } else {
      result += ' - 컴퓨터와 비겼습니다.';
    }
  }

  alert(result);
}
