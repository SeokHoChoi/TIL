import classNames from 'classnames/bind';
import styles from './Heading.module.scss';
import Section from '@shared/Section';

const cx = classNames.bind(styles);

export default function Video() {
  return (
    <Section>
      <h1>Video Component</h1>
    </Section>
  );
}