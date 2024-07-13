import React from 'react';
import { Autoplay, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';

const Slider = () => {

    const images = [
        {
            src: 'https://drive.google.com/file/d/1Za6r-5-az0hv6AXI3No3kEB9Z4-ypIBA/view?usp=drive_link',
            caption: 'Certificate of completion of phase-1 internship at Afronex tech hub'
        },
        {
            src: 'https://drive.google.com/file/d/1aeQrPr6BBJjT1c-hR5epSZ43kjCtn6av/view?usp=drive_link',
            caption: 'Certificate of completion of IIE (Soft skill)'
        },
        {
            src: 'https://drive.google.com/file/d/1K7DQJMi4gn5MuCOie0bxAr3OzjxXFWzO/view?usp=drive_link',
            caption: 'Udemy online course certification for building movie android app'
        },
        {
            src: 'https://drive.google.com/file/d/1mppQH4h8BCE5XDdPoV1TtwLRICSH6cLd/view?usp=drive_link',
            caption: 'Certificate of seven weeks intership program at seven tech'
        },
        {
            src: 'https://drive.google.com/file/d/1Vd7kDjzwTY5G042mArvj1Cnl9ru5ckfp/view?usp=drive_link',
            caption: 'Certificate of learning online course of flutter and dart'
        }
    ];

    return (
        <section className='bg-white mt-10 mx-4 sm:mx-8 md:mx-20 lg:mx-36 z-10'>
            {/* <div className='text-center font-extrabold text-2xl my-8'>Your own Slider</div> */}
            <Swiper
                modules={[Autoplay, A11y]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <a href='/#'>
                            <img
                                src={image.src}
                                alt={`slide-${index + 1}`}
                                className='w-fit h-[500px] mx-auto select-none'
                            />
                            <div className='text-center mt-4 font-bold text-lg'>{image.caption}</div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Slider;