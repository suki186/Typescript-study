// 문제3. 사용자 프로필과 활동 기록 병합
/* 
1. 기본 사용자 정보(Profile):
    * id: 사용자 고유 ID (숫자)
    * name: 사용자 이름 (문자열)
    * email: 이메일 주소 (문자열)

2. 사용자 활동 기록(Activity):
    * lastLogin: 마지막 로그인 시간 (Date 객체)
    * actions: 사용자가 수행한 작업 목록 (문자열 배열)

Profile & Activity 타입을 기반으로 다음 요구사항을 만족하는 코드를 작성하세요:

mergeUserData: 사용자 프로필과 활동 기록을 병합하여 새로운 객체를 반환하는 함수.
getUserSummary: 병합된 데이터를 입력받아 사용자 요약 정보를 반환하는 함수:
* 출력 형식: "사용자 [id] - [name] ([email]) - 마지막 로그인: [lastLogin]"
*/

// 기본 사용자 정보 타입 정의
type Profile = {
  id: number;
  name: string;
  email: string;
};

// 사용자 활동 기록 타입 정의
type Activity = {
  lastLogin: Date;
  actions: string[];
};

// 사용자 데이터를 병합하는 함수
function mergeUserData(
  profile: Profile,
  activity: Activity
): Profile & Activity {
  return {
    ...profile,
    ...activity,
  };
}

// 사용자 요약 정보를 반환하는 함수
function getUserSummary(user: Profile & Activity): string {
  return `사용자 ${user.id} - ${user.name} (${user.email}) - 마지막 로그인: ${user.lastLogin}`;
}

// 테스트 코드
const profile = { id: 1, name: "Alice", email: "alice@example.com" };
const activity = {
  lastLogin: new Date("2024-01-01T10:00:00Z"),
  actions: ["login", "viewed dashboard", "logout"],
};

const mergedUser = mergeUserData(profile, activity);
console.log(getUserSummary(mergedUser));
// 출력 예시: "사용자 1 - Alice (alice@example.com) - 마지막 로그인: 2024-01-01T10:00:00Z"
