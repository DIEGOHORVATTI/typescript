import chalk from 'chalk'

//==> Tipando função title
export function Title(...parms: any) {
  console.log('\n')
  console.log(chalk.white.bgCyan.bold(` ${parms} `))
}

//==> Tipando função corpo
export function Body(...parms: any) {
  console.log(parms)
}
