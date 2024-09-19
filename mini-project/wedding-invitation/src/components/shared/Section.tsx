import classNames from 'classnames/bind';
import styles from './Section.module.scss';

const cx = classNames.bind(styles);

export default function Section({ children }: { children: React.ReactNode}) {
  return (
    <section className={cx('container')}>
      {children}
    </section>
  );
}