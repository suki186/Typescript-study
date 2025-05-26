// 문제5. 아래와 같은 데이터 구조를 사용하여 특정 카테고리에 해당하는 상품의 이름을 출력하는 함수를 작성하세요.

// proudcts 타입정의  필요
const products: { name: string; price: number; category?: string }[] = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Shoes", price: 50, category: "Fashion" },
  { name: "Book", price: 20 },
];

//매개변수, 리턴 타입 정의 필요
function getProductsByCategory(category: string): string[] {
  return products.filter((p) => p.category === category).map((p) => p.name);

  // 답안
  //   return products.reduce((result: string[], product) => {
  //     if (product.category === category) {
  //       result.push(product.name);
  //     }
  //     return result;
  //   }, []);
}

// 테스트 코드
console.log(getProductsByCategory("Electronics")); // ["Laptop"]
console.log(getProductsByCategory("Fashion")); // ["Shoes"]
console.log(getProductsByCategory("Books")); // []
