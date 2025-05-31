// 문제 1. 함수의 반환 타입만 추출하는 유틸리티 타입을 작성하세요.
/*
요구사항:
- 타입 이름: ExtractReturnType<F>.
- 입력: 함수 타입 F.
- 출력: 함수의 반환 타입.
*/

// F가 (...args: any[]) => something 형태의 함수 타입이면, 그 함수의 반환 타입을 R로 추론
// F: 내가 넘기는 함수 타입, extends: 함수형태를 만족하는지 조건부 타입
// (...args: any[]): 매개변수 목록
// any[]: 인자의 수와 타입은 신경 안 쓰겠다
// => inter R: 반환 타입을 R로 추론
type ExtractReturnType<F> = F extends (...args: any[]) => infer R ? R : never;

// 테스트 코드
type Test1 = ExtractReturnType<() => string>; // 기대 결과: string
type Test2 = ExtractReturnType<(x: number) => boolean>; // 기대 결과: boolean
type Test3 = ExtractReturnType<(x: number, y: string) => { id: number }>; // 기대 결과: { id: number }
