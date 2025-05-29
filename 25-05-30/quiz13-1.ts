// 문제 1. 회원가입 폼 데이터의 일부만 채워진 상태를 처리하기 위해, 모든 속성이 선택적인 타입을 생성하는 문제입니다.
/*
1. 기본 타입 정의:
- User: 회원 정보 (이름, 이메일, 비밀번호).
- Partial을 활용: 모든 속성을 선택 속성으로 변경하는 타입을 생성하세요.

2. 함수 작성:
- 함수 이름: updateUserForm.
- 입력: 기존 사용자 데이터와 업데이트된 폼 데이터.
- 출력: 업데이트된 사용자 데이터.
*/

type User = {
  name: string;
  email: string;
  password: string;
};

// 함수 작성
function updateUserForm(user: User, updates: Partial<User>): User {
  return { ...user, ...updates }; // 기존 user에 업데이트 추가
}

// 테스트 코드
const currentUser = {
  name: "Alice",
  email: "alice@example.com",
  password: "1234",
};
const updatedForm = { email: "new-email@example.com" };

console.log(updateUserForm(currentUser, updatedForm));
// 기대 출력: { name: "Alice", email: "new-email@example.com", password: "1234" }
