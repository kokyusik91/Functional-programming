{
  const object = { a: '1', b: 2 }
  const object_copy = Object.assign({ a: 3, b: 7 }, object)

  type ObjectI<T> = {
    [key: string]: T
  }

  function objectSet<T extends keyof ObjectI<number | string>>(
    object: ObjectI<number | string>,
    key: string,
    value: T,
  ) {
    const new_object = Object.assign({}, object)
    new_object[key] = value
    return new_object
  }

  const mola = objectSet(object, 'price', 3)
  console.log(mola)

  function setPrice(item: ObjectI<number | string>, new_price: number) {
    return objectSet(item, 'price', new_price)
  }

  console.log(setPrice(object, 56))

  // function objectDelete(object, key) {
  //   const new_object = Object.assign({}, object)
  //   delete new_object[key]

  //   return new_object
  // }

  // function setPriceByName(cart, name, price) {
  //   // 카트를 순회하면서, 해당하는 이름의 price를 바꾼다.
  //   for (let i = 0; i < cart.length; i++) {
  //     if (cart[i].name === name) {
  //       cart[i].price = price
  //     }
  //   }
  // }

  // type GoCartType = {
  //   name: string
  //   price: number
  // }

  const goCart = [
    { name: 'ironman', price: 57 },
    { name: 'captain-america', price: 20 },
    { name: 'hulk', price: 112 },
  ]

  function setPriceByNameAdvanced(
    cart: ObjectI<number | string>[],
    name: keyof ObjectI<number | string>,
    price: number,
  ): ObjectI<number | string>[] {
    const new_cart = [...cart]
    {
      new_cart.forEach((carter) => {
        if (carter.name === name) {
          // 교체 작업
          carter = setPrice(carter, price)
        }
      })

      return new_cart
    }
  }

  const changeValueofCart = setPriceByNameAdvanced(goCart, 'hulk', 70)
  console.log('changeValueofCart', changeValueofCart)

  // 쇼핑카트 배열, 이름, 가격
  function setPriceByName(carts, name, price) {
    const new_carts = [...carts]
    for (let i = 0; i < new_carts.length; i++) {
      if (new_carts[i].name === name) {
        new_carts[i] = setPrice(new_carts[i], price)
      }
    }
    return new_carts
  }
  // cart 객체와 price를 받아서 가격 변경
  function setPrice(cart, price) {
    const new_cart = Object.assign({}, cart)
    new_cart.price = price
    return new_cart
  }
}
