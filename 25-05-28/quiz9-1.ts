// 문제 1. 다양한 데이터 타입을 입력받아, 입력에 따라 다른 처리를 수행하는 함수를 작성하세요.
/*
입력은 다음 세 가지 형태 중 하나입니다:

숫자 배열: 배열의 합계를 반환합니다.
문자열 배열: 배열의 모든 문자열을 연결한 결과를 반환합니다.
객체 { message: string }: message 속성을 대문자로 변환한 문자열을 반환합니다.
*/

// 매개변수, 리턴타입 정의필요
function processInput(
  input: number[] | string[] | { message: string }
): number | string {
  // --> Array.isArray(input)도 가능
  if (input instanceof Array) {
    if (typeof input[0] === "number") {
      return (input as number[]).reduce((sum, n) => sum + n, 0); // 배열 합계
    } else if (typeof input[0] === "string") {
      return (input as string[]).join(""); // 배열 연결
    }
  } else if ("message" in input) {
    return input.message.toUpperCase(); // 대문자로
  }
  throw new Error("입력 타입 오류");
}

// 테스트 코드
console.log(processInput([1, 2, 3])); // 6
console.log(processInput(["hello", "world"])); // "helloworld"
console.log(processInput({ message: "TypeScript" })); // "TYPESCRIPT"
//console.log(processInput(42)); // 에러 발생
