// 문제3. in을 활용한 사용자 관리
/*
1. 시스템에는 두 종류의 사용자가 있습니다:
Admin 사용자: { type: "admin"; permissions: string[] }
User 사용자: { type: "user"; email: string }

2. processUser라는 함수를 작성하세요. 함수는 입력으로 Admin 또는 User 객체를 받아 다음과 같이 처리합니다:
Admin: 권한 목록(permissions)을 ,로 연결한 문자열을 반환합니다.
User: 이메일 주소(email)을 반환합니다.
*/

type Admin = { type: "admin"; permissions: string[] };
type User = { type: "user"; email: string };

function processUser(user: Admin | User): string {
  if ("permissions" in user) {
    // Admin
    return user.permissions.join(",");
  } else if ("email" in user) {
    // User
    return user.email;
  } else {
    throw new Error("에러 발생");
  }
}

// 테스트 코드
console.log(processUser({ type: "admin", permissions: ["read", "write"] })); // "read,write"
console.log(processUser({ type: "user", email: "user@example.com" })); // "user@example.com"
//console.log(processUser({ type: "guest" })); // 에러 발생
