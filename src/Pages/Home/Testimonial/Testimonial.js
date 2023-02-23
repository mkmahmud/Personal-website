import React from 'react';
import { FaComment } from 'react-icons/fa';
import quote from '../../../Assets/icons/Quotes.png';
import userImg from '../../../Assets/user.png';

const Testimonial = () => {
    return (
        <div className='my-24'>
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
                <div className='hidden md:block md:flex text-second'>
                    <div className='flex items-center px-4 border-4 border-sec-bg bg-sec-bg  rounded-xl mx-2'>

                        <button className=''> {`<`} </button>
                    </div>
                    <div className='flex items-center p-4 border-4 border-sec-bg  rounded-xl mx-2'>

                        <button className=''> {`>`} </button>
                    </div>
                </div>
            </div>
            <div className='md:flex'>
                <div className='md:w-[500px] mx-2 my-4 border-2 border-[#14142a] p-[30px] rounded-xl'>
                    <img src={quote} className='py-[12px]' alt="" />
                    <p className='text-[#ffffff8a]'>O Washington está sempre estudando e aprendendo, buscando aprimorar aquilo que faz. Esse é sua melhor qualidade. Está sempre em busca de seus objetivos, com foco e organização. Além disso, tecnicamente, no que se propõe a fazer, faz bem feito. Sempre!</p>
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
                    <p className='text-[#ffffff8a]'>O Washington está sempre estudando e aprendendo, buscando aprimorar aquilo que faz. Esse é sua melhor qualidade. Está sempre em busca de seus objetivos, com foco e organização. Além disso, tecnicamente, no que se propõe a fazer, faz bem feito. Sempre!</p>
                    <div className='flex items-center space-x-2 my-4'>
                        <img src={userImg} className='h-16 w-16 rounded-full' alt="" />
                        <div>
                            <h2 className='text-[20px] font-semibold'>Romário Lima</h2>
                            <h2 className='text-[16px] font-semibold  text-second'>CEO</h2>
                        </div>
                    </div>
                </div>
                <div className='md:w-[500px] mx-2 my-4 border-2 border-[#14142a] p-[30px] rounded-xl'>
                    <img src={quote} className='py-[12px]' alt="" />
                    <p className='text-[#ffffff8a]'>O Washington está sempre estudando e aprendendo, buscando aprimorar aquilo que faz. Esse é sua melhor qualidade. Está sempre em busca de seus objetivos, com foco e organização. Além disso, tecnicamente, no que se propõe a fazer, faz bem feito. Sempre!</p>
                    <div className='flex items-center space-x-2 my-4'>
                        <img src={userImg} className='h-16 w-16 rounded-full' alt="" />
                        <div>
                            <h2 className='text-[20px] font-semibold'>Romário Lima</h2>
                            <h2 className='text-[16px] font-semibold  text-second'>CEO</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;