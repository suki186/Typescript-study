// 문제 2. 아래와 같은 구조를 나타내는 타입을 정의하고, 해당 타입을 기반으로 객체를 작성하세요.
// id: 숫자 name: 문자열 address: 객체 ({city: 문자열,zipCode: 숫자})

// User 타입을 작성하세요.
type TUser = {
  id: number;
  name: string;
  address: {
    city: string;
    zipCode: number;
  };
};

// User 타입을 사용하여 아래 객체를 작성하세요.
const user: TUser = {
  id: 1,
  name: "Alice",
  address: {
    city: "Seoul",
    zipCode: 12345,
  },
};
