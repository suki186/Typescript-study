// 문제 3. 아래 조건에 따라 인터페이스를 확장하세요.
/*
1. 기본적으로 사용자 정보를 나타내는 User 인터페이스를 만드세요. (id, name, email?)
2. 관리자 정보를 나타내는 Admin 인터페이스를 만들되, User 인터페이스를 확장하세요. 관리자는 추가적으로 role 속성을 가집니다. (role: 문자열)
작성한 뒤, 사용자와 관리자를 나타내는 객체를 만드세요.
*/

// User 인터페이스 작성
interface IUser {
  id: number;
  name: string;
  email?: string;
}

// Admin 인터페이스 작성 (User 확장)
interface IAdmin extends IUser {
  role: string;
}

const normalUser: IUser = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

const adminUser: IAdmin = {
  id: 2,
  name: "Bob",
  role: "Administrator",
};
