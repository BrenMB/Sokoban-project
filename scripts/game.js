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

// esta func posicionara cada elem(persj,block, gema) en la matriz
//PARAMETRO  LEVELS.(level actual)

function updateLevel(level) {

  //actualiza post de personaje en la matriz
  mapa[personaje.x][personaje.y] = 1

  //actualiza post de caja en la matriz
  for (let i = 0; i < caja.length; i++) {
    mapa[caja[i].x][caja[i].y] = 3

  }

  //actualiza post de gema en la matriz
  for (let i = 0; i < gema.length; i++) {
    mapa[gema[i].x][gema[i].y] = 4

  }

  printBoard()
 
}

// se encarga de convertir los valores de la mtriz en clases y que se puedan ver en HTML
function printBoard() {

  //recorre toda la matriz
  mapa.forEach((row, r) => {
    row.forEach((colm, c) => {
      //elem cada valor de la matriz en la tabla
      const elem = document.querySelector(`.row${r + 1}>.colm${c + 1}`)
      
      //limpiamos  todas las clases 
      elem.classList.remove('personaje')
      elem.classList.remove('caja')
      elem.classList.remove('floor1')
      elem.classList.remove('gema')
      elem.classList.remove('personajeU')
      elem.classList.remove('personajeR')
      elem.classList.remove('personaje')
      elem.classList.remove('personajeL')

      //dependiendo del valor de la matriz anadimos diferentes elem(caja,gema..)
      if (mapa[r][c] === 1) {
        if (personaje.dir === 0){ elem.classList.add('personajeU')}
        if (personaje.dir === 3){ elem.classList.add('personajeR')}
        if (personaje.dir === 6){ elem.classList.add('personaje')}
        if (personaje.dir === 9){ elem.classList.add('personajeL')}

      }
      if (mapa[r][c] === 3) {
        elem.classList.add('caja')
      }
      if (mapa[r][c] === 4) {
        elem.classList.add('gema')
      }
      if (mapa[r][c] === 0){
        elem.classList.add('floor1')
      }
    })
  })
}

//actualiza la matriz
function move() {

  //antes de mover personaje y cajas camabiamos sus valores anteriores a 0
  mapa[personaje.x][personaje.y] = 0

  for (let i = 0; i < caja.length; i++) {
    mapa[caja[i].x][caja[i].y] = 0
  }

  movPlayer()

  for (let i = 0; i < caja.length; i++) {
    if (personaje.x === caja[i].x && personaje.y === caja[i].y) { movBox(i) }

  }

  // for (let i = 0; i < gema.length; i++) {
  //   mapa[gema[i].x][gema[i].y] = 0
  // }


  updateLevel()

}

//mueve el personaje en la matriz
function movPlayer() {
  // 0 = up, 3 = right, 6 = down, 9 = left

  //antes de moeverlo comprobamos si esta sobre gema y le cambiamos la clase
  for (let i = 0; i < gema.length; i++) {
    if (personaje.x === gema[i].x && personaje.y === gema[i].y) {
      const elem = document.querySelector(`.row${personaje.x + 1}>.colm${personaje.y + 1}`)

      elem.classList.add('gema')
      elem.classList.remove('personaje2')
     
    }
  }

  //depende de la posicion del personaje se mueve si no esta en borde 
  if (personaje.dir === 0) { personaje.x === 0 ? personaje.x : personaje.x-- }
  if (personaje.dir === 3) { personaje.y === 9 ? personaje.y : personaje.y++ }
  if (personaje.dir === 6) { personaje.x === 9 ? personaje.x : personaje.x++ }
  if (personaje.dir === 9) { personaje.y === 0 ? personaje.y : personaje.y-- }

  // pregunta si al mover el personaje estamos sobre gema
  for (let i = 0; i < gema.length; i++) {

    //pregunta si estamos sobre gema 
    if (personaje.x === gema[i].x && personaje.y === gema[i].y) {

      const elem = document.querySelector(`.row${personaje.x + 1}>.colm${personaje.y + 1}`)

    //pregunta si estamos sobre caja
      for (let j = 0; j < caja.length; j++) {
        if (personaje.x === caja[j].x && personaje.y === caja[j].y) {
          elem.classList.remove('personaje2')
          break;

          //actualizamos clase
        } else {
          elem.classList.remove('gema')
          elem.classList.add('personaje2')

        }
      }
    }
  }
}

//se ejecuta cuando el perosnaje esta sobre una caja y le pasamos el parametro de la misma caja
function movBox(ind) {

  //antes de moeverlo comprobamos si esta sobre gema y le cambiamos la clase
  for (let i = 0; i < gema.length; i++) {

    if (caja[ind].x === gema[i].x && caja[ind].y === gema[i].y) {
      const elem = document.querySelector(`.row${caja[ind].x + 1}>.colm${caja[ind].y + 1}`)
      elem.classList.remove('cajaOnGema')
      elem.classList.add('gema')
    }
  }

  // preguntamos la direccion del personaje para mover la caja
  if (personaje.dir === 0) {

    //preguntamos si la caja esta en borde (si esta no se mueve y si no esta se mueve)
    caja[ind].x === 0 ? caja.x : caja[ind].x--

    //caja y personaje estan en borde retrocede el personaje
    if (caja[ind].x === 0 && personaje.x === 0) { personaje.x++ }

    //pregunta si la caja que estamos moviendo esta sobre otra caja
    for (let i = 0; i < caja.length; i++) {

      if (ind !== i) {

        //si lo esta retrocede la caja y personaje en caso de cada direccion
        if (caja[ind].x === caja[i].x && caja[ind].y === caja[i].y) {
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
      if (ind !== i) {
        if (caja[ind].x === caja[i].x && caja[ind].y === caja[i].y) {
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
      if (ind !== i) {
        if (caja[ind].x === caja[i].x && caja[ind].y === caja[i].y) {
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
      if (ind !== i) {
        if (caja[ind].x === caja[i].x && caja[ind].y === caja[i].y) {
          caja[ind].y++
          personaje.y++
        }
      }
    }
  }

  //si personaje esta sobre gema al empujar la caja se actuaizan las clases
  for (let i = 0; i < gema.length; i++) {
    if (personaje.x === gema[i].x && personaje.y === gema[i].y) {
      const elem = document.querySelector(`.row${personaje.x + 1}>.colm${personaje.y + 1}`)

      elem.classList.remove('gema')
      elem.classList.add('personaje2')
    }
  }
  win(ind)
}

//pregunta si la caja que estamos moviendo ha quedado sobre una gema
function win(ind) {
  for (let i = 0; i < gema.length; i++) {

    //si estaos sobre una, cambiamos clases y llamamos a trueWin
    if (caja[ind].x === gema[i].x && caja[ind].y === gema[i].y) {
      const elem = document.querySelector(`.row${caja[ind].x + 1}>.colm${caja[ind].y + 1}`)
      elem.classList.remove('gema')
      elem.classList.add('cajaOnGema')
      trueWin()
    }
  }
}

//pregunta si todas las gemas tienen una caja encima
function trueWin() {
  let count = 0;
  for (let i = 0; i < gema.length; i++) {
    for (let j = 0; j < caja.length; j++) {
      if (gema[i].x === caja[j].x && gema[i].y === caja[j].y) {
        count++
      }
    }
  }

  //si es asi avisamos por mensaje de que ha ganado!
  if (count === gema.length) { setTimeout(function () { alert("YOU WIN!!") }, 300) }

}

//limpia las clases de css
function cleanLevel(){
  
  mapa.forEach((row, r) => {
    row.forEach((colm, c) => {
      const elem = document.querySelector(`.row${r + 1}>.colm${c + 1}`)
      elem.classList.remove('personaje2')
      elem.classList.remove('cajaOnGema') 
    })
  })
}


// Se encarga de detectar nivel y limpiar el nivel anterior
function startLevel() {

  //var que contiene los datos del nivel en el que estamos
  let level = levels.level1

  //crear matriz vacia
  mapa = new Array(10).fill(null).map(e => new Array(10).fill(0))

  //vaciar cajas y gemas de nivel anterior
  caja.length = 0
  gema.length = 0

  //actualiuza posicion de personaje
  personaje.x = level.personaje.x
  personaje.y = level.personaje.y
  personaje.dir = level.personaje.dir

  cleanLevel()

  //actualiuza posicion de cajas
  for (let i = 0; i < level.cajas.length; i++) {

    const obj = {}
    obj.x = level.cajas[i].x
    obj.y = level.cajas[i].y
    obj.dir = level.cajas[i].dir
    caja.push(obj)

  }

  //actualiuza posicion de gemas
  for (let i = 0; i < level.gemas.length; i++) {

    const obj = {}
    obj.x = level.gemas[i].x
    obj.y = level.gemas[i].y
    gema.push(obj)

  }
  updateLevel(levels.level1)
}
//funcion iniciadora
startLevel()

//detecta boton que pulsemos en teclado
document.addEventListener('keydown', function (e) {
  //previene el scroll
  e.preventDefault()

  //si pulsamos R reiniciamos la partida
  if (e.code === "KeyR") {
    startLevel()
  }

  //flechas direccionales cambia direcion del personaje y llama a move
  if (e.code === 'ArrowUp') {
    personaje.dir = 0
    move()
  }

  if (e.code === 'ArrowRight') {
    personaje.dir = 3
    move()
  }

  if (e.code === 'ArrowDown') {
    personaje.dir = 6
    move()
  }

  if (e.code === 'ArrowLeft') {
    personaje.dir = 9
    move()
  }

})