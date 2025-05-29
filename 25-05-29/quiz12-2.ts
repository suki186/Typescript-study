// 문제 2. 서버에서 데이터를 요청할 때 발생하는 상태를 처리하는 함수를 작성하세요.
/*
1. 리터럴 타입 정의:
요청 상태: "loading", "success", "error".

2. 함수 작성:
- 함수 이름: handleRequestState.
- 입력: 요청 상태(리터럴 타입).
- 출력: 상태에 따라 메시지를 반환.
*/

function handleRequestState(state: "loading" | "success" | "error"): string {
  switch (state) {
    case "loading":
      return "Loading, please wait...";
    case "success":
      return "Request successful!";
    case "error":
      return "There was an error processing your request.";
    default:
      throw new Error("오류 발생");
  }
}

// 테스트 코드
console.log(handleRequestState("loading")); // "Loading, please wait..."
console.log(handleRequestState("success")); // "Request successful!"
console.log(handleRequestState("error")); // "There was an error processing your request."
// console.log(handleRequestState("unknown")); // 오류 발생
