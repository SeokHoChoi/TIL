import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './swiper.css';
import classNames from 'classnames/bind';
import styles from './ImageViewer.module.scss';

const cx = classNames.bind(styles);

export default function ImageViewer({
  images,
  open = false,
  selectedIdx,
  onClose,
}: {
  images: string[];
  open: boolean;
  selectedIdx: number;
  onClose: () => void;
}) {
  if (!open) {
    return null;
  }

  return (
    <div className={cx('dimmed')}>
      <CloseButton onClose={onClose} className={cx('icon-close')} />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        initialSlide={selectedIdx}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={src} alt="IMAGE" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function CloseButton({
  onClose,
  className,
}: {
  onClose: () => void;
  className: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClose}
    >
      <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z" />
    </svg>
  );
}
