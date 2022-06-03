let rickRollArray = []
let validKeys = [
  '83',
  '68',
  '70',
  '71',
  '72',
  '74',
  '75',
  '76',
  '69',
  '82',
  '89',
  '85',
  '73',
]
const rickRollNotes = ['71', '71', '71', '71', '74', '74', '72']
// g, g, g, g, j, j, h

//rick roll stuff
function playRickRoll() {
  rickRollArray = []
  document.getElementById('rick').src =
    'https://c.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif'
  let audio
  audio = new Audio(`sounds/rick-roll.mp3`)
  audio.play()
}
function checkKey(key) {
  if (rickRollNotes.includes(String(key))) {
    rickRollArray.push(String(key))
  }
}

const shouldPlayRickRoll = () => {
  const last7Notes = rickRollArray.slice(-7)
  return rickRollNotes.every((key, index) => last7Notes[index] === key)
}

function attemptToRickRoll() {
  if (shouldPlayRickRoll()) {
    console.log('RICK ROLLLLL')
    playRickRoll()
  }
}

//rest of code
function playAudio(note) {
  let audio
  audio = new Audio(`sounds/${note}.wav`)
  audio.play()
}

function playNote(e) {
  let key = e.keyCode
  console.log(key)
  checkKey(key)
  attemptToRickRoll()
  if (key == '83') {
    // keyboard S / piano C x
    return playAudio('c')
  }
  if (key == '68') {
    // keyboard D / piano D x
    return playAudio('d')
  }
  if (key == '70') {
    // keyboard F / piano E x
    return playAudio('e')
  }
  if (key == '71') {
    // keyboard G / piano F x
    return playAudio('f')
  }
  if (key == '72') {
    // keboard H / piano G x
    return playAudio('g')
  }
  if (key == '74') {
    // keyboard J / piano A x
    return playAudio('a')
  }
  if (key == '75') {
    // keboard K / piano B x
    return playAudio('b')
  }
  if (key == '76') {
    // keyboard L / piano C1 x
    return playAudio('c-5')
  }
  if (key == '69') {
    // keyboard E / piano C sharp
    return playAudio('c-sharp')
  }
  if (key == '82') {
    //keyboard R / piano D Sharp
    return playAudio('d-sharp')
  }
  if (key == '89') {
    //keyboard Y / piano F Sharp
    return playAudio('f-sharp')
  }
  if (key == '85') {
    //keyboard U / piano G sharp
    return playAudio('g-sharp')
  }
  if (key == '73') {
    //keyboard I / piano A sharp
    return playAudio('a-sharp')
  }
}

function playClickedNote(e) {
  let key = e.target.id
  console.log(key)
  if (key == '83') {
    // keyboard S / piano C x
    return playAudio('c')
  }
  if (key == '68') {
    // keyboard D / piano D x
    return playAudio('d')
  }
  if (key == '70') {
    // keyboard F / piano E x
    return playAudio('e')
  }
  if (key == '71') {
    // keyboard G / piano F x
    return playAudio('f')
  }
  if (key == '72') {
    // keboard H / piano G x
    return playAudio('g')
  }
  if (key == '74') {
    // keyboard J / piano A x
    return playAudio('a')
  }
  if (key == '75') {
    // keboard K / piano B x
    return playAudio('b')
  }
  if (key == '76') {
    // keyboard L / piano C1 x
    return playAudio('c-5')
  }
  if (key == '69') {
    // keyboard E / piano C sharp
    return playAudio('c-sharp')
  }
  if (key == '82') {
    //keyboard R / piano D Sharp
    return playAudio('d-sharp')
  }
  if (key == '89') {
    //keyboard Y / piano F Sharp
    return playAudio('f-sharp')
  }
  if (key == '85') {
    //keyboard U / piano G sharp
    return playAudio('g-sharp')
  }
  if (key == '73') {
    //keyboard I / piano A sharp
    return playAudio('a-sharp')
  }
}
function addColor(e) {
  let key = e.keyCode.toString()
  document.getElementById(`${key}`).classList.add('pressed-key')
}

function addClickColor(e) {
  let clickedKey = e.target.id
  document.getElementById(`${clickedKey}`).classList.add('clicked-key')
}

function removeColor(e) {
  let key = e.keyCode.toString()
  document.getElementById(`${key}`).classList.remove('pressed-key')
}

function removeClickColor(e) {
  let clickedKey = e.target.id
  document.getElementById(`${clickedKey}`).classList.remove('clicked-key')
}

document.addEventListener('keydown', playNote)
document.addEventListener('keydown', addColor)
document.addEventListener('keyup', removeColor)

const element = document.querySelector('.keys')

// element.addEventListener('mousedown', playClickedNote)
// element.addEventListener('mousedown', addClickColor)
// element.addEventListener('mouseup', removeClickColor)
