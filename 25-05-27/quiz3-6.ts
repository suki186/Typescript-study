// 문제 6. 아래 조건을 만족하는 타입과 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하세요.
/*
1. BaseUser라는 인터페이스를 작성하세요:
- id: 숫자
- name: 문자열
2. AdminUser라는 타입을 작성하세요:
- BaseUser를 확장합니다.
- 추가로 role: 문자열을 포함합니다.
3. GuestUser라는 타입을 작성하세요:
- BaseUser를 확장합니다.
- 추가로 visitCount: 숫자를 포함합니다.
*/

// BaseUser 인터페이스 작성
interface BaseUser {
  id: number;
  name: string;
}

// AdminUser 타입 작성
type AdminUser = BaseUser & {
  role: string;
};

// GuestUser 타입 작성
type GuestUser = BaseUser & {
  visitCount: number;
};

// 아래 객체를 작성하세요.
const admin: AdminUser = {
  id: 1,
  name: "Alice",
  role: "Administrator",
};

const guest: GuestUser = {
  id: 2,
  name: "Bob",
  visitCount: 5,
};
