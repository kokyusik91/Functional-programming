function multipleByInputValue(x: number, y: number) {
  return x * y
}

function incrementByName(cart, name, field) {
  if (field === 'price' || field === 'name') {
    throw new Error('those field can not modified')
  }
  // 수정할 카트 객체 하나를 찾는다.
  const item = cart[name]
  // 수정할 카트의 수정할 value를 찾는다.
  const currentValue = item[field]
  // 찾은 value에다 1을 더해준다.
  const newValue = currentValue + 1
  // 수정한 value를 해당 아이템에 최신화 시켜준다.
  const newItem = objectSet(item, field, newValue)
  // 최신화 된 아이템을 기존 카트에 최신화 시켜준다.
  const newCart = objectSet(cart, name, newItem)
  return newCart
}
