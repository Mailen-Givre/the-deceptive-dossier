

import { Gallery, Image } from "react-grid-gallery";
import 'swiper/css';
import styles from './index.module.scss';

export const GalleryPhotos = (): JSX.Element => {

    const images: Image[] = [
        {
            src: "/gallery/cat1.jpeg",
            width: 300,
            height: 174,

        },
        {
            src: "/gallery/cat2.avif",
            width: 320,
            height: 212,
        },
        {
            src: "/gallery/hibiscus.webp",
            width: 320,
            height: 174,
        },
        {
            src: "/gallery/cat3.webp",
            width: 320,
            height: 212,
        },
        {
            src: "/gallery/cat4.jpeg",
            width: 320,
            height: 212,
        },
        {
            src: "/gallery/cat5.jpeg",
            width: 320,
            height: 212,
        },
        {
            src: "/gallery/the-dead.png",
            width: 320,
            height: 400,
        },
        {
            src: "/gallery/cat6.jpeg",
            width: 320,
            height: 212,
        }
    ];

    return (
        <div className={styles.galleryContainer}>
            <Gallery enableImageSelection={false} images={images} />
        </div>
    );
};
