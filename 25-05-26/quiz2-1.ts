// 문제 1.아래 객체를 보고 user의 타입을 작성하세요

let user: { name: string; age?: number; isAdmin: boolean } = {
  name: "Alice",
  isAdmin: true,
};

user = {
  name: "Bob",
  age: 40,
  isAdmin: false,
};
