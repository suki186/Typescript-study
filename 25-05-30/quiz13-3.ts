// 문제 3. 데이터베이스 저장 시 민감한 정보를 제외하는 문제입니다.
/*
1. 기본 타입 정의:
- User: 사용자 정보 (이름, 이메일, 비밀번호, 역할).

2. Omit을 활용:
- 민감한 정보를 제외한 타입을 정의하세요. (비밀번호는 제외)

3. 함수 작성:
- 함수 이름: filterSensitiveInfo.
- 입력: 전체 사용자 정보.
- 출력: 민감한 정보가 제외된 객체.
*/

type User = {
  name: string;
  email: string;
  password: string;
  role: string;
};

// 함수 작성
function filterSensitiveInfo(user: User): Omit<User, "password"> {
  // 왜 그냥 return user;하면 안될까?
  const { password, ...filteredInfo } = user;
  return filteredInfo;
}

// 테스트 코드
const userInfo = {
  name: "Alice",
  email: "alice@example.com",
  password: "1234",
  role: "admin",
};

console.log(filterSensitiveInfo(userInfo));
// 기대 출력: { name: "Alice", email: "alice@example.com", role: "admin" }
