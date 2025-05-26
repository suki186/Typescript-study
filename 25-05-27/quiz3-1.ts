// 문제 1. 사용자 정보를 나타내는 인터페이스와 타입을 작성하세요. 사용자 정보는 다음과 같은 구조를 가집니다.
// id: 고유 ID (숫자) name: 이름 (문자열) email: 이메일 (문자열, 선택 속성)

// 인터페이스 작성
interface IUser {
  id: number;
  name: string;
  email?: string;
}

// 타입 작성
type TUser = {
  id: number;
  name: string;
  email?: string;
};

const user: IUser = {
  id: 1,
  name: "Alice",
};

const userWithEmail: TUser = {
  id: 2,
  name: "Bob",
  email: "bob@example.com",
};
