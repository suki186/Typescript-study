// 문제1. 상품(Product)과 할인(Discount) 정보를 병합하여 새로운 타입을 정의하고, 할인 적용 후의 가격을 계산하는 함수를 작성하세요.
/*
1. Product 타입: id 숫자, name 문자열, price 숫자
2. Discount 타입: discountPercentage 숫자
*/

// Product 타입 정의
type Product = {
  id: number;
  name: string;
  price: number;
};

// Discount 타입 정의
type Discount = {
  discountPercentage: number;
};

// 할인된 가격 반환
function calculateDiscountedPrice(item: Product & Discount): number {
  return item.price - (item.price * item.discountPercentage) / 100;
}

// 테스트 코드
const discountedProduct = {
  id: 101,
  name: "Laptop",
  price: 1000,
  discountPercentage: 20,
};

console.log(calculateDiscountedPrice(discountedProduct)); // 800
