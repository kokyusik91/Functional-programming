{
  const customers = [
    {
      firstName: 'ko',
      lastName: 'kyusik',
      address: '송파구',
      age: 32,
      gender: 'male',
    },
    {
      firstName: 'nico',
      lastName: 'nomad',
      address: '강동구',
      age: 39,
      gender: 'alien',
    },
    {
      firstName: 'somi',
      lastName: 'jeong',
      address: '중랑구',
      age: 27,
      gender: 'female',
    },
    {
      firstName: 'jihoon',
      lastName: 'kwak',
      address: '양천구',
      age: 31,
      gender: 'male',
    },
  ]
  const array = customers.map((customer) => {
    return {
      firstName: customer.firstName,
      lastName: customer.lastName,
      address: customer.address,
    }
  })

  console.log(array)
}
