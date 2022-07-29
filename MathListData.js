
const buttonMenuTarget = [
  {
    id: 0,
    eventClick: 0,
    avaiableClass: true,
    disabledButton: false,
    titleButton: "Somas com unidades",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 1,
      title: "Somar Unidades",
      primeira_variavel_numerica: 10,
      segundo_limite: 0,
      terceiro_limite: 0,
      first: 70,     
      signal: "+",
      numberOfExercicesRepetition: 20,
      call_reset: "0",
      polivariaveis: 1,
    },
  },

  {
    id: 1,
    eventClick: 1,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Soma Dezenas",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 2,
      title: "Somar Dezenas",
      primeira_variavel_numerica: 40,
      segundo_limite: 0,
      terceiro_limite: 0,
      first: 110,      
      signal: "+",
      numberOfExercicesRepetition: 20,
      call_reset: 1,
      polivariaveis: 1,
    },
  },
  {
    id: 2,
    eventClick: 2,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Subtração",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 3,
      title: "Subtrair",
      primeira_variavel_numerica: 9,
      segundo_limite: 20,
      terceiro_limite: 10,
      first: 75,     
      signal: "-",
      numberOfExercicesRepetition: 10,
      call_reset: "2",
      polivariaveis: 2,
    },
  },
  {
    id: 3,
    eventClick: 3,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Tabuada 2 Primeira Parte",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 4,
      title: "Tabuada do dois",
      primeira_variavel_numerica: 2,
      segundo_limite: 6,
      terceiro_limite: 10,
      first: 75,     
      signal: "*",
      numberOfExercicesRepetition: 20,
      call_reset: "3",
      polivariaveis: 3,
    },
  },
  {
    id: 4,
    eventClick: 4,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Tabuada 2 Segunda Parte",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 5,
      title: "Tabuada do dois Segunda parte",
      primeira_variavel_numerica: 2,
      segundo_limite: 11,
      terceiro_limite: 6,
      first: 75,     
      signal: "*",
      numberOfExercicesRepetition: 20,
      call_reset: "4",
      polivariaveis: 4,
    },
  },
  {
    id: 5,
    eventClick: 5,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Tabuada 2 Completa",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 6,
      title: "Tabuada 2 Completa",
      primeira_variavel_numerica: 2,
      segundo_limite: 11,
      terceiro_limite: 0,
      first: 110,      
      signal: "*",
      numberOfExercicesRepetition: 20,
      call_reset: "5",
      polivariaveis: 4,
    },
  },
  {
    id: 6,
    eventClick: 6,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Tabuada 3 Primeira Parte",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 7,
      title: "Tabuada 3 Primeira Parte",
      primeira_variavel_numerica: 3,
      segundo_limite: 6,
      terceiro_limite: 10,
      first: 75,     
      signal: "*",
      numberOfExercicesRepetition: 20,
      call_reset: "6",
      polivariaveis: 3,
    },
  },
  {
    id: 7,
    eventClick: 7,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Tabuada 3 Segunda Parte",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 8,
      title: "abuada 3 Segunda Parte",
      primeira_variavel_numerica: 3,
      segundo_limite: 11,
      terceiro_limite: 6,
      first: 75,     
      signal: "*",
      numberOfExercicesRepetition: 20,
      call_reset: "7",
      polivariaveis: 4,
    },
  },
  {
    id: 8,
    eventClick: 8,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Tabuada 3 Completa",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 9,
      title: "Tabuada 3 Completa",
      primeira_variavel_numerica: 3,
      segundo_limite: 11,
      terceiro_limite: 0,
      first: 110,      
      signal: "*",
      numberOfExercicesRepetition: 20,
      call_reset: "8",
      polivariaveis: 4,
    },
  },
  {
    id: 9,
    eventClick: 9,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Tabuada 4 Primeira Parte",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 10,
      title: "Tabuada do quatro",
      primeira_variavel_numerica: 4,
      segundo_limite: 6,
      terceiro_limite: 10,
      first: 75,     
      signal: "*",
      numberOfExercicesRepetition: 20,
      call_reset: "9",
      polivariaveis: 3,
    },
  },
  {
    id: 10,
    eventClick: 10,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Tabuada 4 Segunda Parte",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 11,
      title: "STabuada 4 Segunda Parte",
      primeira_variavel_numerica: 4,
      segundo_limite: 11,
      terceiro_limite: 6,
      first: 75,     
      signal: "*",
      numberOfExercicesRepetition: 20,
      call_reset: "10",
      polivariaveis: 4,
    },
  },
  {
    id: 11,
    eventClick: 11,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Tabuada 4 Completa",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 12,
      title: "Tabuada 4 Completa",
      primeira_variavel_numerica: 4,
      segundo_limite: 11,
      terceiro_limite: 0,
      first: 110,      
      signal: "*",
      numberOfExercicesRepetition: 20,
      call_reset: "11",
      polivariaveis: 4,
    },
  },
  {
    id: 12,
    eventClick: 12,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Soma com Dezenas Segunda parte",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 13,
      title: "Soma com Dezenas Segunda parte",
      primeira_variavel_numerica: 90,
      segundo_limite: 0,
      terceiro_limite: 0,
      first: 110,      
      signal: "+",
      numberOfExercicesRepetition: 10,
      call_reset: "12",
      polivariaveis: 1,
    },
  },
  {
    id: 13,
    eventClick: 13,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Subtração Segunda  parte",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 14,
      title: "Subtrair Segunda parte",
      primeira_variavel_numerica: 9,
      segundo_limite: 40,
      terceiro_limite: 20,
      first: 110,      
      signal: "-",
      numberOfExercicesRepetition: 20,
      call_reset: "13",
      polivariaveis: 2,
    },
  },
  {
    id: 14,
    eventClick: 14,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Subtração Terceira  parte",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 15,
      title: "Subtrair Terceira parte",
      primeira_variavel_numerica: 20,
      segundo_limite: 40,
      terceiro_limite: 25,
      first: 120,      
      signal: "-",
      numberOfExercicesRepetition: 20,
      call_reset: "14",
      polivariaveis: 2,
    },
  },
  {
    id: 15,
    eventClick: 15,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Tabuada 5 Primeira Parte",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 16,
      title: "Tabuada do Cinco",
      primeira_variavel_numerica: 5,
      segundo_limite: 6,
      terceiro_limite: 10,
      first: 75,     
      signal: "*",
      numberOfExercicesRepetition: 20,
      call_reset: "15",
      polivariaveis: 3,
    },
  },
  {
    id: 16,
    eventClick: 16,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Tabuada 5 Segunda Parte",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 17,
      title: "Tabuada do 5 Segunda Parte",
      primeira_variavel_numerica: 5,
      segundo_limite: 11,
      terceiro_limite: 6,
      first: 75,     
      signal: "*",
      numberOfExercicesRepetition: 20,
      call_reset: "16",
      polivariaveis: 4,
    },
  },
  {
    id: 17,
    eventClick: 17,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Tabuada 5 Completa",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 18,
      title: "Tabuada 5 Completa",
      primeira_variavel_numerica: 5,
      segundo_limite: 11,
      terceiro_limite: 0,
      first: 110,      
      signal: "*",
      numberOfExercicesRepetition: 20,
      call_reset: "17",
      polivariaveis: 4,
    },
  },
  {
    id: 18,
    eventClick: 18,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Tabuada 6 Primeira Parte",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 19,
      title: "Tabuada do Seis",
      primeira_variavel_numerica: 6,
      segundo_limite: 6,
      terceiro_limite: 10,
      first: 75,     
      signal: "*",
      numberOfExercicesRepetition: 20,
      call_reset: "18",
      polivariaveis: 3,
    },
  },
  {
    id: 19,
    eventClick: 19,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Tabuada 6 Segunda Parte",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 20,
      title: "Tabuada do 6 Seguda Parte",
      primeira_variavel_numerica: 6,
      segundo_limite: 11,
      terceiro_limite: 6,
      first: 75,     
      signal: "*",
      numberOfExercicesRepetition: 20,
      call_reset: "19",
      polivariaveis: 4,
    },
  },
  {
    id: 20,
    eventClick: 20,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Tabuada 6 Completa",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 21,
      title: "Tabuada 6 Completa",
      primeira_variavel_numerica: 6,
      segundo_limite: 11,
      terceiro_limite: 0,
      first: 110,      
      signal: "*",
      numberOfExercicesRepetition: 20,
      call_reset: "20",
      polivariaveis: 4,
    },
  },
  {
    id: 21,
    eventClick: 21,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Tabuada 7 Primeira Parte",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 22,
      title: "Tabuada do Sete",
      primeira_variavel_numerica: 7,
      segundo_limite: 6,
      terceiro_limite: 10,
      first: 75,     
      signal: "*",
      numberOfExercicesRepetition: 20,
      call_reset: "21",
      polivariaveis: 3,
    },
  },
  {
    id: 22,
    eventClick: 22,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Tabuada 7 Segunda Parte",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 23,
      title: "Tabuada do Sete Parte",
      primeira_variavel_numerica: 7,
      segundo_limite: 11,
      terceiro_limite: 6,
      first: 75,     
      signal: "*",
      numberOfExercicesRepetition: 20,
      call_reset: "22",
      polivariaveis: 4,
    },
  },
  {
    id: 23,
    eventClick: 23,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Tabuada 7 Completa",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 24,
      title: "Tabuada 7 Completa",
      primeira_variavel_numerica: 7,
      segundo_limite: 11,
      terceiro_limite: 0,
      first: 110,      
      signal: "*",
      numberOfExercicesRepetition: 20,
      call_reset: "23",
      polivariaveis: 4,
    },
  },

  {
    id: 24,
    eventClick: 24,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Soma com Dezenas Terceira parte",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 25,
      title: "Soma com Dezenas Terceira parte",
      primeira_variavel_numerica: 90,
      segundo_limite: 0,
      terceiro_limite: 0,
      first: 110,      
      signal: "+",
      numberOfExercicesRepetition: 20,
      call_reset: "24",
      polivariaveis: 1,
    },
  },
  {
    id: 25,
    eventClick: 25,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Tabuada 8 Primeira Parte",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 26,
      title: "Tabuada do Oito",
      primeira_variavel_numerica: 8,
      segundo_limite: 6,
      terceiro_limite: 10,
      first: 100,      
      signal: "*",
      numberOfExercicesRepetition: 20,
      call_reset: "25",
      polivariaveis: 3,
    },
  },
  {
    id: 26,
    eventClick: 26,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Tabuada 8 Segunda Parte",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 27,
      title: "Tabuada do  oito  Segunda Parte",
      primeira_variavel_numerica: 8,
      segundo_limite: 11,
      terceiro_limite: 6,
      first: 100,      
      signal: "*",
      numberOfExercicesRepetition: 20,
      call_reset: "26",
      polivariaveis: 4,
    },
  },
  {
    id: 27,
    eventClick: 27,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Tabuada 8 Completa",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 28,
      title: "Tabuada 8 Completa",
      primeira_variavel_numerica: 8,
      segundo_limite: 11,
      terceiro_limite: 0,
      first: 110,      
      signal: "*",
      numberOfExercicesRepetition: 20,
      call_reset: "27",
      polivariaveis: 4,
    },
  },
  {
    id: 28,
    eventClick: 28,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Divisões exatas por dois",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 29,
      title:  "Divisões exatas por dois",
      primeira_variavel_numerica: 2,
      segundo_limite: 11,
      terceiro_limite: 0,
      first: 110,      
      signal: "/",
      numberOfExercicesRepetition: 20,
      call_reset: "28",
      polivariaveis: 5,
    },
  },
  {
    id: 29,
    eventClick: 29,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Tabuada 9 Primeira Parte",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 30,
      title: "Tabuada do Nove",
      primeira_variavel_numerica: 9,
      segundo_limite: 6,
      terceiro_limite: 10,
      first: 100,      
      signal: "*",
      numberOfExercicesRepetition: 20,
      call_reset: "29",
      polivariaveis: 3,
    },
  },
  {
    id: 30,
    eventClick: 30,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Tabuada 9 Segunda Parte",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 31,
      title: "Tabuada do  Nove Segunda Parte",
      primeira_variavel_numerica: 9,
      segundo_limite: 11,
      terceiro_limite: 6,
      first: 100,      
      signal: "*",
      numberOfExercicesRepetition: 20,
      call_reset: "30",
      polivariaveis: 4,
    },
  },
  {
    id: 31,
    eventClick: 31,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Tabuada 9 Completa",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 32,
      title: "Tabuada  9",
      primeira_variavel_numerica: 9,
      segundo_limite: 11,
      terceiro_limite: 0,
      first: 110,      
      signal: "*",
      numberOfExercicesRepetition: 20,
      call_reset: "31",
      polivariaveis: 4,
    },
  },
  {
    id: 32,
    eventClick: 32,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Divisões exatas por tres",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 33,
      title:  "Divisões exatas por tres",
      primeira_variavel_numerica: 3,
      segundo_limite: 11,
      terceiro_limite: 0,
      first: 110,      
      signal: "/",
      numberOfExercicesRepetition: 20,
      call_reset: "32",
      polivariaveis: 5,
    },
  },
  {
    id: 33,
    eventClick: 33,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Divisões exatas por quatro",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 34,
      title:  "Divisões exatas por quatro",
      primeira_variavel_numerica: 4,
      segundo_limite: 11,
      terceiro_limite: 0,
      first: 110,      
      signal: "/",
      numberOfExercicesRepetition: 20,
      call_reset: "33",
      polivariaveis: 5,
    },
  },
  {
    id: 34,
    eventClick: 34,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Divisões exatas por Cinco",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 35,
      title:  "Divisões exatas por Cinco",
      primeira_variavel_numerica: 5,
      segundo_limite: 11,
      terceiro_limite: 0,
      first: 110,      
      signal: "/",
      numberOfExercicesRepetition: 20,
      call_reset: "34",
      polivariaveis: 5,
    },
  },
  {
    id: 35,
    eventClick: 35,
    avaiableClass: false,
    disabledButton: true,
    titleButton: "Divisões exatas por Seis",
    ScreenGameAble: false,
    ScreenSettings: {
      libera_exercicio: 36,
      title:  "Divisões exatas por Seis",
      primeira_variavel_numerica: 6,
      segundo_limite: 11,
      terceiro_limite: 0,
      first: 110,      
      signal: "/",
      numberOfExercicesRepetition: 20,
      call_reset: "35",
      polivariaveis: 5,
    },
  },
]

const dataModuleChallenge = [
  {
    id:0,
    mensagemInicial:"Você tem 30 segundos para somar 10 números menores que 10 e digitar o valor no input que está ao final da soma e clicar em Enviar",
    firstMessage: "Muito bem conseguiu o primeiro passo, guarde o resultado atual porque ele será requerido ao final da proxima soma, para que possa seguir para o próximo estágio",
    secondMessage:"Muito bem vc está no segundo estágio  concentre-se",
    thirdMessage:"Muito bem vc está no terceiro estágio  concentre-se",
    fourthMessage:"Muito bem vc está no quarto estágio  concentre-se",
    fifthMessage:"Muito bem vc está no quinto estágio  concentre-se",
    sixthMessage:"Muito bem vc está no sexto estágio  concentre-se",
    seventhMessage:"Muito bem vc está no sétimo estágio  concentre-se",
    eighthMessage:"Muito bem vc está no oitavo estágio  concentre-se",
    ninethMessage:"Muito bem vc está no nono estágio concentre-se",
    tenth_message: "Parabéns vc conseguiu vencer o desafio, suas habilidades estão crescendo e isso deve facilitar muito outros raciocínios "
  }
]
export { buttonMenuTarget, dataModuleChallenge}

