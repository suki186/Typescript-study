// 문제2. 아래의 조건에 따라 복합 데이터를 처리하는 타입을 정의하고, 관련된 함수를 작성하세요.
/*
1. ContactInfo 타입:
phone: 문자열
address: 문자열

2. OrderInfo 타입:
orderId: 숫자
items: 문자열 배열

3. ContactInfo & OrderInfo 타입을 기반으로, 주문 요약 정보를 출력하는 함수를 작성하세요:
함수 이름: printOrderSummary
입력: 교차 타입 객체
출력: 전화번호와 주문 아이디를 포함한 문자열
*/

// ContactInfo 타입 정의
type ContactInfo = {
  phone: string;
  address: string;
};

// OrderInfo 타입 정의
type OrderInfo = {
  orderId: number;
  items: string[];
};

function printOrderSummary(order: ContactInfo & OrderInfo): string {
  return `Order ${order.orderId} (Phone: ${order.phone})`;
}

// 테스트 코드
const orderDetails = {
  phone: "123-456-7890",
  address: "123 Main St",
  orderId: 2023,
  items: ["Laptop", "Mouse"],
};

console.log(printOrderSummary(orderDetails)); // "Order 2023 (Phone: 123-456-7890)"
