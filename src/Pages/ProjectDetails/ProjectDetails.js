import React from 'react';
import './ProjectDetails.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ScrollToTopOnMount } from '../../Helpers/ScrollToTop';
import KeywordButton from '../../Components/Buttons/KeywordButton';
import { useLoaderData } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';

import { Autoplay, Pagination, Navigation } from "swiper";



const ProjectDetails = () => {

    const data = useLoaderData();

    console.log(data)

    const { overview, thambnail, livesite, challanges, features, tags, images } = data;

    return (
        <div>
            <ScrollToTopOnMount></ScrollToTopOnMount>
            <div className='pt-24 border-l border-r border-[#29295c]'>
                <div className='projectDetailsBG h-[400px] md:h-[700px] w-full'>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            images && images.map(img => <SwiperSlide> <img src={img.img} alt="" className='my-2 h-[250px] md:h-[700px] w-full rounded-lg' /></SwiperSlide>)
                        }


                    </Swiper>
                </div>
                <div className='my-10 md:flex items-start border-t border-b border-[#29295c] p-2'>
                    <h2 className='w-full md:w-2/12 text-[30px] leading-[25px] font-bold'>Overview: </h2>
                    <p className='w-full md:w-10/12 px-2  text-[18px] my-4 md:my-0 border-l border-[#29295c]'>{overview}</p>
                </div>
                <div className='my-10 md:flex items-start border-t border-b border-[#29295c] p-2'>
                    <h2 className='w-full md:w-2/12 text-[30px] leading-[25px] font-bold'>Preview: </h2>
                    <p className='w-full md:w-10/12 px-2  text-[18px] my-4 md:my-2 border-l border-[#29295c]'><a className='bg-second p-2 rounded ' href={livesite} target='_blank'>Live Site</a></p>
                </div>
                <div className='my-10 md:flex items-start border-t border-b border-[#29295c] p-2'>
                    <h2 className='w-full md:w-2/12 text-[30px] leading-[25px] font-bold'>Team: </h2>
                    <p className='w-full md:w-10/12 px-2  text-[18px] my-4 md:my-0 border-l border-[#29295c]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis adipisci dolor doloremque eveniet quidem, </p>
                </div>
                <div className='my-10 md:flex items-start border-t border-b border-[#29295c] p-2'>
                    <h2 className='w-full md:w-2/12 text-[30px] leading-[25px] font-bold'>Challenges: </h2>
                    <ul className='w-full md:w-10/12 px-2  text-[18px] my-4 md:my-0 border-l border-[#29295c]'>

                        {
                            challanges && challanges.map(challange => <li className='my-2 flex items-start'> <span className='pr-2'> ‍💻 </span> <span>{challange?.text}</span></li>)
                        }

                    </ul>
                </div>
                <div className='my-10 md:flex items-start border-t border-b border-[#29295c] p-2'>
                    <h2 className='w-full md:w-2/12 text-[30px] leading-[25px] font-bold'>Features: </h2>
                    <ul className='w-full md:w-10/12 px-2  text-[18px] my-4 md:my-0 border-l border-[#29295c]'>
                        {
                            features && features.map(feature => <li className='my-2 flex items-start'> <span className='pr-2'> ‍💡 </span> <span>{feature?.text}</span></li>)
                        }
                    </ul>
                </div>
                <div className='my-10 md:flex items-start border-t border-b border-[#29295c] p-2'>
                    <h2 className='w-full md:w-2/12 text-[30px] leading-[25px] font-bold'>Technologies: </h2>
                    <div className='w-full md:w-10/12 px-2  text-[18px] my-4 md:my-0 border-l border-[#29295c]'>
                        {
                            tags && tags.map(tag => <KeywordButton content={tag?.text}></KeywordButton>)
                        }


                        <KeywordButton content='Node'></KeywordButton>
                        <KeywordButton content='Redux'></KeywordButton>
                        <KeywordButton content='JavaScript'></KeywordButton>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;