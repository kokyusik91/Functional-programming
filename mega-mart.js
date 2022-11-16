const shopping_cart = []
let shopping_cart_total = 0

function add_item_to_cart(name, price) {
  shopping_cart.push({
    name,
    price,
  })
  calc_cart_total()
}

function calc_cart_total() {
  shopping_cart_total = calc_total()
}

// 따로 함수로 빼고 cart 배열을 인자로 받고
function calc_total(cart) {
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i]
    cart += item.price
  }

  return total
}
  set_cart_total_dom()
  update_shipping_icons()
  calc_cart_total()
}

//
function update_shipping_icons() {
  const buy_buttons = get_buy_buttons_dom()
  for (let i = 0; i < buy_icons.length; i++) {
    const button = buy_buttons[i]
    const item = button.item
    if (item.price + shopping_cart_total >= 20) {
      button.show_free_shipping_icon()
    } else {
      button.hide_free_shipping_icon()
    }
  }
}

// 다음 요구 사항으로 세금 계산하기
function calc_cart_total() {
  set_tax_dom(shopping_cart_total * 0.1)
}

/**
 * 함수의 입력과 출력
 */

let total = 20
function add_to_cart(amount) {
  console.log('Old total : ' + total)
  total += amount
  return total
}
