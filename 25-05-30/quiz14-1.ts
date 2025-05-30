// 문제 1. 전자상거래 플랫폼에서 지역 코드에 따른 배송비를 계산하는 로직을 작성하세요.
/*
1. 요구사항: 각 지역에 대한 고유 코드와 배송비가 주어집니다:
type RegionCode = "US" | "EU" | "ASIA" | "AFRICA";
지역 코드와 배송비를 매핑하는 데이터 구조를 Record 타입으로 정의하세요.

2. 함수 작성:
- 함수 이름: calculateShippingCost.
- 입력: 지역 코드(RegionCode)와 배송비 매핑 객체(Record<RegionCode, number>).
- 출력: 해당 지역의 배송비.
- 추가 요구사항:
지원되지 않는 지역 코드가 입력되면 에러를 발생시킵니다.
*/

// 지역 코드 타입 정의
type RegionCode = "US" | "EU" | "ASIA" | "AFRICA";

// 배송비 데이터 정의
const shippingCosts: Record<RegionCode, number> = {
  US: 10,
  EU: 15,
  ASIA: 20,
  AFRICA: 25,
};

// 배송비 계산 함수 작성
function calculateShippingCost(
  region: RegionCode,
  costs: Record<RegionCode, number> // 객체
): number {
  if (!(region in costs)) {
    throw new Error("에러 발생");
  }

  return costs[region];
}

// 테스트 코드
console.log(calculateShippingCost("US", shippingCosts)); // 10
console.log(calculateShippingCost("EU", shippingCosts)); // 15
console.log(calculateShippingCost("ASIA", shippingCosts)); // 20
console.log(calculateShippingCost("AFRICA", shippingCosts)); // 25
// console.log(calculateShippingCost("AUSTRALIA", shippingCosts)); // 에러 발생
