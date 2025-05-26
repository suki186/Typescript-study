// 문제 6. 주어진 값이 원시 타입인지 아닌지 확인하는 함수를 작성하세요.
// 힌트: Object() 를 공부해보세요

function isPrimitive(value: unknown): boolean {
  // null 이거나 Object가 아니면 원시타입
  if (value === null || value !== Object(value)) {
    return true;
  }
  return false;
}

// 함수 호출 예시
console.log(isPrimitive("Hello")); // true
console.log(isPrimitive(42)); // true
console.log(isPrimitive(false)); // true
console.log(isPrimitive(null)); // true
console.log(isPrimitive(undefined)); // true
console.log(isPrimitive({})); // false
console.log(isPrimitive([])); // false
