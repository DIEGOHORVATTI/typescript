import '../global'
import { Body, Title } from '../function'

Title('exemplo de generic classes')

class Box<T> {
  private item: T

  constructor(item: T) {
    this.item = item
  }

  getItem() {
    return this.item
  }

  setItem(item: T) {
    this.item = item
  }
}

const boxString = new Box<string>('Hello World')
const boxNumber = new Box<number>(20)

Body(boxString.getItem())
Body(boxNumber.getItem())
