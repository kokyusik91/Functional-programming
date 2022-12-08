type Obj<T> = {
  [K in keyof T]: T[K]
}

type Animal = {
  firstName: string
  age: number
}

type Cart = {
  name: string
  price: number
}

// 기존 shopping cart 배열 형태임
const cart = [
  { name: 't-shirt', price: 7 },
  { name: 'socks', price: 3 },
  { name: 'shoes', price: 10 },
]

const customSet = new Set(cart)

// 개별 하나의 아이템
const item = { name: 'ps5', price: 20 }

const cart2 = {
  tShirt: { name: 't-shirt', price: 7 },
  socks: { name: 'socks', price: 3 },
  shoes: { name: 'shoes', price: 10 },
}

function objectSet<T>(object: any, key: string, value: T) {
  // const copy = Object.assign({}, object)
  const copy = object.entries()
  console.log('copy', copy)
  copy[key] = value
  return copy
}

const copy = objectSet(customSet, 'socks', 22)
console.log(copy)

// const hello = objectSet(cart2, 'ps5', item)
// console.log('hello', hello)
// const hello2 = objectSet(cart2, 't-shirt', { name: 't-shirt', price: 99 })
// console.log('hello2', hello2)

// function setPriceByName(cart: any, name: any, field: any, value: any) {
//   const item = cart[name]
//   // 새로운 아이템을 만들고
//   const newItem = objectSet(item, field, value)
//   // 기존 카트 객체에 추가한다.
//   const newCart = objectSet(cart, name, newItem)
//   return newCart
// }

// let updateCart = setPriceByName(cart2, 'socks', 'quantity', 35)
// console.log(updateCart)
// updateCart = setPriceByName(cart2, 'socks', 'tax', 2.34)
// console.log(updateCart)
