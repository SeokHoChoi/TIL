/**
 * Todo 요소를 생성하는 함수입니다.
 *
 * @param {Object} todo - Todo 객체입니다.
 * @param {string} todo.text - 할 일의 내용입니다.
 * @param {boolean} todo.completed - 할 일의 완료 상태입니다.
 * @returns {string} Todo 요소를 나타내는 HTML 문자열을 반환합니다.
 */
const getTodoElement = (todo) => {
  const { text, completed } = todo;

  return `
    <li ${completed ? 'class="completed"' : ''}>
      <div class="view">
        <input 
          ${completed ? 'checked' : ''}
          class="toggle" 
          type="checkbox">
        <label>${text}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="${text}">
    </li>`;
};

/**
 * Todo 리스트의 완료되지 않은 항목 수를 반환하는 함수입니다.
 *
 * @param {Array} todos
 * @returns {string} 완료되지 않은 항목 수를 나타내는 문자열을 반환합니다.
 */
const getTodoCount = (todos) => {
  const notCompleted = todos.filter((todo) => !todo.completed);

  const { length } = notCompleted;
  if (length === 1) {
    return '1 Item left';
  }

  return `${length} Items left`;
};

/**
 * Todo 리스트를 생성하는 함수입니다.
 *
 * @param {HTMLElement} targetElement - 대상 DOM 요소입니다.
 * @param {Object} state - 현재 상태입니다.
 * @param {string} state.currentFilter - 현재 필터입니다.
 * @param {Array} state.todos - Todo 배열입니다.
 * @return {HTMLElement} 생성된 Todo 리스트를 나타내는 DOM 요소를 반환합니다.
 */
export default (targetElement, state) => {
  const { currentFilter, todos } = state;

  // targetElement라는 DOM 요소를 복제하는 작업을 수행합니다.
  // cloneNode() 메소드는 Node 인터페이스의 메소드로, 이를 호출하는 노드의 복제본을 생성합니다.
  // 이 메소드는 두 개의 매개변수를 받을 수 있습니다.
  // 이 메소드는 deep 이라는 매개변수를 받을 수 있고 이 매개변수는 선택적인 매개변수로,
  // 이 값이 true일 경우 해당 노드와 그 하위 노드들을 모두 복제합니다.
  // false일 경우 해당 노드만 복제합니다.
  // 따라서 현재는 targetElement와 그 하위 노드들을 모두 복제하여 새로운 DOM 요소를 생성합니다.
  // 이렇게 생성된 복제본은 원본 DOM 요소와는 별개의 새로운 객체입니다.
  // 복제본을 수정해도 원본 DOM 요소는 그대로 유지되니 자바스크립트 딥카피를 생각해주세요!
  const element = targetElement.cloneNode(true);

  const list = element.querySelector('.todo-list');
  const counter = element.querySelector('.todo-count');
  const filters = element.querySelector('.filters');

  list.innerHTML = todos.map(getTodoElement).join('');
  counter.textContent = getTodoCount(todos);

  // Array.from(): 해당 메소드는 배열과 같은 길이 속성을 가진 모든 객체에서 동작합니다.
  // 즉, 배열 또는 배열처럼 동작하는 객체로부터 새로운 배열 인스턴스를 생성합니다.
  Array.from(filters.querySelectorAll('li a')).forEach((a) => {
    if (a.textContent === currentFilter) {
      a.classList.add('selected');
    } else {
      a.classList.remove('selected');
    }
  });

  return element;
};
