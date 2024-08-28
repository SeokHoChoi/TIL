import getTodos from './get-todos.js';
import view from './view.js';

/**
 * 애플리케이션의 상태를 나타내는 객체입니다.
 * 이 객체는 Todo 리스트와 현재 선택된 필터를 포함합니다.
 *
 * @property {Array} todos - Todo 항목들의 배열입니다.
 * @property {string} currentFilter는 - 현재 선택된 필터입니다. 가능한 값은 'All', 'Active', 'Completed' 입니다.
 * @description
 * 'All' 이라는 값은 모든 Todo 항목을 보여주는 필터를 나타냅니다. 이는 사용자가 Todo 리스트에서 특정 필터를 선택하지
 * 않았을 때의 기본 상태를 나타냅니다.
 */
const state = {
  todos: getTodos(),
  currentFilter: 'All',
};

const main = document.querySelector('.todoapp');

/**
 * 해당 코드는 requestAnimationFrame 함수를 사용하여 애니메이션 프레임에 코드를 실행하며,
 * view 함수를 사용하여 새로운 DOM 요소를 생성하고, 이를 기존의 DOM 요소와 교체합니다.
 *
 * @description
 * window.requestAnimationFrame() 메소드는 브라우저에게 애니메이션을 수행하고자 하는 의사를 전달합니다.
 * requestAnimationFrame() 가 브라우저에게 다음 리페인트 전에 사용자가 제공한 콜백 함수를 호출하도록 요청하기에
 * 브라우저가 애니메이션을 최적화할 수 있으므로, 애니메이션이 부드럽게 표시됩니다.
 *
 * 리페인트는 화면에 변화를 반영하는 과정을 의미합니다.
 * 웹 페이지의 요소들은 이러한 리페인트를 통해 사용자에게 보여집니다.
 * requestAnimationFrame() 메소드는 이러한 리페인트 사이클과 동기화되어 작동합니다.
 * 이는 화면에 변화를 최대한 부드럽게 표시하기 위함입니다.
 *
 * 여기서 리페인트 사이클이 동기화된다는 것은 requestAnimationFrame()이 브라우저가 다음 리페인트를 준비하는동안
 * 콜백 함수를 실행하도록 요청한다는 것을 의미합니다.
 * 이렇게 하면 콜백 함수에서 변경된 내용이 다음 리페인트에 반영되어 화면에 표시됩니다.
 *
 * 또한, requestAnimationFrame()은 비활성 탭이나 숨겨진 iframe에서 실행될 때 대부분의 브라우저에서 일시 중지됩니다.
 * 이렇게 CPU 사용량을 줄이거나 하는 이런 행위가 성능을 향상시키고 배터리 수명을 연장하는 데 도움이 됩니다.
 * 이는 특히 모바일 기기에서 중요한 고려사항입니다.
 *
 * 그렇기에 효율적인 리소스를 사용 가능하며 애니메이션을 최적화 하여 CPU 사용량을 줄여줍니다.
 * 위에서 설명드린 리페인트 사이클과 동기화되어 작동할때 브라우저가 화면을 다시 그리는 동안에만
 * 애니메이션을 업데이트하도록 요청한다는 내용에서,
 * 화면 업데이트가 일어나지 않을때에는 CPU를 사용하지 않습니다.
 * 이러한 로직에 의해 화면이 업데이트되지 않는 경우에도 불필요한 CPU 사용량을 줄여주는 것입니다.
 * 그렇기에 복잡한 애니메이션이나 많은 애니메이션이 동시에 실행될 때 유용합니다.
 * 이러한 이유로 requestAnimationFrame() 을 사용했습니다.
 *
 * 따라서 window.requestAnimationFrame() 코드는 브라우저에게 애니메이션을 수행하고자 하는 의사를 전달하고,
 * 해당 코드를 실행하기 위해 브라우저가 다음 리페인트 전에 콜백 함수를 호출하도록 요청합니다.
 */
window.requestAnimationFrame(() => {
  const newMain = view(main, state);
  main.replaceWith(newMain);
});
