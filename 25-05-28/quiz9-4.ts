// 문제 4. 아래와 같은 유니온 타입을 처리하는 함수를 작성하세요
/*
Rectangle 객체: { width: number; height: number }
Circle 객체: { radius: number }

Rectangle이면 넓이를 반환합니다. (가로 × 세로)
Circle이면 넓이를 반환합니다. (π × 반지름²)
*/

type Rectangle = { width: number; height: number };
type Circle = { radius: number };

// 사용자 정의 타입 가드 ---> is 사용
function isRectangle(shape: unknown): shape is Rectangle {
  return (
    (shape as Rectangle).width !== undefined &&
    (shape as Rectangle).height !== undefined
  );
}

function calculateArea(shape: Rectangle | Circle): number {
  if (isRectangle(shape)) {
    // 사각형
    return shape.width * shape.height;
  } else {
    // 원
    return Math.PI * shape.radius ** 2;
  }
}

// 테스트 코드
console.log(calculateArea({ width: 10, height: 5 })); // 50
console.log(calculateArea({ radius: 7 })); // 153.93804002589985 (대략 π * 7²)
