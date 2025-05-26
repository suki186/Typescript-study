// 문제 4. 아래 조건을 만족하는 함수를 작성하세요.
/*
1. 두 개의 함수(processAny와 processUnknown)를 작성합니다:

- processAny: 매개변수로 any 타입을 받습니다. 입력값의 타입에 관계없이 값을 문자열로 변환하여 반환합니다.
- processUnknown: 매개변수로 unknown 타입을 받습니다. 입력값이 문자열이면 대문자로 변환하여 반환하고, 숫자라면 10을 곱해 반환합니다. 다른 타입의 경우 에러를 발생시킵니다.

2. 테스트 코드를 작성하여 두 함수의 차이를 확인하세요.
*/

function processAny(input: any): string {
  return input.toString();
}

function processUnknown(input: unknown): string | number {
  if (typeof input === "string") {
    // 문자열
    return input.toUpperCase();
  } else if (typeof input === "number") {
    // 숫자
    return input * 10;
  } else {
    throw new Error("에러 발생"); // 다른 타입
  }
}

// 테스트 코드
console.log(processAny("hello")); // 기대 출력: "hello"
console.log(processAny(42)); // 기대 출력: "42"
console.log(processAny(true)); // 기대 출력: "true"

console.log(processUnknown("hello")); // 기대 출력: "HELLO"
console.log(processUnknown(42)); // 기대 출력: 420
console.log(processUnknown(true)); // 에러 발생
