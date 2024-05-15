export function solution(brown, yellow) {
  let width = 0;

  for (let i = 1; i <= brown; i++) {
    const borderLength = i * 2;
    const innerLength = 2 * (yellow / (i - 2));
    const totalLength = borderLength + innerLength;
    if (totalLength === brown) {
      width = i;
    }
  }
  const height = (brown + 4) / 2 - width;

  return [width, height];
}

/*
  - 풀이 흐름 -
  풀이를 생각해 나가는 습관이나 허점에 대한 검토를 위해, 
  A4에 펜으로 적은 추론 내용을 수정없이 그대로 옮겼습니다.

  24 24 => 8(2, 2, 2, 2)? 6(2, 3)?  48
  --------
  ------
  ------
  ------
  ------
  -------- yellow / (x - 2) = yellow의세로길이 = y
  2 24 24
  2 12 12
  2  6  6
  3  3  3
    1  1
  x (가로)
  y (내부의 세로)
  x*2 + y*2 = sum
  brown = x*2 + y*2 
  yellow = z*y
  yellow = (x - 2)*y

  brwon + yellow = x*2 + y*2 + (x - 2)*y = width * length
  = 2x + 2y +xy - 2y = 2x + xy = [x, y + 2] = [x, brwon/x + yellow/x]
  = [x, yellow / (x - 2) + 2] = [x, yellow/x - 2yellow + 2]

  brwon/x + yellow/x - 2=  y

  10, 2 => 4? 3  12
  ----
  --
  ----
  2 10 2
    5 1

  8, 1 => 3? 3?  9
  ---
  -
  ---
  8 1
*/
