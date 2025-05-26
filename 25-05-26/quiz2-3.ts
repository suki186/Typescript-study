// 문제3. 주어진 문제 1,2 번을 푸시오
// 1. 상품 이름과 가격만을 포함하는 새로운 배열을 생성하는 함수를 작성하세요.
// 2. 재고가 있는 상품만 포함하는 배열을 반환하는 함수를 작성하세요.

const products1: [string, number, boolean][] = [
  ["Laptop", 1000, true],
  ["Shoes", 50, false],
  ["Book", 20, true],
];

// 1. 상품 이름과 가격만 반환, 리턴타입 정의필요
function getProductNamesAndPrices(
  products: [string, number, boolean][]
): [string, number][] {
  return products.map(([name, price]) => [name, price]);
}

// 2. 재고가 있는 상품만 반환, 리턴타입 정의필요 (isAvilable가 true)
function getAvailableProducts(
  products: [string, number, boolean][]
): [string, number, boolean][] {
  return products.filter(([name, price, isAvailable]) => isAvailable);
}

// 테스트 코드
console.log(getProductNamesAndPrices(products1));
// 기대 출력: [["Laptop", 1000], ["Shoes", 50], ["Book", 20]]

console.log(getAvailableProducts(products1));
// 기대 출력: [["Laptop", 1000, true], ["Book", 20, true]]
