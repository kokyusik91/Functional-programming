type UserInfoModel = {
  email: string
  rec_count: number
}

type CouponModel = {
  coupon: string
  rank: 'good' | 'bad' | 'best'
}
/**
 * 유저 정보 데이터 선언
 */
const userInfoList: UserInfoModel[] = [
  { email: 'kokyusik91@naver.com', rec_count: 10 },
  { email: 'kks91@dgdr.com', rec_count: 2 },
  { email: 'kim@gmail.com', rec_count: 3 },
  { email: 'wow1109@paran.com', rec_count: 5 },
  { email: 'k2e@empas.com', rec_count: 7 },
  { email: 'jeonghun@surinam.com', rec_count: 14 },
  { email: 'sik@naver.com', rec_count: 20 },
]

/**
 * 쿠폰 정보 데이터 선언
 */
const couponRankList: CouponModel[] = [
  {
    coupon: 'MAYDISCOUNT',
    rank: 'good',
  },
  {
    coupon: '10PERCENT',
    rank: 'bad',
  },
  {
    coupon: 'PROMOTION',
    rank: 'bad',
  },
  {
    coupon: 'IHEARTYOU',
    rank: 'bad',
  },
  {
    coupon: 'GETADEAL',
    rank: 'bad',
  },
  {
    coupon: 'ILIKEDISCOUNTS',
    rank: 'good',
  },
]
// 3초 있다가 promise return
function asyncFunc(
  data: UserInfoModel[] | CouponModel[],
): Promise<UserInfoModel[] | CouponModel[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 2000)
  })
}

const getUserInfo = async () => {
  const response = await asyncFunc(userInfoList)
  return response
}

const getCouponInfo = async () => {
  const response = await asyncFunc(couponRankList)
  return response
}

console.log('프로그래밍 실행!')

async function run() {
  console.log('Run 함수 실행')
  const userInfo = await getUserInfo()
  console.log('userInfo', userInfo)
  const couponInfo = await getCouponInfo()
  console.log('couponInfo', couponInfo)
  console.log('Run 함수 종료! 끝!')
}

run()

console.log('프로그래밍 종료!')
