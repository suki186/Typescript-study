// 문제 4. 사용자 정보를 업데이트하는 함수를 작성하세요. 나이가 제공되지 않으면 기본값으로 18을 사용하세요

//매개변수, 리턴 타입 정의 필요 (age는 선택)
function updateUser(user: { name: string; age?: number }): {
  name: string; // 리턴 타입
  age: number;
} {
  return { ...user, age: user.age ?? 18 }; // 나이가 없으면 18
}

// 테스트 코드
console.log(updateUser({ name: "Charlie" })); // { name: "Charlie", age: 18 }
console.log(updateUser({ name: "Dana", age: 25 })); // { name: "Dana", age: 25 }
