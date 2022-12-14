function arraySet(array, idx, value) {
  const copy = [...array]
  copy[idx] = value
  return copy
}

function withArrayCopy(array, callBackFunc) {
  const copy = [...array]
  callBackFunc(copy)
  return copy
}

function arraySet(array, idx, value) {
  return withArrayCopy(array, (copy) => {
    copy[idx] = value
  })
}

function push(array, elem) {
  return withArrayCopy(array, (copyArray) => copyArray.push(elem))
}

// 콜백함수로 then과 ELSE를 받는다.
function IF(test, then, ELSE) {
  if (test) {
    return then
  } else return ELSE
}

IF(
  array.length === 10,
  () => {
    console.log('덴덴')
  },
  () => {
    return cart
  },
)
