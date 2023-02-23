import React from 'react';
import { BsFillBriefcaseFill } from 'react-icons/bs';

const Experience = () => {
    return (
        <div className='my-24'>
            <div className='md:flex justify-center items-center'>
                <div >
                    <div className='flex mx-auto  items-center text-xl w-[150px] rounded p-2 font-bold text-second bg-sec-bg'>
                        <span className='text-[20px'><BsFillBriefcaseFill></BsFillBriefcaseFill></span>
                        <h2 className='px-2 '>Experience</h2>
                    </div>
                    <div>
                        <h1 className='text-5xl font-bold py-4'>Trajectory until here</h1>
                    </div>
                </div>
            </div>
            <div className='md:flex w-full text-left md:text-center my-20' >
                <div className='w-full md:w-1/2'>
                    <h2 className='text-[32px] font-bold'>Professional Experience </h2>
                    <div className='md:mt-24'>
                        <div className='py-4 px-6 my-[32px] bg-[#14142a] md:w-[580px] rounded-lg text-left'>
                            <h2 className='text-[20px] font-bold '>Desenvolvedor Front-end na Ensinio</h2>
                            <p className='py-4 text-[#ffffff8a]'>Desenvolvimento de features na aplicação principal e site. com React Js e Typescript, além do auxíllio de outras tecnologias como Next, Styled Components e padrões de arquitetura.</p>
                            <div className='flex justify-between text-[18px] py-4 text-second'>
                                <strong>1 ano e 7 meses</strong>
                                <span>Abril/2021 · Atualmente</span>
                            </div>
                        </div>
                        <div className='py-4 px-6 my-[32px] border-4 border-[#14142a] md:w-[580px] rounded-lg text-left'>
                            <h2 className='text-[20px] font-bold '>Desenvolvedor Front-end na Ensinio</h2>
                            <p className='py-4 text-[#ffffff8a]'>Desenvolvimento de features na aplicação principal e site. com React Js e Typescript, além do auxíllio de outras tecnologias como Next, Styled Components e padrões de arquitetura.</p>
                            <div className='flex justify-between text-[18px] py-4 text-second'>
                                <strong>1 ano e 7 meses</strong>
                                <span>Abril/2021 · Atualmente</span>
                            </div>
                        </div>
                        <div className='py-4 px-6 my-[32px] border-4 border-[#14142a] md:w-[580px] rounded-lg text-left'>
                            <h2 className='text-[20px] font-bold '>Desenvolvedor Front-end na Ensinio</h2>
                            <p className='py-4 text-[#ffffff8a]'>Desenvolvimento de features na aplicação principal e site. com React Js e Typescript, além do auxíllio de outras tecnologias como Next, Styled Components e padrões de arquitetura.</p>
                            <div className='flex justify-between text-[18px] py-4 text-second'>
                                <strong>1 ano e 7 meses</strong>
                                <span>Abril/2021 · Atualmente</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    <h2 className='text-[32px] font-bold'>Educational Experience </h2>
                    <div className='md:mt-24'>
                        <div className='py-4 px-6 my-[32px] bg-[#14142a] md:w-[580px] rounded-lg text-left'>
                            <h2 className='text-[20px] font-bold '>University</h2>
                            <p className='py-4 text-[#ffffff8a]'>Desenvolvimento de features na aplicação principal e site. com React Js e Typescript, além do auxíllio de outras tecnologias como Next, Styled Components e padrões de arquitetura.</p>
                            <div className='flex justify-between text-[18px] py-4 text-second'>
                                <strong>Bachelor of computer science</strong>
                                <span>2023-2023</span>
                            </div>
                        </div>
                        <div className='py-4 px-6 my-[32px] border-4 border-[#14142a] md:w-[580px] rounded-lg text-left'>
                            <h2 className='text-[20px] font-bold '>University</h2>
                            <p className='py-4 text-[#ffffff8a]'>Desenvolvimento de features na aplicação principal e site. com React Js e Typescript, além do auxíllio de outras tecnologias como Next, Styled Components e padrões de arquitetura.</p>
                            <div className='flex justify-between text-[18px] py-4 text-second'>
                                <strong>Bachelor of computer science</strong>
                                <span>2023-2023</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;