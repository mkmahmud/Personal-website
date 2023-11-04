import React from 'react';
import { FaLaptop, FaReact, } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import SingelSkills from './SingelSkills/SingelSkills';



import html from '../../../Assets/skills/html.png';
import css from '../../../Assets/skills/css-3.png';
import js from '../../../Assets/skills/js.png';
import react from '../../../Assets/skills/react.png';
import ajax from '../../../Assets/skills/ajax.webp';
import azure from '../../../Assets/skills/azure.png';
import aws from '../../../Assets/skills/aws.png';
import firebase from '../../../Assets/skills/firebase.png';
import gcp from '../../../Assets/skills/gcp.png';
import jquery from '../../../Assets/skills/jquery.webp';
import node from '../../../Assets/skills/node-js.png';
import typescript from '../../../Assets/skills/typescript.png';
import mongoDB from '../../../Assets/skills/mongo.png';
import postgress from '../../../Assets/skills/post.png';
import restApi from '../../../Assets/skills/rest api.png';
import angular from '../../../Assets/skills/angular.png';
import vue from '../../../Assets/skills/vue.png';
import linux from '../../../Assets/skills/linux.png';
import dotnet from '../../../Assets/skills/dotnet.png';
import csharp from '../../../Assets/skills/csharp.png';
import asp from '../../../Assets/skills/aspmvc.png';
import blozor from '../../../Assets/skills/Blazor.png';



const Skills = () => {
    return (
        <div className='my-24 pt-32' id='Skills'>
            <div className='md:flex justify-center items-center'>
                <div >
                    <div className='flex mx-auto  items-center text-xl w-[150px] rounded p-2 font-bold text-second bg-sec-bg'>
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
                        onSlideChange={() => {}}
                        onSwiper={(swiper) => {}}
                        pagination={{ clickable: true }}
                    >


                        <SwiperSlide>  <SingelSkills content={<img src={vue} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={csharp} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={angular} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={dotnet} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={asp} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={blozor} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={mongoDB} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={linux} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>



                    </Swiper>

                </div>
                <div className='my-16 mx-auto text-center'>

                    <h2 className='text-sec-text my-2'>Proficient Expertise</h2>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={10}
                        slidesPerView={8}
                        onSlideChange={() => {}}
                        onSwiper={(swiper) => {}}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        loop={true}

                    >
                        <SwiperSlide>  <SingelSkills content={<img src={postgress} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={aws} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={react} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={js} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={node} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={azure} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={firebase} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>

                        <SwiperSlide>  <SingelSkills content={<img src={html} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={css} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={typescript} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={gcp} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={jquery} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={restApi} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={ajax} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>





                    </Swiper>

                </div>
            </div>
            <div className='md:hidden my-10'>
                <div>
                    <h2 className='text-sec-text my-2'>Main Expertise</h2>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={6}
                        slidesPerView={4}
                        onSlideChange={() => {}}
                        onSwiper={(swiper) => {}}
                    >

                        <SwiperSlide>  <SingelSkills content={<img src={angular} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={dotnet} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={asp} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={blozor} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>


                    </Swiper>
                </div>

                <div className='my-16 mx-auto text-center'>

                    <h2 className='text-sec-text text-left my-2'>Proficient Expertise</h2>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={10}
                        slidesPerView={4}
                        onSlideChange={() => {}}
                        onSwiper={(swiper) => {}}
                        autoplay={{
                            delay: 500,
                            disableOnInteraction: false,
                        }}
                        loop={true}

                    >
                        <SwiperSlide>  <SingelSkills content={<img src={postgress} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={aws} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={react} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={js} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={node} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={azure} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={firebase} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>

                        <SwiperSlide>  <SingelSkills content={<img src={html} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={css} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={typescript} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={gcp} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={jquery} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={restApi} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>
                        <SwiperSlide>  <SingelSkills content={<img src={ajax} alt="" className='h-full w-full' />}></SingelSkills></SwiperSlide>





                    </Swiper>

                </div>

            </div>
        </div>
    );
};

export default Skills;