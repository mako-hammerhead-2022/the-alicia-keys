

// CODE FROM JSC - DRESS-THE-CLOWN
// onkeydown for (a = 65, s=83, d=68, f=70, j=74, k=75, l=76, ;=186)


document.addEventListener("keyup", function(e){
 
  console.log(e)
  let key = e.keyCode

  if (key == '65') { // keyboard a / piano C
  } else if (key == '83') { // keyboard s / piano D
    
  } else if (key == '68') { // keyboard d / piano E
    
  } else if (key == '70') { // keyboard f / piano F

  } else if (key == '74') { // keboard j / piano G
    
  } else if (key == '75') { // keyboard k / piano A
    
  } else if (key == '76') { // keboard l / piano B
    
  } else if (key == '186') { // keyboard ; / piano C1
    
  }

})


function playNote(e) {
  console.log(e)
  let audio = new Audio('sounds/c-major.wav')
  audio.play()
  }





{/* <audio id="audio" src="http://www.soundjay.com/button/beep-07.wav" autoplay="false" ></audio>
<a onclick="playSound();"> Play</a>
<script>
  function playSound() {
  var sound = document.getElementById("audio");
  sound.play();
} */}




document.getElementById('test-button').addEventListener('click', playNote())
