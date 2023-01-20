console.clear()

//==> tipando função
function res(...parms: any) {
  console.log(parms)
}

//==> tipando string
const ex_1: string = 'Diego Horvatti'
res(ex_1)

//==> tipando number
const ex_2: string = 'Diego Horvatti'
res(ex_2)

//==> tipando boolean
const ex_3: boolean = true
res(ex_3)

//==> tipando arrays
const ex_4_1: Array<string> = ['Diego', 'Horvatti']
const ex_4_2: string[] = ['Diego', 'Horvatti']
const ex_4_3: string[] = new Array('Diego', 'Horvatti')
res(ex_4_1, ex_4_2, ex_4_3)

//==> tipando tupla
const tuple: [string, number, string, number] = ['hello', 1, 'world', 2]
for (let i = 0; i < tuple.length; i++) {
  console.log(tuple[i])
}

//==> tipando enum
enum Color {
  Red,
  Green,
  Blue,
  Yellow
}
enum AnotherColor {
  Red = 1,
  Green = 2,
  Blue = 4,
  Yellow
}
res(Color, AnotherColor)
