// 문제 2. 아래 조건에 따라 함수를 작성하세요.
/*
1. 작업 상태를 나타내는 enum:

Pending: 작업 대기 중
InProgress: 작업 진행 중
Completed: 작업 완료
Failed: 작업 실패

2. 함수의 요구사항:

- 함수는 작업 상태(TaskStatus)와 입력값(unknown)을 받습니다.
- input은 문자열이어야 합니다.
- 문자열을 작업 상태에 따라 가공합니다:
    Pending: 문자열을 모두 대문자로 변환.
    InProgress: 문자열을 소문자로 변환.
    Completed: 문자열 앞에 "완료: "를 추가.
    Failed: 에러를 발생시킵니다.
- 작업 상태가 Failed면 에러를 발생시켜야 합니다.
- 최종 결과로 가공된 문자열 배열을 반환합니다.

힌트 : typeof를 사용하면 타입을 알 수 있다.
*/

// 작업 상태를 나타내는 enum 작성
const enum TaskStatus {
  Pending = "Pending",
  InProgress = "InProgress",
  Completed = "Completed",
  Failed = "Failed",
}

function processTask(status: TaskStatus, input: unknown): string {
  if (typeof input !== "string") {
    throw new Error("입력값은 문자열이어야 합니다."); // 문자열 아니면 Error 발생
  }

  switch (status) {
    case TaskStatus.Pending:
      return input.toUpperCase();
    case TaskStatus.InProgress:
      return input.toLowerCase();
    case TaskStatus.Completed:
      return `완료: ${input}`;
    case TaskStatus.Failed:
      throw new Error("작업이 실패했습니다.");
    default:
      throw new Error("알 수 없는 상태입니다.");
  }
}

// 테스트 코드
console.log(processTask(TaskStatus.Pending, "task1"));
// 기대 출력: "TASK1"

console.log(processTask(TaskStatus.InProgress, "TaskA"));
// 기대 출력: "taska"

console.log(processTask(TaskStatus.Completed, "Report1"));
// 기대 출력: "완료: Report1"

console.log(processTask(TaskStatus.Failed, "TaskX"));
// 에러: 작업이 실패했습니다.

console.log(processTask(TaskStatus.Pending, 42));
// 에러: 입력값은 문자열이어야 합니다.
