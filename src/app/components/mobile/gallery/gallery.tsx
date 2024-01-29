
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const GalleryPhotos = () => {

    const photos = [
        '/gallery/cat1.jpeg',
        '/gallery/cat2.avif',
        '/gallery/cat3.webp',
        '/gallery/hibiscus.webp',
        '/gallery/cat4.jpeg',
        '/gallery/cat5.jpeg',
        '/gallery/the-dead.png',
        '/gallery/cat6.jpeg',
    ];

    return (
        <div style={{ width: '50rem', margin: '25% 0' }}>
            <Swiper
                direction="horizontal"
                spaceBetween={5}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}

            >
                {
                    photos.map((photo, index) => (
                        <SwiperSlide key={index}>
                            <img src={photo} alt="" style={{ width: '100%', height: '100%', cursor: 'pointer' }} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};
