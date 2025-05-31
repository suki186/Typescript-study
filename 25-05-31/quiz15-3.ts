// 문제 3. API 요청에서 들어오는 데이터의 형식에 따라 처리 로직이 달라집니다. 요청 타입에 따라 처리할 수 있는 데이터의 타입을 결정하세요.
/*
1. 요구사항:
- 요청 타입: "text", "json", "binary".
- 각 요청 타입에 따른 데이터 형식:
    "text" → string.
    "json" → Record<string, any> (객체).
    "binary" → Uint8Array (바이너리 데이터).
- 타입 이름: RequestData<T>.
- 요청 타입 T에 따라 위 데이터 형식을 반환.

2. 함수 작성:
- 함수 이름: processRequest.
- 입력: 요청 타입(T)과 데이터(RequestData<T>).
- 출력: 데이터 처리 결과 (단순히 "Processed: [data]" 형태로 반환).
*/

type RequestData<T> = T extends "text"
  ? string
  : T extends "json"
  ? Record<string, any>
  : T extends "binary"
  ? Uint8Array
  : unknown;

function processRequest<T extends "text" | "json" | "binary">(
  type: T,
  data: RequestData<T>
): string {
  switch (type) {
    case "text":
      return `Processed: ${data}`;
    case "json":
      return `Processed: ${JSON.stringify(data)}`;
    case "binary":
      return `Processed: ${(data as Uint8Array).toString()}`; // data.join(",")도 가능
    default:
      throw new Error("오류 발생");
  }
}

// 테스트 코드
console.log(processRequest("text", "Hello")); // "Processed: Hello"
console.log(processRequest("json", { key: "value" })); // "Processed: [object Object]"
console.log(processRequest("binary", new Uint8Array([72, 101, 108, 108, 111]))); // "Processed: 72,101,108,108,111"
