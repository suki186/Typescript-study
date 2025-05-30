// 문제 2. 학생들의 점수를 기록하고 평균 점수를 계산하는 문제입니다.
/*
1. 요구사항:
- 학생 이름(string)과 점수(number)를 매핑하는 데이터를 Record 타입으로 정의하세요.
- 평균 점수를 계산하는 함수를 작성하세요.

2. 함수 작성:
- 함수 이름: calculateAverageScore.
- 입력: 학생 점수 데이터(Record<string, number>).
- 출력: 모든 학생의 평균 점수(number).
*/

// 학생 점수 데이터 정의
const scores: Record<string, number> = {
  Alice: 85,
  Bob: 92,
  Charlie: 78,
};

// 평균 점수 계산 함수 작성
function calculateAverageScore(scores: Record<string, number>): number {
  let sum = 0;
  let count = 0;

  for (const s in scores) {
    sum += scores[s];
    count++;
  }

  return count === 0 ? 0 : sum / count;

  // 답지: Object.values --> 값만 추출, reduce --> 총합 계산
  // const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
  // return total / Object.keys(scores).length;
}

// 테스트 코드
console.log(calculateAverageScore(scores)); // 85
