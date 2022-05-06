//分割代入

// const myProfile = {
//   name:"じゃけぇ",
//   age : 28,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 =`名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

const myProfile = ["じゃけぇ", 28];

const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
console.log(message3);

const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message4);
