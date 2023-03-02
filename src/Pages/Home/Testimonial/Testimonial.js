import React from 'react';
import { FaComment } from 'react-icons/fa';
import quote from '../../../Assets/icons/Quotes.png';
import userImg from '../../../Assets/user.png';

const Testimonial = () => {
    return (
        <div className='my-24 pt-32'>
            <div className='md:flex justify-between items-center'>
                <div >
                    <div className='flex items-center text-xl w-[150px] rounded p-2 font-bold text-second bg-sec-bg'>
                        <span className='text-[20px'> <FaComment></FaComment> </span>
                        <h2 className='px-2'>Recommendations</h2>
                    </div>
                    <div>
                        <h1 className='text-5xl font-bold py-4'>Testimonial</h1>
                    </div>
                </div>
                {/* <div className='hidden md:block md:flex text-second'>
                    <div className='flex items-center px-4 border-4 border-sec-bg bg-sec-bg  rounded-xl mx-2'>

                        <button className=''> {`<`} </button>
                    </div>
                    <div className='flex items-center p-4 border-4 border-sec-bg  rounded-xl mx-2'>

                        <button className=''> {`>`} </button>
                    </div>
                </div> */}
            </div>
            <div className='md:flex'>
                <div className='md:w-[500px] mx-2 my-4 border-2 border-[#14142a] p-[30px] rounded-xl'>
                    <img src={quote} className='py-[12px]' alt="" />
                    <p className='text-[#ffffff8a]'>I highly recommend TYSEF FOSTER as a developer for any company. He is an excellent problem solver and consistently delivers high-quality work in a timely manner. His attention to detail and willingness to go the extra mile make him an asset to any team.</p>
                    <div className='flex items-center space-x-2 my-4'>
                        <img src={userImg} className='h-16 w-16 rounded-full' alt="" />
                        <div>
                            <h2 className='text-[20px] font-semibold'>Romário Lima</h2>
                            <h2 className='text-[16px] font-semibold  text-second'>CEO</h2>
                        </div>
                    </div>
                </div>
                <div className='md:w-[500px] mx-2 my-4 bg-[#14142a] p-[30px] rounded-xl'>
                    <img src={quote} className='py-[12px]' alt="" />
                    <p className='text-[#ffffff8a]'>I highly recommend TYSEF FOSTER from Price Chopper for their exceptional development skills and professionalism. Their attention to detail and dedication to delivering high-quality work was impressive. They demonstrated excellent communication and collaboration skills throughout the project, making the entire development process seamless and efficient. I would not hesitate to work with them again in the future and am confident in their ability to exceed expectations on any project they undertake.</p>
                    <div className='flex items-center space-x-2 my-4'>
                        <img src={userImg} className='h-16 w-16 rounded-full' alt="" />
                        <div>
                            <h2 className='text-[20px] font-semibold'>Jhon</h2>
                            <h2 className='text-[16px] font-semibold  text-second'>Project manager</h2>
                        </div>
                    </div>
                </div>
                <div className='md:w-[500px] mx-2 my-4 border-2 border-[#14142a] p-[30px] rounded-xl'>
                    <img src={quote} className='py-[12px]' alt="" />
                    <p className='text-[#ffffff8a]'>I would highly recommend TYSEF FOSTER to any company looking for a skilled and dedicated developer. Their ability to quickly understand our requirements and deliver high-quality solutions was truly impressive. TYSEF FOSTER is not only an excellent developer but also a great communicator and team player. Their passion for technology and commitment to excellence make them a valuable asset to any organization. It was a pleasure working with TYSEF FOSTER and I would welcome the opportunity to work with them again in the future.</p>
                    <div className='flex items-center space-x-2 my-4'>
                        <img src={userImg} className='h-16 w-16 rounded-full' alt="" />
                        <div>
                            <h2 className='text-[20px] font-semibold'>Scott Herrera</h2>
                            <h2 className='text-[16px] font-semibold  text-second'>CEO</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;