// 문제5. 유니온 타입의 문제점과 해결 방법
/*
1. 유니온 타입의 문제점
아래와 같은 두 가지 유니온 타입을 처리하는 함수가 있습니다:

- Square: { type: "square"; side: number }
- Circle: { type: "circle"; radius: number }
    calculateArea라는 함수는 두 타입의 넓이를 계산하려고 하지만, 유니온 타입을 제대로 처리하지 않고 사용할 경우 런타임 에러가 발생할 가능성이 생길 수 있다. 이를 해결 방법을 작성하세요.

2. 해결 방법:
- 식별 가능한 유니온(type 속성)을 사용하여 타입을 안전하게 좁히는 코드를 작성하세요.
- exhaustiveness check를 추가하여, 새로운 타입이 추가되더라도 타입 안정성을 유지하도록 구현하세요.
*/

type Square = { type: "square"; side: number };
type Circle = { type: "circle"; radius: number };

type Shape = Square | Circle;

// 넓이를 계산하는 함수
function calculateArea(shape: Shape): number {
  switch (shape.type) {
    case "square": // 사각형
      return shape.side ** 2;
    case "circle": // 원
      return Math.PI * shape.radius ** 2;
    default:
      exhaustiveCheck(shape);
  }
}

// 새로운 타입이 추가되더라도 타입 안정성을 유지
function exhaustiveCheck(param: never): never {
  throw new Error("에러 발생");
}

// 테스트 코드
console.log(calculateArea({ type: "square", side: 5 })); // 기대 출력: 25
console.log(calculateArea({ type: "circle", radius: 7 })); // 기대 출력: 153.93804002589985
