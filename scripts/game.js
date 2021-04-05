//matriz mapa
var mapa 
var mapaRow 
var mapaColm

//?? sound

// 0 = vacio
// 1 = personaje
// 2 = stone
// 3 = box movb
// 4 = gema
// 5 = tp

//audios
const moveStone = new Audio ()
moveStone.setAttribute('src', 'assets/sound/moveStone.wav')
const boxOnGema = new Audio ()
boxOnGema.setAttribute('src', 'assets/sound/gemaSound.wav')
const soundGame = new Audio ()
soundGame.setAttribute('src', 'assets/sound/soundGame.mp3')

//elementos
var personaje = {}
var stone = []
var caja = []
var gema = []
var currentLevel = null
var tp = {}

// esta func posicionara cada elem(persj,block, gema) en la matriz
//PARAMETRO  LEVELS.(level actual)

function updateLevel(level) {

  //posit personaje en la matriz
  mapa[personaje.x][personaje.y] = 1
  mapa[tp.x][tp.y] = 5
  mapa[tp.xtp][tp.ytp] = 5
  //post caja en la matriz
  for (let i = 0; i < caja.length; i++) {
    mapa[caja[i].x][caja[i].y] = 3

  }

  //actualiza post de gema en la matriz
  for (let i = 0; i < gema.length; i++) {
    mapa[gema[i].x][gema[i].y] = 4

  }

  //actualiza post de stone en la matriz
  for (let i = 0; i < stone.length; i++) {
    mapa[stone[i].x][stone[i].y] = 2

  }

  printBoard()
 
}

// se encarga de convertir los valores de la mtriz en clases y que se puedan ver en HTML
function printBoard() {

  //recorre toda la matriz
  mapa.forEach((row, r) => {
    row.forEach((colm, c) => {

      //elem cada valor de la matriz en la tabla
      const elem = document.querySelector(`.row${r}>.colm${c}`)
      
      //limpiamos  todas las clases 
      elem.classList.remove('personaje')
      elem.classList.remove('caja')
      elem.classList.remove('floor1')
      elem.classList.remove('gema')
      elem.classList.remove('personajeU')
      elem.classList.remove('personajeR')
      elem.classList.remove('personaje')
      elem.classList.remove('personajeL')
      elem.classList.remove('tp')

      //dependiendo del valor de la matriz anadimos diferentes elem(caja,gema..)
      if (mapa[r][c] === 1) {

        if (personaje.dir === 0) { elem.classList.add('personajeU') }
        if (personaje.dir === 3) { elem.classList.add('personajeR') }
        if (personaje.dir === 6) { elem.classList.add('personaje' ) }
        if (personaje.dir === 9) { elem.classList.add('personajeL') }

      }
      if (mapa[r][c] === 2) { elem.classList.add('stone') }

      if (mapa[r][c] === 3) { elem.classList.add('caja') }

      if (mapa[r][c] === 4) {
        if (r === personaje.x && c === personaje.y) {
          if (personaje.dir === 0) { elem.classList.add('personajeU') }
          if (personaje.dir === 3) { elem.classList.add('personajeR') }
          if (personaje.dir === 6) { elem.classList.add('personaje' ) }
          if (personaje.dir === 9) { elem.classList.add('personajeL') }

        } else { 
          elem.classList.add('gema') 
        }
        
        for (let i = 0; i < caja.length; i++) {
          if (r === caja[i].x && c === caja[i].y) {
           
            elem.classList.remove("gema")
            elem.classList.add("caja")
          }
        }
      }
      if (mapa[r][c] === 0){
        elem.classList.add('floor1')
      }
      if (mapa[r][c] === 5){
        if (r === personaje.x && c === personaje.y) {
          if (personaje.dir === 0) { elem.classList.add('personajeU') }
          if (personaje.dir === 3) { elem.classList.add('personajeR') }
          if (personaje.dir === 6) { elem.classList.add('personaje' ) }
          if (personaje.dir === 9) { elem.classList.add('personajeL') }

        } else { 
          elem.classList.add('tp') 
      }
    }
    })
  })
}

//actualiza la matriz
function move() {
  
  //antes de mover personaje y cajas camabiamos sus valores anteriores a 0
  mapa = new Array(mapaRow).fill(null).map(e => new Array(mapaColm).fill(0))
  
  movPlayer()

  for (let i = 0; i < stone.length; i++) {
    if (personaje.x === stone[i].x && personaje.y === stone[i].y) {
      
      if (personaje.dir === 0) {  personaje.x++ }
      if (personaje.dir === 3) {  personaje.y-- }
      if (personaje.dir === 6) {  personaje.x-- }
      if (personaje.dir === 9) {  personaje.y++ }
    
    }
  }

  for (let i = 0; i < caja.length; i++) {
    if (personaje.x === caja[i].x && personaje.y === caja[i].y) { movBox(i) }

  }
  
  updateLevel()
  win()
}

//mueve el personaje en la matriz
function movPlayer() {
  // 0 = up, 3 = right, 6 = down, 9 = left
  var tpActivado = false
  //depende de la posicion del personaje se mueve si no esta en borde 
  if (personaje.dir === 0) { personaje.x === 0 ? personaje.x : personaje.x-- }
  if (personaje.dir === 3) { personaje.y === mapaColm -1 ? personaje.y : personaje.y++ }
  if (personaje.dir === 6) { personaje.x === mapaRow  -1 ? personaje.x : personaje.x++ }
  if (personaje.dir === 9) { personaje.y === 0 ? personaje.y : personaje.y-- }
  if (personaje.x === tp.x && personaje.y === tp.y && tpActivado === false){
    personaje.x = tp.xtp
    personaje.y = tp.ytp
    tpActivado = true
  }
  if (personaje.x === tp.xtp && personaje.y === tp.ytp && tpActivado === false){
    personaje.x = tp.x
    personaje.y = tp.y
    tpActivado = true
  }
}

//se ejecuta cuando el perosnaje esta sobre una caja y le pasamos el parametro de la misma caja
function movBox(ind) {

  var soundBox = true;
  var tpActivado = false;

  // preguntamos la direccion del personaje para mover la caja
  if (personaje.dir === 0) {

    //preguntamos si la caja esta en borde (si esta no se mueve y si no esta se mueve)
    caja[ind].x === 0 ? caja.x : caja[ind].x--

    //caja y personaje estan en borde retrocede el personaje
    if (caja[ind].x === 0 && personaje.x === 0) { 
      personaje.x++
      soundBox = false
     }

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
    for (let i  = 0 ; i < stone.length; i++) {
      if (stone[i].x === caja[ind].x && stone[i].y === caja[ind].y) {
        personaje.x++
        caja[ind].x++
        soundBox = false;
      }
    }
  }
  
  if (personaje.dir === 3) {
    caja[ind].y === mapaRow -1 ? caja[ind].y : caja[ind].y++
    if (caja[ind].y === mapaRow -1 && personaje.y === mapaRow -1) { personaje.y-- 
    soundBox = false
    }
    for (let i = 0; i < caja.length; i++) {
      if (ind !== i) {
        if (caja[ind].x === caja[i].x && caja[ind].y === caja[i].y) {
          caja[ind].y--
          personaje.y--
        }
      }
    }
    for (let i  = 0 ; i < stone.length; i++) {
      if (stone[i].x === caja[ind].x && stone[i].y === caja[ind].y) {
        personaje.y--
        caja[ind].y--
        soundBox = false;
      }
    }
  }
  
  if (personaje.dir === 6) {
    caja[ind].x === mapaColm -1 ? caja[ind].x : caja[ind].x++
    if (caja[ind].x === mapaColm -1 && personaje.x === mapaColm -1) { 
      personaje.x-- 
      soundBox = false
    }
    for (let i = 0; i < caja.length; i++) {
      if (ind !== i) {
        if (caja[ind].x === caja[i].x && caja[ind].y === caja[i].y) {
          caja[ind].x--
          personaje.x--
        }
      }
    }
    for (let i  = 0 ; i < stone.length; i++) {
      if (stone[i].x === caja[ind].x && stone[i].y === caja[ind].y) {
        personaje.x--
        caja[ind].x--
        soundBox = false;
      }
    }
  }
  
  if (personaje.dir === 9) {
    caja[ind].y === 0 ? caja[ind].y : caja[ind].y--
    if (caja[ind].y === 0 && personaje.y === 0) { 
      personaje.y++ 
      soundBox = false
    }
    for (let i = 0; i < caja.length; i++) {
      if (ind !== i) {
        if (caja[ind].x === caja[i].x && caja[ind].y === caja[i].y) {
          caja[ind].y++
          personaje.y++
        }
      }
    }
  }

  for (let i  = 0 ; i < stone.length; i++) {
    if (stone[i].x === caja[ind].x && stone[i].y === caja[ind].y) {
      personaje.y++
      caja[ind].y++
      soundBox = false;
    }
  }
  if (soundBox === true ) {
    moveStone.play()
  }
  for (let i  = 0 ; i < gema.length; i++) {
    if (gema[i].x === caja[ind].x && gema[i].y === caja[ind].y) {
      boxOnGema.play()
    }
  }
  if (caja[ind].x === tp.x && caja[ind].y === tp.y && tpActivado === false){
    caja[ind].x = tp.xtp
    caja[ind].y = tp.ytp
    tpActivado = true
  }
  if (caja[ind].x === tp.xtp && caja[ind].y === tp.ytp && tpActivado === false){
    caja[ind].x = tp.x
    caja[ind].y = tp.y
    tpActivado = true
  }
}

//pregunta si todas las gemas tienen una caja encima
function win() {
  let count = 0;
  for (let i = 0; i < gema.length; i++) {
    for (let j = 0; j < caja.length; j++) {
      if (gema[i].x === caja[j].x && gema[i].y === caja[j].y) {
        count++
      }
    }
  }

  //si es asi avisamos por mensaje de que ha ganado!
  if (count === gema.length) { setTimeout(function () { 
    document.getElementById('win').style.display="block";
    const nextLevel = document.getElementsByClassName('nextLevel')[0]
    nextLevel.onclick = selectLevel
  }, 300) }

}

function selectLevel () {
  document.getElementById('background').style.display="none"
  document.getElementById('container').innerHTML = " "
  document.getElementById('win').style.display="none"
 
  currentLevel = levels.level1

  var elem = document.getElementById("container")

  for (let i = 0; i < currentLevel.row; i++) {
    
    var fila = document.createElement("tr")
    fila.classList.add(`row${i}`)
    elem.appendChild(fila)

    for (let j = 0; j < currentLevel.colm; j++) {

      var columna = document.createElement("td")
      columna.classList.add(`colm${j}`)
      fila.appendChild(columna)
  
    }
  }
  startLevel()
}

function principalMenu () {
  
  const button = document.getElementsByClassName('botonStart')[0];
  button.onclick = selectLevel
}
// Se encarga de detectar nivel y limpiar el nivel anterior
function startLevel() {

  var level = currentLevel
  //var que contiene los datos del nivel en el que estamos
  soundGame.play()
  
  //crear  mapa y matriz vacia
  mapa = new Array(level.row).fill(null).map(e => new Array(level.colm).fill(0))
  mapaRow  = level.row
  mapaColm = level.colm

  //vaciar cajas y gemas de nivel anterior
  caja.length  = 0
  gema.length  = 0
  stone.length = 0
  
  //actualiuza posicion de personaje
  personaje = {...level.personaje}
  tp = {...level.tp}
  //actualiuza posicion de cajas
  for (let i = 0; i < level.cajas.length; i++) {
    var obj = {...level.cajas[i]}
    caja.push(obj)

  }

  //actualiuza posicion de gemas
  for (let i = 0; i < level.gemas.length; i++) {

    const obj = {...level.gemas[i]}
    gema.push(obj)

  }

  //actualiuza posicion de stone
  for (let i = 0; i < level.stone.length; i++) {

    var obj = {...level.stone[i]}
    stone.push(obj)

  }
 


  updateLevel(level)
}


//funcion iniciadora
  principalMenu()
  // selectLevel()

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
  console.log(personaje.x , personaje.y)
})