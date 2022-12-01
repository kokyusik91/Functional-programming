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
  // 구체적으로 분리
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

// 직접 구현 패턴 이라는 것은
// 최상단에 있는 함수가 알 필요가 없는 정보들을 따로 함수를 만들어서 직접 구현 한다는 것을 의미한다.
// 그렇게 되면 최상단 함수는 인자로 넘기는 값을 직접 적으로 알 필요가 없다는 것이다.
