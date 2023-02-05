import React from 'react';
import { FaLink, FaCodeBranch, } from 'react-icons/fa';
import { BsDisplay } from 'react-icons/bs';
import SingelPortfolioCard from './SingelPortfolioCard/SingelPortfolioCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';


const Portfolio = () => {
    return (
        <div className='my-24'>
            <div className='md:flex justify-between items-center'>
                <div >
                    <div className='flex items-center text-xl w-[150px] rounded p-2 font-bold text-second bg-sec-bg'>
                        <FaLink></FaLink>
                        <h2 className='px-2'> Portfolio</h2>
                    </div>
                    <div>
                        <h1 className='text-5xl font-bold py-4'>Highlights Projects</h1>
                    </div>
                </div>
                <div className='md:flex text-second'>
                    <div className='flex items-center p-4 border-4 border-sec-bg  rounded-xl mx-2'>
                        <BsDisplay></BsDisplay>
                        <h4 className='px-2'> Front-End</h4>
                    </div>
                    <div className='flex items-center p-4 border-4 border-sec-bg  rounded-xl mx-2'>
                        <FaCodeBranch></FaCodeBranch>
                        <h4 className='px-2'> Backend</h4>
                    </div>
                    <div className='flex items-center p-4 border-4 border-sec-bg  rounded-xl mx-2'>
                        <FaCodeBranch></FaCodeBranch>
                        <h4 className='px-2'> Full Stack</h4>
                    </div>
                </div>
            </div>
            <div className='my-16 mx-auto md:grid  grid-cols-1 hidden md:block md:grid-cols-4 gap-4'>
                <SingelPortfolioCard></SingelPortfolioCard>
                <SingelPortfolioCard></SingelPortfolioCard>
                <SingelPortfolioCard></SingelPortfolioCard>
                <SingelPortfolioCard></SingelPortfolioCard>
                <SingelPortfolioCard></SingelPortfolioCard>
                <SingelPortfolioCard></SingelPortfolioCard>
            </div>
            <div className='md:hidden my-10'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide> <SingelPortfolioCard></SingelPortfolioCard></SwiperSlide>
                    <SwiperSlide> <SingelPortfolioCard></SingelPortfolioCard></SwiperSlide>
                    <SwiperSlide> <SingelPortfolioCard></SingelPortfolioCard></SwiperSlide>
                    <SwiperSlide> <SingelPortfolioCard></SingelPortfolioCard></SwiperSlide>
                    <SwiperSlide> <SingelPortfolioCard></SingelPortfolioCard></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Portfolio;