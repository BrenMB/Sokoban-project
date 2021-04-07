const levels = {

  level1: {
    historia : 'Bien hecho! Solaire logro mover la estatua hasta la gema y una puerta se abrio frente a el. Al pasarla se cierra, contempla el mismo ambiente con nuevos elementos. Solaire siente un aura extraña en las columnas brillantes. Ayuda a Solaire a descubrir que son y que logre escapar de esta zona!',
    row: 10,
    colm: 10,
    personaje: { x: 4, y: 2, dir: 6 },
    tp: {},
    cajas: [
      { x: 5, y: 7, dir: 0 },
    ],
  
    stone: [
      { x: 9, y: 0 },
    ],
  
    gemas: [
      { x: 1, y: 8 },
    ],
  },
  
  level2: {
    historia : "Ooh wauu!! Solaire ha logrado traspasar las columnas. Se preguntara si las estatuas podran hacer lo mismo?",
    row: 10,
    colm: 10,
    personaje: { x: 5, y: 2, dir: 6 },
    tp: { x: 0, y: 3, xtp: 9, ytp: 7 },
    cajas: [
      { x: 2, y: 7, dir: 0 },
    ],
  
    stone: [
      { x: 4, y: 0 },
      { x: 4, y: 1 },
      { x: 4, y: 2 },
      { x: 4, y: 3 },
      { x: 4, y: 4 },
      { x: 4, y: 5 },
      { x: 4, y: 6 },
      { x: 4, y: 7 },
      { x: 4, y: 8 },
      { x: 4, y: 9 }
    ],
  
    gemas: [
      { x: 1, y: 8 },
    ],
  },
  level3: {
    historia : "Las columnas pareciera que le van a ser muy util para lograr escapar... Ahora Solaire se enfrenta a un desafio mucho mayor, como podra escapar?",
    row: 10,
    colm: 10,
    personaje: { x: 5, y: 2, dir: 6 },
    tp: { x: 0, y: 3, xtp: 9, ytp: 7 },
    cajas: [
      { x: 7, y: 7, dir: 0 },
    ],
  
    stone: [
      { x: 4, y: 0 },
      { x: 4, y: 1 },
      { x: 4, y: 2 },
      { x: 4, y: 3 },
      { x: 4, y: 4 },
      { x: 4, y: 5 },
      { x: 4, y: 6 },
      { x: 4, y: 7 },
      { x: 4, y: 8 },
      { x: 4, y: 9 }
    ],
  
    gemas: [
      { x: 1, y: 8 },
    ],
  },
  level4: {
    historia : 'Solaire se ha confiado y ha querido salir sin tu ayuda... lleva tres dias sin poder escapar de esta nueva sala. Crees poder ayudarlo nuevamente?',
    row: 10,
    colm: 10,
    personaje: { x: 5, y: 4, dir: 6 },
    tp: {},
    cajas: [
      { x: 3, y: 5, dir: 0 },
      { x: 7, y: 7, dir: 0 },
      { x: 2, y: 3, dir: 0 }
    ],
    stone: [
      { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 },
      { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 },
      { x: 0, y: 7 }, { x: 0, y: 8 }, { x: 0, y: 9 },

      { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 5 },
      { x: 1, y: 7 }, { x: 1, y: 8 }, { x: 1, y: 9 },

      { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 5 },
      { x: 2, y: 7 }, { x: 2, y: 8 }, { x: 2, y: 9 },

      { x: 3, y: 0 }, { x: 3, y: 9 },

      { x: 4, y: 0 }, { x: 4, y: 9 },

      { x: 5, y: 0 }, { x: 5, y: 5 }, { x: 5, y: 6 },
      { x: 5, y: 7 }, { x: 5, y: 8 }, { x: 5, y: 9 },

      { x: 6, y: 0 }, { x: 6, y: 5 },
      { x: 6, y: 9 },

      { x: 7, y: 0 }, { x: 7, y: 1 }, { x: 7, y: 9 },

      { x: 8, y: 0 }, { x: 8, y: 1 }, { x: 8, y: 5 },
      { x: 8, y: 9 },

      { x: 9, y: 0 }, { x: 9, y: 1 }, { x: 9, y: 2 },
      { x: 9, y: 3 }, { x: 9, y: 5 }, { x: 9, y: 6 },
      { x: 9, y: 7 }, { x: 9, y: 8 }, { x: 9, y: 9 }],
      
      gemas: [
        { x: 0, y: 6 },
        { x: 3, y: 1 },
        { x: 4, y: 7 },
      ]
    },
    
   /* level4: {
      row: 15,
      colm: 15,
      tp: {
  
      },
      personaje: { x: 5, y: 4, dir: 6 },
      cajas: [
        { x: 3, y: 3, dir: 0 },
        { x: 3, y: 4, dir: 0 },
        { x: 3, y: 5, dir: 0 },
        { x: 3, y: 6, dir: 0 }
      ],
      stone: [
        //perímetro
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 3, y: 0 },
        { x: 4, y: 0 },
        { x: 5, y: 0 },
        { x: 6, y: 0 },
        { x: 7, y: 0 },
        { x: 8, y: 0 },
        { x: 9, y: 0 },
        { x: 10, y: 0 },
        { x: 11, y: 0 },
        { x: 12, y: 0 },
        { x: 13, y: 0 },
        { x: 14, y: 0 },
  
        { x: 14, y: 1 },
        { x: 14, y: 2 },
        { x: 14, y: 3 },
        { x: 14, y: 4 },
        { x: 14, y: 5 },
        { x: 14, y: 6 },
        { x: 14, y: 7 },
        { x: 14, y: 8 },
        { x: 14, y: 9 },
        { x: 14, y: 10 },
        { x: 14, y: 11 },
        { x: 14, y: 12 },
        { x: 14, y: 13 },
        { x: 14, y: 14 },
  
        { x: 0, y: 14 },
        { x: 1, y: 14 },
        { x: 2, y: 14 },
        { x: 3, y: 14 },
        { x: 4, y: 14 },
        { x: 5, y: 14 },
        { x: 6, y: 14 },
        { x: 7, y: 14 },
        { x: 8, y: 14 },
        { x: 9, y: 14 },
        { x: 10, y: 14 },
        { x: 11, y: 14 },
        { x: 12, y: 14 },
        { x: 13, y: 14 },
        { x: 14, y: 14 },
  
        { x: 0, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: 2 },
        { x: 0, y: 3 },
        { x: 0, y: 4 },
        { x: 0, y: 5 },
        { x: 0, y: 6 },
        { x: 0, y: 7 },
        { x: 0, y: 8 },
        { x: 0, y: 9 },
        { x: 0, y: 10 },
        { x: 0, y: 11 },
        { x: 0, y: 12 },
        { x: 0, y: 13 },
        { x: 0, y: 14 },
  
        //interior (oredenadas por filas)
        { x: 1, y: 1 },
        { x: 1, y: 2 },
        { x: 1, y: 3 },
        { x: 1, y: 5 },
        { x: 1, y: 7 },
        { x: 1, y: 8 },
        { x: 1, y: 9 },
        { x: 2, y: 1 },
        { x: 2, y: 5 },
        { x: 2, y: 8 },
        { x: 2, y: 9 },
        { x: 2, y: 11 },
        { x: 3, y: 9 },
        { x: 3, y: 11 },
        { x: 4, y: 9 },
        { x: 4, y: 11 },
        { x: 5, y: 5 },
        { x: 5, y: 1 },
        { x: 5, y: 6 },
        { x: 5, y: 8 },
        { x: 5, y: 9 },
        { x: 5, y: 11 },
        { x: 6, y: 5 },
        { x: 6, y: 9 },
        { x: 6, y: 11 },
        { x: 7, y: 1 },
        { x: 7, y: 7 },
        { x: 7, y: 9 },
        { x: 7, y: 11 },
        { x: 8, y: 1 },
        { x: 8, y: 5 },
        { x: 8, y: 9 },
        { x: 8, y: 11 },
        { x: 9, y: 1 },
  
        { x: 9, y: 3 },
        { x: 9, y: 5 },
        { x: 9, y: 6 },
        { x: 9, y: 7 },
        { x: 9, y: 8 },
        { x: 9, y: 9 },
        { x: 9, y: 11 },
        { x: 9, y: 13 },
        { x: 10, y: 11 },
        { x: 11, y: 2 },
        { x: 11, y: 4 },
        { x: 11, y: 5 },
        { x: 11, y: 7 },
        { x: 11, y: 11 },
        { x: 13, y: 11 },
      ],
      gemas: [
        { x: 1, y: 13 },
        { x: 5, y: 10 },
        { x: 6, y: 8 },
        { x: 13, y: 2 }
      ]
    },*/

    level5: {
      row : 10,
      colm : 20,
      personaje : {
        x : 1,
        y : 18,
        dir : 6
      },
      tp : {
        x : 7,
        y : 10,
        xtp : 7,
        ytp : 1
      },
      cajas : [{ x : 0,y : 6},{ x : 1,y : 6},{ x : 1,y : 14},{ x : 2,y : 2},{ x : 2,y : 6},{ x : 2,y : 7},
        { x : 3,y : 7},{ x : 3,y : 11},
    ],
      stone : [{ x: 0, y: 0 }, { x: 0, y: 9 },{ x: 1, y: 0 }, { x: 1, y: 9 },{ x: 2, y: 0 }, { x: 2, y: 9 },
        { x: 3, y: 0 }, { x: 3, y: 9 },{ x: 4, y: 0 },
        { x: 4, y: 1 },
        { x: 4, y: 2 },
        { x: 4, y: 3 },
        { x: 4, y: 13 },
        { x: 4, y: 16 },
        { x: 4, y: 18 },
        { x: 4, y: 9 },{ x: 5, y: 0 },
        { x: 5, y: 7 },
        { x: 5, y: 11 },
        { x: 5, y: 14 },
        { x: 5, y: 15 },
        { x: 5, y: 16 },
        { x: 5, y: 18 },
        { x: 5, y: 19 },
        { x: 6, y: 0 },
        { x: 6, y: 1 },
        { x: 6, y: 2 },
        { x: 6, y: 3 },
        { x: 6, y: 4 },
        { x: 6, y: 5 },
        { x: 6, y: 6 },
        { x: 6, y: 7 },
        { x: 6, y: 9 },
        { x: 6, y: 12 },
        { x: 7, y: 5 },
        { x: 7, y: 9 },
        { x: 7, y: 12 },
        { x: 7, y: 14 },
        { x: 7, y: 15 },
        { x: 7, y: 16 },
        { x: 7, y: 17 },
        { x: 8, y: 2 },
        { x: 8, y: 3 },
        { x: 8, y: 4 },
        { x: 8, y: 5 },
        { x: 8, y: 9 },
        { x: 8, y: 10 },
        { x: 8, y: 11 },
        { x: 8, y: 14 },
        { x: 9, y: 9 }, 
        { x: 9, y: 16 }
  
      ],
      gemas : [{ x : 0,y : 7},{ x : 1,y : 7},{ x : 2,y : 8},{ x : 3,y : 8},{ x : 4,y : 8},
        { x : 5,y : 1},{ x : 9,y : 2},{ x : 9,y : 10}
      ]
    }
 }
