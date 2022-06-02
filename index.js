
function playAudio(note){
  let audio
  console.log(note)
  audio = new Audio(`sounds/${note}.wav`) 
  audio.play()
}

function playNote(e) {
  let key = e.keyCode
  console.log(key)
  if (key =='83') { // keyboard S / piano C x
    return playAudio('c')
  }
  if (key == '68') {  // keyboard D / piano D x
    return playAudio('d')
  }
  if (key == '70'){  // keyboard F / piano E x
    return playAudio('e')
  }
  if (key == '71'){ // keyboard G / piano F x
    return playAudio('f')
  }
  if (key == '72'){ // keboard H / piano G x
    return playAudio('g')
  }
  if (key == '74'){ // keyboard J / piano A x
    return playAudio('a')
  }
  if (key == '75'){ // keboard K / piano B x
    return playAudio('b')
  }
  if (key == '76'){ // keyboard L / piano C1 x
    return playAudio('c-5')
  }
}



function addColor(e) {
  let key = e.keyCode.toString()
  document.getElementById(`${key}`).style.backgroundColor = '#FFF0D9'
}

function removeColor(e){
  let key = e.keyCode.toString()
  document.getElementById(`${key}`).style.backgroundColor = 'white'
}
  
document.addEventListener("keydown", playNote)
document.addEventListener("keydown", addColor)
document.addEventListener("keyup", removeColor)

const testClick = (e) => {
  console.log('hello' + e)
}


let element = document.getElementById("pianoKeyboard")

element.addEventListener('click', function handleClick(e) {
  console.log('element clicked' + e)})


 
