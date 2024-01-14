import getTodos from './get-todos.js';
import view from './view.js';

// currentFilter는 'All', 'Active', 'Completed' 값을 가질 수 있씁니다.
// currentFilter는 Todo 리스트를 필터링하는 데 사용되는 변수입니다.
// currentFilter값은 현재 선택된 필터를 나타냅니다.
// 'All' 이라는 값은 모든 Todo 항목을 보여주는 필터를 나타냅니다. 이는 사용자가 Todo 리스트에서 특정 필터를 선택하지
//  않았을 때의 기본 상태를 나타냅니다.
const state = {
  todos: getTodos(),
  currentFilter: 'All',
};

const main = document.querySelector('.todoapp');

window.requestAnimationFrame(() => {
  const newMain = view(main, state);
  main.replaceWith(newMain);
});
