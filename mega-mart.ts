{
  type Cart = {
    name: string
    price: number
  }
  let shopping_cart: Cart[] = []
  let shopping_cart_total = 0

  function add_item_to_cart(name: string, price: number) {
    shopping_cart = add_item(shopping_cart, name, price)
    calc_cart_total()
  }

  function calc_cart_total() {
    shopping_cart_total = calc_total(shopping_cart)
    update_shipping_icons()
    update_tax_dom()
  }

  function update_tax_dom() {
    set_tax_dom(calc_tax(shopping_cart_total))
  }

  function update_shipping_icons() {
    const buy_buttons = get_buy_buttons_dom()
    buy_buttons.forEach((button) => {
      if (is_free(button.item.price, shopping_cart_total)) {
        button.show_free_shipping_icons()
      } else button.hide_free_shipping_icons()
    })
  }

  // 😙 계산으로 변경
  function is_free(price: number, total: number) {
    if (price + total >= 20) true
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
