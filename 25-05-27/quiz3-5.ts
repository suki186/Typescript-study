// 문제 5.아래 조건을 만족하는 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하세요.
/*
1. 상품(Product)은 다음 속성을 가집니다:
- id: 숫자
- name: 문자열
- price: 숫자
2. 주문(Order)은 다음 속성을 가집니다:
- orderId: 숫자
- products: Product 타입 배열
- totalPrice: 숫자
*/

// Product 타입 작성
interface IProduct {
  id: number;
  name: string;
  price: number;
}

// Order 타입 작성
interface IOrder {
  orderId: number;
  products: IProduct[];
  totalPrice: number;
}

// Order 타입을 사용하여 아래 객체를 작성하세요.
const order: IOrder = {
  orderId: 101,
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Mouse", price: 50 },
  ],
  totalPrice: 1050,
};
