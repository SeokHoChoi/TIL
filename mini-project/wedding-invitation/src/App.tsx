import Test from './components/Test';

import classNames from 'classnames/bind';
import styles from './App.module.scss';
const cx = classNames.bind(styles);

function App() {
  return (
    <div className={cx('container')}>
      <Test />
    </div>
  );
}

export default App;
