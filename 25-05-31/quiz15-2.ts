// 문제 2. 동적으로 주어진 키를 사용해 객체의 값을 추출하는 함수를 작성하세요.
/*
요구사항:
- 객체 타입과 키를 동적으로 받아, 해당 키에 해당하는 값을 반환하는 함수.
- 주어진 키가 객체에 반드시 존재한다는 조건에서 작동합니다.
- 타입스크립트는 동적 키를 사용하는 상황에서 기본적으로 안전성을 보장하지 않으므로, as를 사용해야 합니다.
*/

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  //return obj[key]; // --> any, unknown으로 처리되어 안전하지 않은 접근 방식
  return obj[key] as T[K];
}

// 테스트 코드
const user = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

console.log(getValue(user, "name")); // 기대 출력: "Alice"
console.log(getValue(user, "email")); // 기대 출력: "alice@example.com"
