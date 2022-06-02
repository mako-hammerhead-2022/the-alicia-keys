

// CODE FROM JSC - DRESS-THE-CLOWN
// onkeydown for (a = 65, s=83, d=68, f=70, j=74, k=75, l=76, ;=186)

function playNote(e) {
  console.log(e)
  let audio = new Audio('sounds/a-major.wav') //'sounds/ + __ + '-major.wav'
  audio.play()
  }


document.addEventListener("keydown", function(e){
 
  console.log(e)
  let key = e.keyCode

  if (key =='65') { //works
    playNote(e) 
  // } else if (key == '83') { //works
  //   playNote(e)
  // } else if (key == '68') { //works
  //   playNote(e)
  // } else if (key == '70') { //works
  //   playNote(e)
  // } else if (key == '74') { //works
  //   playNote(e)
  // } else if (key == '75') { //works
  //   playNote(e)
  // } else if (key == '76') { //works
  //   playNote(e)
  // } else if (key == '186') { //works but piano sample website only has C in one octive, maybe we can take this key out? 
  //   //8 keys vs 7 audio files
  //   playNote(e)
  // }
  // // if (key == '65') { // keyboard a / piano C x
  // } else if (key == '83') { // keyboard s / piano D x
    
  // } else if (key == '68') { // keyboard d / piano E x
    
  // } else if (key == '70') { // keyboard f / piano F x

  // } else if (key == '74') { // keboard j / piano G x
    
  // } else if (key == '75') { // keyboard k / piano A x
    
  // } else if (key == '76') { // keboard l / piano B x
    
  // } else if (key == '186') { // keyboard ; / piano C1 x
    
  // }
  }
)








/* <audio id="audio" src="http://www.soundjay.com/button/beep-07.wav" autoplay="false" ></audio>
<a onclick="playSound();"> Play</a>
<script>
  function playSound() {
  var sound = document.getElementById("audio");
  sound.play();
} */




document.getElementById('test-button').addEventListener('click', playNote())
