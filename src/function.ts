import chalk from 'chalk'

console.clear()
console.log(chalk.white.bgGreen.bold(`\n\n\n========================\n\n`))

//==> Tipando função title
export function Title(...parms: any) {
  console.log('\n')
  console.log(chalk.white.bgCyan.bold(` ${parms} `))
}

//==> Tipando função corpo
export function Body(...parms: any) {
  console.log(parms)
}
