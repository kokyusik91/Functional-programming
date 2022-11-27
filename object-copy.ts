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

  function objectDelete(object, key) {
    const new_object = Object.assign({}, object)
    delete new_object[key]

    return new_object
  }
}
