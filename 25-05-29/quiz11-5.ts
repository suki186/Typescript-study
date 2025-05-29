// 문제 5. 키와 값을 받아 객체를 생성하는 함수를 작성하세요.
/*
1. 함수 이름: createObject
2. 입력:
 - key: 키 (제네릭 타입 K)
 - value: 값 (제네릭 타입 V)
 - 출력: { key: value } 형태의 객체
 */

// [P in K] 말고 그냥 [K]만 쓰면 "Member '[K]' implicitly has an 'any' type, but a better type may be inferred from usage."이 난다.
// ---> 답지 참고 했는데 오류가 난다. 왤까
function createObject<K, V>(key: K, value: V): { [P in K]: V } {
  return { [key]: value } as { [P in K]: V };
}

// 테스트 코드
console.log(createObject("id", 123)); // { id: 123 }
console.log(createObject("name", "Alice")); // { name: "Alice" }
