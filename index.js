
function playAudio(note){
  let audio
  console.log(note)
  audio = new Audio(`sounds/${note}.wav`) 
  audio.play()
}

function playNote(e) {
  let key = e.keyCode
  console.log(key)
  if (key =='65') { // keyboard a / piano C x
    return playAudio('c')
  }
  if (key == '83') {  // keyboard s / piano D x
    return playAudio('d')
  }
  if (key == '68'){  // keyboard d / piano E x
    return playAudio('e')
  }
  if (key == '70'){ // keyboard f / piano F x
    return playAudio('f')
  }
  if (key == '74'){ // keboard j / piano G x
    return playAudio('g')
  }
  if (key == '75'){ // keyboard k / piano A x
    return playAudio('a')
  }
  if (key == '76'){ // keboard l / piano B x
    return playAudio('b')
  }
  if (key == '186'){ // keyboard ; / piano C1 x
    return playAudio('c-5')
  }
}
  
document.addEventListener("keydown", playNote)

function changeColor(e) {
  const white = document.getElementsByClassName('white')

  white.addEventListener('click', function onClick(event)) {
      event.
  }
}








 {

 }