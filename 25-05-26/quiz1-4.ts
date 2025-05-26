// 문제 4. 주어진 값을 받아 문자열로 변환하는 함수를 작성하세요. 값이 null 또는 undefined라면 "값이 없습니다"를 반환합니다
// 힌트: 한 변수에 타입을 여러개를 받고싶다면 | (유니온타입) 을 쓸 수 있다 (예시: 문자열 또는 숫자 : string|number)

function stringifyValue(value: string | null | undefined): string {
  if (value == null || value == undefined) {
    return "값이 없습니다";
  }

  return value;
}

// 함수 호출
console.log(stringifyValue("Hello")); // "Hello"
console.log(stringifyValue(null)); // "값이 없습니다"
console.log(stringifyValue(undefined)); // "값이 없습니다"
