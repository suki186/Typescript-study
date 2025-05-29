// 문제4. 객체의 모든 속성에 대해 기본값을 추가하는 타입을 작성하세요.
/*
1. 유틸리티 타입 정의:
- 타입 이름: WithDefault<T>
- 입력: 객체 타입 T
- 출력: 모든 속성 값의 타입이 [originalType, defaultType]의 튜플로 변경된 타입.

2. 테스트:
- WithDefault<T>를 활용하여 객체 타입을 변환하고, 변환된 타입의 객체를 작성하세요.
*/

// Mapped Type 정의
type WithDefault<T> = {
  [K in keyof T]: [T[K], T[K]];
};

// 테스트 코드
type Original = { id: number; name: string; isActive: boolean };
type WithDefaults = WithDefault<Original>;

// 기대 결과:
// type WithDefaults = {
//   id: [number, number];
//   name: [string, string];
//   isActive: [boolean, boolean];
// }
