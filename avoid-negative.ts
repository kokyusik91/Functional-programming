function isNumber(num: number) {
  return !Number.isNaN(num) && typeof num === 'number'
}

if (isNumber(3)) {
  console.log('숫자 입니다')
}

// 당연히 참일때 실행되는게 선행 되야 한다. in Programming
if (isCondition) {
  console.log('참일때 실행')
} else console.log('거짓일때 실행')

function getActiveUserName(user) {
  if (user.name) {
    return user.name
    /** 익숙하지 않다는 이유로 else를 작성하는 경우가 종종 있다. */
  } else {
    return '이름없음'
  }
}

/** else를 직접 쓰지 않아도 된다. */
function getActiveUserName(user) {
  if (user.name) {
    return user.name
  }
  /** 위의 if가 참이면  */
  return '이름없음'
}
