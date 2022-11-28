{
  type Employee = {
    type: 'partTime' | 'fullTime'
    name: string
    age: number
  }
  /**
   * 외부 신뢰 할 수 없는 라이브러리임
   */
  function payrollCalc(employees: Employee[]) {
    // 뭐뭐뭐뭐 한작업후
    return payrollChecks
  }
  /**
   * 내가 만드는 safe 함수
   */
  function payrollCalcSafe(employee: Employee[]) {
    // 1. 안전한 코드로 데이터가 들어올때 복사하기
    const copy = deepCopy(employee)
    const employeeArray = payrollCalc(copy)
    // 2. 데이터가 안전한 코드에서 나갈 때 복사하기
    return deepCopy(employeeArray)
  }

  userChanges.subscribe(function(user){

    const copy = deepCopy(user)
    const checked_user = processUser(copy)
    return deepCopy(checked_user)
  })
}
