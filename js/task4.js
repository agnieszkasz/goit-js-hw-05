const allUserss = [
  {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811,
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821,
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793,
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278,
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951,
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498,
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764,
  },
];
// const getTotalBalanceByGender = (allUserss, gender) => {
//   return allUserss
//     .filter((user) => user.gender === gender)
//     .reduce((previousUser, user) => {
//       return previousUser + user.balance;
//     }, 0);
// };
const getTotalBalanceByGender = (allUserss, gender) => {
  const genderBalance = allUserss
    .filter((user) => user.gender === gender)
    .reduce((previousUser, user) => {
      return previousUser + user.balance;
    }, 0);
  return genderBalance;
};
console.log(getTotalBalanceByGender(allUserss, "male")); // 12053

console.log(getTotalBalanceByGender(allUserss, "female")); // 8863