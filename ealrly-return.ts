function loginService(isLogin: boolean, user: any) {
  if (!isLogin) {
    if (checkToken()) {
      if (!user.name) {
        return register(user)
      } else {
        refreshToken()

        return '로그인 성공!'
      }
    } else {
      throw new Error('No Token')
    }
  }
}

// early-return을 적용함!
function loginService(isLogin: boolean, user: any) {
  // 1. 로그인 되어있으면 함수 종료 Early return
  // 2. 사람이 사고하기 편하다.
  if (isLogin) return
  if (!checkToken()) throw new Error('No token')
  if (!user.name) return register(user)
  // 하나도 걸리지 않았을때 로그인 됨
  login()
}

function login() {
  refreshToken()
  return '로그인 성공!'
}
