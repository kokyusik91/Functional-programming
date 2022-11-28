// {
//   let mailing_list = []

//   function add_email(list: string[], email: string) {
//     const new_mailing_list = [...list]
//     new_mailing_list.push(email)
//     return new_mailing_list
//   }

//   function submit_form_handler(event: any, email_list: string[]) {
//     const form = event.target
//     const email = form.elements['email'].value
//     mailing_list = add_email(email_list, email)
//   }

//   submit_form_handler(event, mailing_list)
// }

{
  const a = [1, 2, 3, 4]
  // shift 함수를 실행 시키면, 기존 배열을 변경하고(쓰기) 변경된 배열을 return 한다(읽ㄱㅣ)
  // const b = a.shift()

  function readElement<T>(arr: T[]): T[] {
    let new_array = [...arr]
    new_array.shift()
    return new_array
  }

  function writeElement<T>(arr: T[]): T | undefined {
    return arr.shift()
  }

  function run<T>(arr: T[]): void {
    const read = readElement(arr)
    const write = writeElement(arr)

    console.log('read', read)
    console.log('write', write)
  }

  type Return<T> = {
    first: T
    array: T[]
  }

  function shift2<T>(arr: T[]) {
    const new_array = [...arr]
    const first = new_array.shift()
    return {
      first,
      array: new_array,
    }
  }

  function last_element<T>(arr: T[]): T | undefined {
    return arr[arr.length - 1]
  }

  function popFunc<T>(arr: T[]): T[] {
    const new_array = [...arr]
    new_array.pop()
    return new_array
  }

  const popFirst = last_element(a)
  const popArray = popFunc(a)

  console.log('popFirst', popFirst)
  console.log('popArray', popArray)

  function twoValueReturn<T>(arr: T[]) {
    const new_array = [...arr]
    const last = new_array.pop()
    return {
      last,
      array: new_array,
    }
  }

  const arrayAndLastValue = twoValueReturn(a)
  console.log(arrayAndLastValue)
}
