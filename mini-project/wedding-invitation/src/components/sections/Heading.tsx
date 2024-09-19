import classNames from 'classnames/bind';
import styles from './Heading.module.scss';
import Section from '@shared/Section';

const cx = classNames.bind(styles);

export default function Heading() {
  return (
    <Section>
      <div className={cx('txt-date')}>24.09.19</div>
      <div className={cx('txt-day')}>THURSDAY</div>
    </Section>
  );
}
