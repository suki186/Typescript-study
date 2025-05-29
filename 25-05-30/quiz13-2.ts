// 문제 2. 프로필 페이지에 표시할 사용자 정보에서 필요한 속성만 선택하는 문제입니다.
/*
1. 기본 타입 정의:
- UserProfile: 사용자 프로필 정보 (아이디, 이름, 이메일, 주소).

2. Pick을 활용:
- 프로필 페이지에 필요한 데이터(아이디와 이름)만 추출하는 타입을 정의하세요.

3. 함수 작성:
- 함수 이름: getProfileSummary.
- 입력: 전체 사용자 정보.
- 출력: 필요한 속성만 포함된 객체.
*/

type UserProfile = {
  id: number;
  name: string;
  email: string;
  address: string;
};

// 함수 작성
function getProfileSummary(
  user: Pick<UserProfile, "id" | "name">
): Pick<UserProfile, "id" | "name"> {
  // ---> return 타입에도 Pick을 써야한다.
  return { id: user.id, name: user.name };
}

// 테스트 코드
const userProfile = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  address: "123 Main St",
};

console.log(getProfileSummary(userProfile));
// 기대 출력: { id: 1, name: "Alice" }
