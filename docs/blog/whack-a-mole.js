document.addEventListener('DOMContentLoaded', initGame)

console.log("Whack-a-Mole!")

myBody = document.getElementsByTagName('body')[0]
myTable = myBody.getElementsByTagName('table')[0]
myTableBody = myTable.getElementsByTagName('tbody')[0]
myRow = myTableBody.getElementsByTagName('tr')

let counter = 0
document.getElementById('counter').innerHTML = "counter: " + counter

let row = (Math.floor(Math.random()*5))
let col = (Math.floor(Math.random()*5))

function generateMole() {
  let rw = row            // check variables rw and cl makes sure same index can't come out twice
  let cl = col
  while (row == rw && col == cl) {
    row = (Math.floor(Math.random()*5))
    col = (Math.floor(Math.random()*5))
  }
  myCel = myRow[row].getElementsByTagName('td')[col]
  myCel.innerHTML = "<img src='./mole.PNG' alt='mole' width='100%' height='100%'>"
  bindOnclickToCel(myCel)
  console.log(rw,cl,row,col)
}

function bindOnclickToCel(cel) {
  cel.onclick = function() { 
    cel.innerHTML = ""
    cel.onclick = null
    var audio = new Audio()
    audio.src = "./whack-audio.wav"
    audio.play()
    generateMole()
    counter += 1
    document.getElementById('counter').innerHTML = "counter: " + counter
  }
}

function initGame(){
  counter = 0
  document.getElementById('counter').innerHTML = "counter: " + counter
  myRow[row].getElementsByTagName('td')[col].innerHTML = ""
  generateMole()
  timer()
}

function timer() {
  let sec = 10;
  timeVar = setInterval(function() {
    document.getElementById('resetButton').addEventListener('click', function() {
      clearInterval(timeVar)
      initGame()
    })
    document.getElementById("timer").innerHTML = "You have " + sec + " seconds left"
    if (sec == 0) {
      document.getElementById("timer").innerHTML = "You have " + sec + " seconds left"
      highscoreRecorder()
      setTimeout(function () {    
        alertFunction(counter)
      }, 1)
      clearInterval(timeVar)
      setTimeout(function () {    
        initGame()
      }, 2)
    }
    sec--;
  }, 1000);
}

let highscore = 0
function highscoreRecorder() {
  if(counter >= highscore) {
    highscore = counter
    document.getElementById('highscore').innerHTML= "Highscore: " + highscore
  }
}

function alertFunction(count) {
  alert("Shot, Boss! Your final total was: " + count)
}