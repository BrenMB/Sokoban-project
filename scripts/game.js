//matriz mapa
var mapa = new Array(10).fill(null).map(e => new Array(10).fill(0))
console.log(mapa)

//fnc start level

// 0 = vacio
// 1 = personaje
// 2 = box inamv
// 3 = box movb
// 4 = gema


const personaje = {}
const caja = []

// esta func posicionara cada elem(persj,block)
function updateLevel (level) {

  if (Object.keys(personaje).length === 0 ) {

    personaje.x   = level.personaje.x
    personaje.y   = level.personaje.y
    personaje.dir = level.personaje.dir

  }
  
  if (caja.length === 0 ) { 

    count = 0
   
    for (let i = 0; i < level.cajas.length; i++) {

      const obj = {}
      obj.x = level.cajas[i].x
      obj.y = level.cajas[i].y
      obj.dir = level.cajas[i].dir
      caja.push(obj)

    }

    
  }
  
  console.log(caja)
  mapa[personaje.x][personaje.y] = 1

  for (let i = 0; i < caja.length; i++) {
    mapa[caja[i].x][caja[i].y] = 3
  
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
  // mapa[cajaM.x][cajaM.y] = 0

  movPlayer()

  // if (personaje.x === cajaM.x && personaje.y === cajaM.y){
  //   movBox()
  // }
  updateLevel()

}

function movPlayer() {
  // 0 = up, 3 = right, 6 = down, 9 = left
  if (personaje.dir === 0) {personaje.x === 0 ? personaje.x : personaje.x--}
  if (personaje.dir === 3) {personaje.y === 9 ? personaje.y : personaje.y++}
  if (personaje.dir === 6) {personaje.x === 9 ? personaje.x : personaje.x++}
  if (personaje.dir === 9) {personaje.y === 0 ? personaje.y : personaje.y--}
 
}

function movBox () {

  if (personaje.dir === 0) {  
    cajaM.x === 0 ? cajaM.x : cajaM.x-- 
    if (cajaM.x === 0 && personaje.x === 0) { personaje.x++ }
  }

  if (personaje.dir === 3) {
    cajaM.y === 9 ? cajaM.y : cajaM.y++
    if (cajaM.y === 9 && personaje.y === 9) { personaje.y-- }
  }

  if (personaje.dir === 6) {
    cajaM.x === 9 ? cajaM.x : cajaM.x++
    if (cajaM.x === 9 && personaje.x === 9) { personaje.x-- }
  }

  if (personaje.dir === 9) {
    cajaM.y === 0 ? cajaM.y : cajaM.y--
    if (cajaM.y === 0 && personaje.y === 0) { personaje.y++ }
  }
  
}

function win () {
  if (cajaM.x === gema.x && cajaM.y === gema.y){
    const elem = document.querySelector(`.row${cajaM.x + 1}>.colm${cajaM.y + 1}`)
    elem.classList.remove('gema')
    elem.classList.add('caja')
    setTimeout(function(){alert("YOU WIN!!")}, 300)
  }
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