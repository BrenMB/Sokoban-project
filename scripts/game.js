//matriz mapa
var mapa = new Array(10).fill(null).map(e => new Array(10).fill(0))
console.log(mapa)

//fnc start level

// 0 = vacio
// 1 = personaje
// 2 = box inamv
// 3 = box movb
// 4 = gema

//elementos
const personaje = {}
const caja = []
const gema = []

// esta func posicionara cada elem(persj,block)
function updateLevel (level) {

  if (Object.keys(personaje).length === 0 ) {

    personaje.x   = level.personaje.x
    personaje.y   = level.personaje.y
    personaje.dir = level.personaje.dir

  }
  
  if (caja.length === 0 ) { 

    for (let i = 0; i < level.cajas.length; i++) {

      const obj = {}
      obj.x = level.cajas[i].x
      obj.y = level.cajas[i].y
      obj.dir = level.cajas[i].dir
      caja.push(obj)

    }
  }
  
  if (gema.length === 0 ) { 

    for (let i = 0; i < level.gemas.length; i++) {

      const obj = {}
      obj.x = level.gemas[i].x
      obj.y = level.gemas[i].y
      gema.push(obj)

    }

  }
  // console.log(gema)
  mapa[personaje.x][personaje.y] = 1
  
  
    for (let i = 0; i < caja.length; i++) {
      mapa[caja[i].x][caja[i].y] = 3
    
    }

    for (let i = 0; i < gema.length; i++) {
      mapa[gema[i].x][gema[i].y] = 4
    
    }

  // for (let i = 0; i < level.gema.length; i++) {
    //   mapa[level.gema[i][`gema${i}`].x][level.gema[i][`gema${i}`].y] = 4
    
    // }
    
    // mapa[personaje.x][personaje.y] = 1
    // mapa[cajaM.x][cajaM.y] = 3
    // mapa[gema.x][gema.y] = 4
    printBoard()
    // win()
  }
  
function printBoard(){
  mapa.forEach((row, r)   => { 
    row.forEach((colm, c) => {
      //elem cada valor de la matriz en la tabla
      const elem = document.querySelector(`.row${r + 1}>.colm${c + 1}`)
      elem.classList.remove('personaje')
      elem.classList.remove('caja')
      if (mapa[r][c] === 1)  {
        elem.classList.add('personaje')
      }
      if (mapa[r][c] === 3)  {
        elem.classList.add('caja')
      }
      if (mapa[r][c] === 4) {
        elem.classList.add('gema')
      }
    })
  })
}


function move () {
  mapa[personaje.x][personaje.y] = 0

  for (let i = 0; i < caja.length; i++) {
    mapa[caja[i].x][caja[i].y] = 0
  }

  movPlayer()

  for (let i = 0; i < caja.length; i++) {
    if (personaje.x === caja[i].x && personaje.y === caja[i].y){ movBox(i) }

  }

  // if (personaje.x === cajaM.x && personaje.y === cajaM.y){
  //   movBox()
  // }
  updateLevel()

}

function movPlayer() {
  // 0 = up, 3 = right, 6 = down, 9 = left
  for (let i = 0; i < gema.length; i++) {
    if (personaje.x === gema[i].x && personaje.y === gema[i].y){
      const elem = document.querySelector(`.row${personaje.x + 1}>.colm${personaje.y + 1}`)

      elem.classList.add('gema')
      elem.classList.remove('personaje2')
      // setTimeout(function(){alert("YOU WIN!!")}, 300)
      // console.log('hola')
    }
  }
  if (personaje.dir === 0) {personaje.x === 0 ? personaje.x : personaje.x--}
  if (personaje.dir === 3) {personaje.y === 9 ? personaje.y : personaje.y++}
  if (personaje.dir === 6) {personaje.x === 9 ? personaje.x : personaje.x++}
  if (personaje.dir === 9) {personaje.y === 0 ? personaje.y : personaje.y--}

  for (let i = 0; i < gema.length; i++) {
    if (personaje.x === gema[i].x && personaje.y === gema[i].y){
      const elem = document.querySelector(`.row${personaje.x + 1}>.colm${personaje.y + 1}`)

      elem.classList.remove('gema')
      elem.classList.add('personaje2')
      // setTimeout(function(){alert("YOU WIN!!")}, 300)
      // console.log('hola')
    }
  }
}

function movBox (ind) {
  for (let i = 0; i < gema.length; i++) {
    
    if (caja[ind].x === gema[i].x && caja[ind].y === gema[i].y){
      const elem = document.querySelector(`.row${caja[ind].x + 1}>.colm${caja[ind].y + 1}`)
      elem.classList.remove('cajaOnGema')
      elem.classList.add('gema')
    }
  }

  if (personaje.dir === 0 ) {  
    caja[ind].x === 0 ? caja.x : caja[ind].x-- 
    if (caja[ind].x === 0 && personaje.x === 0) { personaje.x++ }
    for (let i = 0; i < caja.length; i++) {
      if (ind !== i){ 
        if (caja[ind].x === caja[i].x && caja[ind].y === caja[i].y){
          caja[ind].x++
          personaje.x++
        }
      }
    }
  }

  if (personaje.dir === 3) {
    caja[ind].y === 9 ? caja[ind].y : caja[ind].y++
    if (caja[ind].y === 9 && personaje.y === 9) { personaje.y-- }
    for (let i = 0; i < caja.length; i++) {
      if (ind !== i){ 
        if (caja[ind].x === caja[i].x && caja[ind].y === caja[i].y){
          caja[ind].y--
          personaje.y--
        }
      }
    }
  }

  if (personaje.dir === 6) {
    caja[ind].x === 9 ? caja[ind].x : caja[ind].x++
    if (caja[ind].x === 9 && personaje.x === 9) { personaje.x-- }
    for (let i = 0; i < caja.length; i++) {
      if (ind !== i){ 
        if (caja[ind].x === caja[i].x && caja[ind].y === caja[i].y){
          caja[ind].x--
          personaje.x--
        }
      }
    }
  }

  if (personaje.dir === 9) {
    caja[ind].y === 0 ? caja[ind].y : caja[ind].y--
    if (caja[ind].y === 0 && personaje.y === 0) { personaje.y++ }
    for (let i = 0; i < caja.length; i++) {
      if (ind !== i){ 
        if (caja[ind].x === caja[i].x && caja[ind].y === caja[i].y){
          caja[ind].y++
          personaje.y++
        }
      }
    }
  }
  win(ind)
}


function win (ind) {
  for (let i = 0; i < gema.length; i++) {
    
    if (caja[ind].x === gema[i].x && caja[ind].y === gema[i].y){
      const elem = document.querySelector(`.row${caja[ind].x + 1}>.colm${caja[ind].y + 1}`)
      elem.classList.remove('gema')
      elem.classList.add('cajaOnGema')
      trueWin()
    }
  }
}

function trueWin () {
  let count = 0;
  for (let i = 0; i < gema.length; i++) {
    for (let j= 0; j < caja.length; j++) {
      if (gema[i].x === caja[j].x && gema[i].y === caja[j].y){
        count++
      }
    }
    
  }
  if (count === gema.length ) { setTimeout(function(){alert("YOU WIN!!")}, 300)}
  
}

function startLevel () {

  updateLevel(levels.level1)
}
startLevel()
// esto sucede siempre que clikeemos una tecla

document.addEventListener ('keydown', function(e){
  //previene el scroll
  e.preventDefault()

  if (e.code === 'ArrowUp')    { 
    personaje.dir = 0
    move()
  }

  if (e.code === 'ArrowRight') {
    personaje.dir = 3 
    move()
  }

  if (e.code === 'ArrowDown')  {
    personaje.dir = 6
    move()
  }

  if (e.code === 'ArrowLeft')  { 
    personaje.dir = 9 
    move()
  }

})