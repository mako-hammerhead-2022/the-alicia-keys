
function playAudio(note){
  let audio
  console.log(note)
  if(note === 'c-5'){
    audio = new Audio(`sounds/$c-5.wav`) //'sounds/ + __ + '-major.wav'
  }
  audio = new Audio(`sounds/${note}.wav`) //'sounds/ + __ + '-major.wav'
  audio.play()
}


function playNote(e) {
  
  let key = e.keyCode
  console.log(key)
  if (key =='65') { //works
    return playAudio('c')
  }
  if (key == '83') { //works
    return playAudio('d')
  }
  if (key == '68'){
    return playAudio('e')
  }
  if (key == '70'){
    console.log(key)
    return playAudio('f')
  }
  if (key == '74'){
    console.log(key)
    return playAudio('g')
  }
  if (key == '75'){
    return playAudio('a')
  }
  if (key == '76'){
    return playAudio('b')
  }
  if (key == '186'){
    return playAudio('c-5')
  }
  }
  
document.addEventListener("keydown", playNote)
 
  // // if (key == '65') { // keyboard a / piano C x
  // } else if (key == '83') { // keyboard s / piano D x
    
  // } else if (key == '68') { // keyboard d / piano E x
    
  // } else if (key == '70') { // keyboard f / piano F x

  // } else if (key == '74') { // keboard j / piano G x
    
  // } else if (key == '75') { // keyboard k / piano A x
    
  // } else if (key == '76') { // keboard l / piano B x
    
  // } else if (key == '186') { // keyboard ; / piano C1 x
    
  // }
  









