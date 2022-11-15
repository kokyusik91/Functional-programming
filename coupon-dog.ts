// 유저 정보 및 쿠폰 정보 데이터를 DB에서 받아와서
// 10이상 추천 한사람들에게는 good 쿠폰을 보내준다!

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
    rank: 'best',
  },
  {
    coupon: 'IHEARTYOU',
    rank: 'bad',
  },
  {
    coupon: 'GETADEAL',
    rank: 'best',
  },
  {
    coupon: 'ILIKEDISCOUNTS',
    rank: 'good',
  },
]
// 3초 있다가 promise return
function asyncFunc(data: UserInfoModel[] | CouponModel[]): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 2000)
  })
}

const getUserInfo = async (): Promise<UserInfoModel[]> => {
  const response = await asyncFunc(userInfoList)
  console.log('유저 정보 가져옴!')
  return response
}

const getCouponInfo = async (): Promise<CouponModel[]> => {
  const response = await asyncFunc(couponRankList)
  console.log('쿠폰 정보 가져옴!')
  return response
}

// 계산. 유저 정보에서 10 이상인 사람들의 이메일을 뽑는다.
const filteredByrecUptoTen = (userInfoList: UserInfoModel[]) => {
  const copiedArray = [...userInfoList]
  return copiedArray
    .filter((user) => user.rec_count >= 10)
    .map((user) => user.email)
}
// 한명에 대해 good 쿠폰을 받을지 best 쿠폰을 받을지 정함.
const distinBestOrGood = (subScriber: UserInfoModel) => {
  console.log('구독자중 best 쿠폰 받을 사람, good 쿠폰 받을 사람 나누기')
  if (subScriber.rec_count >= 10) return 'best'
  else return 'good'
}

// const filteredGoodCoupon = (couponList: CouponModel[]) => {
//   const copiedArray = [...couponList]
//   return copiedArray.filter((coupon) => coupon.rank === 'good')
// }

// const filteredBestCoupon = (couponList: CouponModel[]) => {
//   const copiedArray = [...couponList]
//   return copiedArray.filter((coupon) => coupon.rank === 'best')
// }

const filteredCouponList = (
  couponList: CouponModel[],
  state: 'best' | 'good',
) => {
  const copiedArray = [...couponList]
  console.log('쿠폰 리스트에서 good목록 best목록 나타내기')
  return copiedArray
    .filter((coupon) => coupon.rank === state)
    .map((coupon) => coupon.coupon)
}
// 1명에 대한 이메일 목록을 만들어낸다.
const emailForSubscriber = (
  subScriber: UserInfoModel,
  bests: string[],
  goods: string[],
) => {
  const rank = distinBestOrGood(subScriber)
  if (rank === 'best') {
    return {
      // best 쿠폰을 받을 때의 이메일 데이터를 만든다.
      emailFrom: 'https://kyusikko@naver.com',
      emailTo: subScriber.email,
      subject: 'Your weekly coupon inside. 🎊 You won Best Coupon!🎊',
      body: `Here is your coupon code ${bests.join(',')}`,
    }
  } else {
    return {
      // best 쿠폰을 받을 때의 이메일 데이터를 만든다.
      emailFrom: 'https://kyusikko@naver.com',
      emailTo: subScriber.email,
      subject: 'Your weekly coupon inside',
      body: `Here is your coupon code ${goods.join(',')}`,
    }
  }
}

const makeAllemailList = (
  userInfo: UserInfoModel[],
  bests: string[],
  goods: string[],
) => {
  const emailList = []
  // userInfo.forEach((user) => )
}

// 계산 -> 구독자 목록과 쿠폰 목록을 입력으로 받아서 이메일 목록 계획하는 함수를 만들고, return 으로 이메일 목록을 내보낸다.

async function run() {
  const userInfo = await getUserInfo()
  const couponInfo = await getCouponInfo()

  const peopleWhoGetGoodCouponList = filteredByrecUptoTen(userInfo)
  const bestCouponList = filteredCouponList(couponInfo, 'best')
  const goodCouponList = filteredCouponList(couponInfo, 'good')

  userInfo.forEach((user) =>
    console.log(emailForSubscriber(user, bestCouponList, goodCouponList)),
  )
}

run()
