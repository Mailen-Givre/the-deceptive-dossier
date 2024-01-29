

import { Gallery, Image } from "react-grid-gallery";
import 'swiper/css';

export const GalleryPhotos = () => {

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
        <div style={{ width: '50rem', margin: '25% 0' }}>
            <Gallery images={images} />
        </div>
    );
};
