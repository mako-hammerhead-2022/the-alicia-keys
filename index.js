

// CODE FROM JSC - DRESS-THE-CLOWN
// onkeydown for (a = 65, s=83, d=68, f=70, j=74, k=75, l=76, ;=186)

const logKey = (e) => {
  console.log(e)
}

document.addEventListener('keyup', logKey(e))

function checkKey(e) {


  console.log(e)

  if (e.keyCode == '65') { // keyboard a / piano C
  } else if (e.keyCode == '83') { // keyboard s / piano D
    
  } else if (e.keyCode == '68') { // keyboard d / piano E
    
  } else if (e.keyCode == '70') { // keyboard f / piano F

  } else if (e.keyCode == '74') { // keboard j / piano G
    
  } else if (e.keyCode == '75') { // keyboard k / piano A
    
  } else if (e.keyCode == '76') { // keboard l / piano B
    
  } else if (e.keyCode == '186') { // keyboard ; / piano C1
    
  }

}








{/* <audio id="audio" src="http://www.soundjay.com/button/beep-07.wav" autoplay="false" ></audio>
<a onclick="playSound();"> Play</a>
<script>
  function playSound() {
  var sound = document.getElementById("audio");
  sound.play();
} */}

function playNote(e) {
  console.log(e)
  let audio = new Audio('sounds/c-major.wav')
  audio.play()
  }


document.getElementById('test-button').addEventListener('click', playNote())
