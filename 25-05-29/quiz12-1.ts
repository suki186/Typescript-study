// 문제 1. 웹 애플리케이션에서 사용할 버튼의 스타일을 선택하는 함수를 작성하세요.
/*
1. 리터럴 타입 정의:
버튼 스타일: "primary", "secondary", "danger".

2. 함수 작성:
함수 이름: getButtonClass.
입력: 버튼 스타일(리터럴 타입).
출력: 스타일에 따라 CSS 클래스를 반환.
*/

function getButtonClass(style: "primary" | "secondary" | "danger"): string {
  switch (style) {
    case "primary":
      return "btn-primary";
    case "secondary":
      return "btn-secondary";
    case "danger":
      return "btn-danger";
    default:
      throw new Error("오류 발생");
  }
}

// 테스트 코드
console.log(getButtonClass("primary")); // "btn-primary"
console.log(getButtonClass("secondary")); // "btn-secondary"
console.log(getButtonClass("danger")); // "btn-danger"
// console.log(getButtonClass("unknown")); // 오류 발생
