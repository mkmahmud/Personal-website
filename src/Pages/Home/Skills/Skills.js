import React from 'react';
import { FaLink, FaCodeBranch, FaLaptop, FaReact, } from 'react-icons/fa';
import { BsDisplay } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import SingelSkills from './SingelSkills/SingelSkills';
import skillsIcon from '../../../Assets/icons/skills.png'


const Skills = () => {
    return (
        <div className='my-24'>
            <div className='md:flex justify-between items-center'>
                <div >
                    <div className='flex items-center text-xl w-[150px] rounded p-2 font-bold text-second bg-sec-bg'>
                        <FaLaptop></FaLaptop>
                        <h2 className='px-2 '> Skills</h2>
                    </div>
                    <div>
                        <h1 className='text-5xl font-bold py-4'>Technologies Expertise</h1>
                    </div>
                </div>
            </div>
            <div className='hidden md:block'>
                <div className='my-16 mx-auto text-center'>

                    <h2 className='text-sec-text my-2'>Main Expertise</h2>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={8}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>  <SingelSkills content={<FaReact className='text-5xl text-second my-2 mx-auto'></FaReact>}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<FaReact className='text-5xl text-second my-2 mx-auto'></FaReact>}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<FaReact className='text-5xl text-second my-2 mx-auto'></FaReact>}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<FaReact className='text-5xl text-second my-2 mx-auto'></FaReact>}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<FaReact className='text-5xl text-second my-2 mx-auto'></FaReact>}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<FaReact className='text-5xl text-second my-2 mx-auto'></FaReact>}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<FaReact className='text-5xl text-second my-2 mx-auto'></FaReact>}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<FaReact className='text-5xl text-second my-2 mx-auto'></FaReact>}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<FaReact className='text-5xl text-second my-2 mx-auto'></FaReact>}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<FaReact className='text-5xl text-second my-2 mx-auto'></FaReact>}></SingelSkills></SwiperSlide>
                    </Swiper>

                </div>
                <div className='my-16 mx-auto text-center'>

                    <h2 className='text-sec-text my-2'>Main Expertise</h2>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={8}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>  <SingelSkills content={<FaReact className='text-5xl text-second my-2 mx-auto'></FaReact>}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<FaReact className='text-5xl text-second my-2 mx-auto'></FaReact>}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<FaReact className='text-5xl text-second my-2 mx-auto'></FaReact>}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<FaReact className='text-5xl text-second my-2 mx-auto'></FaReact>}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<FaReact className='text-5xl text-second my-2 mx-auto'></FaReact>}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<FaReact className='text-5xl text-second my-2 mx-auto'></FaReact>}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<FaReact className='text-5xl text-second my-2 mx-auto'></FaReact>}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<FaReact className='text-5xl text-second my-2 mx-auto'></FaReact>}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<FaReact className='text-5xl text-second my-2 mx-auto'></FaReact>}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<FaReact className='text-5xl text-second my-2 mx-auto'></FaReact>}></SingelSkills></SwiperSlide>
                    </Swiper>

                </div>
            </div>
            <div className='md:hidden my-10'>
                <div>
                    <h2 className='text-sec-text my-2'>Main Expertise</h2>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={4}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>  <SingelSkills content={<FaReact className='text-5xl text-second my-2 mx-auto'></FaReact>}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<FaReact className='text-5xl text-second my-2 mx-auto'></FaReact>}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<FaReact className='text-5xl text-second my-2 mx-auto'></FaReact>}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<FaReact className='text-5xl text-second my-2 mx-auto'></FaReact>}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<FaReact className='text-5xl text-second my-2 mx-auto'></FaReact>}></SingelSkills></SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </div>
    );
};

export default Skills;