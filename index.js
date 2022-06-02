function playNote() {
let audio = new Audio('sounds/c-major.wav')
audio.play()
}

// CODE FROM JSC - DRESS-THE-CLOWN
// onkeydown for (a, s, d, e, f, j, k, l, ;)
function checkKey(e) {

}






{/* <audio id="audio" src="http://www.soundjay.com/button/beep-07.wav" autoplay="false" ></audio>
<a onclick="playSound();"> Play</a>
<script>
  function playSound() {
  var sound = document.getElementById("audio");
  sound.play();
} */}


document.getElementById('test-button').addEventListener('click', playNote())
