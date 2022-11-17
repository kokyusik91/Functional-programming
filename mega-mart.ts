{
  type Cart = {
    name: string
    price: number
  }
  let shopping_cart: Cart[] = []
  let shopping_cart_total = 0

  function add_item_to_cart(name: string, price: number) {
    shopping_cart = add_item(shopping_cart, name, price)
    // calc_cart_total(shopping_cart)
    const total = calc_total(shopping_cart)
    update_shipping_icons(shopping_cart)
    update_tax_dom(total)
  }
  // 너무 과한 함수 였으므로 add_item_to_cart로 뺌
  // function calc_cart_total(cart: Cart[]) {
  //   shopping_cart_total = total
  // }

  function update_tax_dom(total: number) {
    set_tax_dom(calc_tax(total))
  }

  function update_shipping_icons(cart: Cart[]) {
    const buy_buttons = get_buy_buttons_dom()
    buy_buttons.forEach((button) => {
      // 버튼들을 반복문으로 돌리면서, 현재 shopping_cart의 총합이 20보다 크면 true return
      // 전역 변수를 쓰는 shopping_cart를 인자로 바꾼다. shopping_cart -> cart (액션에서 암묵적 입력을 명시적 입력으로 바꾼다.)
      const new_cart = add_item(cart, button.name, button.price)
      if (get_free_shipping(new_cart)) {
        button.show_free_shipping_icons()
      } else button.hide_free_shipping_icons()
    })
  }

  // 😙 계산으로 변경
  function get_free_shipping(cart: Cart[]) {
    // 장바구니에 있는 총 합이 20보다 커야 무료배송
    if (calc_total(cart) >= 20) true
    return false
  }

  // 😙 계산으로 변경
  function add_item(cart: Cart[], name: string, price: number) {
    const copied_cart = [...cart]
    copied_cart.push({
      name,
      price,
    })

    return copied_cart
  }

  // 😙 계산으로 변경
  function calc_total(cart: Cart[]) {
    let total = 0
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i]
      total += item.price
    }

    return total
  }

  // 😙 계산으로 변경
  function calc_tax(amount: number) {
    return amount * 0.1
  }

  add_item_to_cart('cap', 20)
  add_item_to_cart('vali', 50)

  console.log(shopping_cart)
}
