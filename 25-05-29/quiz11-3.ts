// 문제3. 다음 조건을 만족하는 조건부 타입과 함수를 작성하세요.
/**
조건부 타입 정의
- 타입 이름: IsArray<T>
- 입력 타입 T가 배열 타입이면 true를 반환합니다.
- 그렇지 않으면 false를 반환합니다.

조건부 타입을 활용하는 함수
- 함수 이름: checkArrayType
- 입력: unknown 타입의 값.
- 출력: 입력값이 배열이면 "This is an array."를, 그렇지 않으면 "This is not an array."를 반환합니다.
 */

// 조건부 타입 정의
// ---> 그냥 Array만 적으면 에러
type IsArray<T> = T extends Array<any> ? true : false;

// 조건부 타입을 활용한 함수
function checkArrayType<T>(value: T): string {
  // value.IsArray()로 해봤는데 -> 'IsArray' does not exist on type 'T'.
  if (Array.isArray(value)) {
    return "This is an array.";
  } else {
    return "This is not an array.";
  }
}

// 테스트 코드
console.log(checkArrayType([1, 2, 3])); // "This is an array."
console.log(checkArrayType("Hello")); // "This is not an array."
console.log(checkArrayType({ key: "value" })); // "This is not an array."
