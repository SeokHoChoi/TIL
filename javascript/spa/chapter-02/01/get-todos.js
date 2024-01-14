// 외부 라이브러리인데 어떻게 window 객체에서 뽑아오는거죠?
/**
 * Faker.js가 window 객체에 포함되어 있어서 window 객체에서 직접 faker에 접근하여 사용하는 것입니다.
 * 이렇게 전역 객체에 라이브러리를 할당하는 경우, 해당 라이브러리의 기능을 다른 부분에서도 쉽게 사용할 수 있습니다.
 * 그래서 이 코드는 브라우저의 전역 스코프에서 window 객체에 포함된 faker 를 상수로 가져와서 사용하는 방식으로,
 * 다른 부분에서도 쉽게 가짜 데이터를 생성할 수 있도록 하는 것입니다.
 */
const faker = window.faker;

/**
 * @returns {object} 무작위로 생성된 두 개의 단어로 이루어진 텍스트와 임의의 불리언 값을 갖는 객체를 반환합니다.
 * @description
 * 'Grass-roots Unbranded Soft Car'와 같은 문자열을 반환하는 이유는,
 * 이 문자열이 리스트에서 선택된 두개의 단어로 이루어져 있기 때문입니다.
 */
const createElement = () => ({
  text: faker.random.words(2),
  completed: faker.random.boolean(),
});

/**
 * 주어진 요소 생성 함수인 elementFactory를 특정 횟수만큼 반복합니다.
 *
 * @param {Function} elementFactory - 반복해서 실행될 요소 생성 함수입니다.
 * @param {number} number - 함수가 반복되어야 하는 횟수입니다.
 * @returns {Array} 요소 생성 함수의 반복 실행에 의해 생성된 요소들로 구성된 배열을 반환합니다.
 */
const repeat = (elementFactory, number) => {
  const array = [];
  for (let index = 0; index < number; index++) {
    array.push(elementFactory());
  }

  return array;
};

/**
 * 무작위 숫자를 생성하고, 이를 이용하여 특정 요소를 반복 생성합니다.
 *
 * @return {Array} 무작위 숫자에 따라 반복 생성된 요소들로 구성된 배열을 반환합니다.
 */
export default () => {
  const howMany = faker.random.number(10);

  return repeat(createElement, howMany);
};
