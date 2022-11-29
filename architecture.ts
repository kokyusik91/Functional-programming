{
  function freeTieClip(cart: string[]) {
    let hasTie = isInCart(cart, 'tie')
    let hasTieClip = isInCart(cart, 'tie clip')

    // 이후 로직
  }

  // 해당 항목이 있는지 없는지 확인 하는 함수를 따로 생성
  function isInCart(cart, name) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === name) {
        return true
      }
    }
    return false
  }

  function remove_item_by_name(cart, name) {
    let idx: any = null
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === name) {
        idx = i
      }
    }
    if (idx !== null) {
      return removeItems(cart, idx, 1)
    }
    return cart
  }
}
