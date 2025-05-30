// 문제 3. 쇼핑몰에서 각 제품의 이름과 가격을 매핑하고, 특정 제품의 가격을 업데이트하는 기능을 구현하세요.
/*
1. 요구사항:
- 제품 이름(string)과 가격(number)을 매핑하는 데이터를 Record 타입으로 정의하세요.
- 특정 제품의 가격을 업데이트하는 함수를 작성하세요.

2. 함수 작성:
- 함수 이름: updateProductPrice.
- 입력: 제품 가격 데이터(Record<string, number>), 업데이트할 제품 이름과 새로운 가격.
- 출력: 업데이트된 제품 가격 데이터(Record<string, number>).
*/

// 제품 가격 데이터 정의
const prices: Record<string, number> = {
  Laptop: 1000,
  Phone: 500,
  Tablet: 300,
};

// 가격 업데이트 함수 작성
function updateProductPrice(
  prices: Record<string, number>,
  product: string,
  newPrice: number
): Record<string, number> {
  return { ...prices, [product]: newPrice }; // [product]: newPrice에 "" 없어도 됨.
}

// 테스트 코드
console.log(updateProductPrice(prices, "Phone", 550));
// 기대 출력: { Laptop: 1000, Phone: 550, Tablet: 300 }
