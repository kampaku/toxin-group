import { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

import styles from './RoomGallery.module.scss';

type Prop = {
  roomId: number;
  imgSrc: string[]
};

const RoomGallery: FC<Prop> = ({ roomId = 1, imgSrc }) => {
  return (
    <div data-testid="RoomGallery-wrapper" className={styles.roomGallery}>
      <Carousel
        className={styles.roomGallery__carousel}
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        dynamicHeight
      >
        <Image
          src={imgSrc[0]}
          alt="bedroom"
          className={styles.roomGallery__carouselPhoto}
          height={243}
          width={461}
          layout="responsive"
        />
        <Image
          src={imgSrc[1]}
          alt="living room"
          className={styles.roomGallery__carouselPhoto}
          height={243}
          width={461}
          layout="responsive"
        />
        <Image
          src={imgSrc[2]}
          alt="main hall"
          className={styles.roomGallery__carouselPhoto}
          height={243}
          width={461}
          layout="responsive"
        />
      </Carousel>
      <div
        data-testid="RoomGallery-photos"
        className={styles.roomGallery__photos}
      >
        <div
          data-testid="RoomGallery-bigPhoto"
          className={styles.roomGallery__bigPhoto}
        >
          <Image
            className={styles.roomGallery__mainPhoto}
            src={imgSrc[0]}
            alt="bedroom"
            layout="fill"
            priority
          />
        </div>
        <div
          data-testid="RoomGallery-smallPhotos"
          className={styles.roomGallery__smallPhotos}
        >
          <div className={styles.roomGallery__smallPhotosItem}>
            <Image
              className={styles.roomGallery__topPhoto}
              src={imgSrc[1]}
              alt="living room"
              layout="fill"
              priority
            />
          </div>
          <div className={styles.roomGallery__smallPhotosItem}>
            <Image
              className={styles.roomGallery__bottomPhoto}
              src={imgSrc[2]}
              alt="main hall"
              layout="fill"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { RoomGallery };
