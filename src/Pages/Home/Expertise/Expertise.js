import React from 'react';
import { FaCode, FaDatabase, FaDev } from 'react-icons/fa';
import SingelExperise from './SingelExperise/SingelExperise';

const Expertise = () => {

    const myExpertise = [
        {id: 3, subHead:'Database', icon: <FaDatabase className='mx-auto'></FaDatabase>, name: 'Backend'},
        {id: 2, subHead:'Web development', icon: <FaCode className='mx-auto'></FaCode>, name: 'Full-Stack', bg:true},
        {id: 1, subHead:'DevOps', icon: <FaDev className='mx-auto'></FaDev>, name: 'Deployment'}
    ]

    
    return (
        <div className='expertise border-b-4 border-t-4 border-sec-bg py-20 mt-24 mb-5'>
            <div className='w-full md:w-1/2 mx-auto md:flex justify-center md:space-x-10'>
                {
                    myExpertise.map(expertise => <SingelExperise key={expertise.id} data={expertise}></SingelExperise>)
                }
            </div>
            {/* <div className='hidden md:block bg-sec-bg md:flex justify-between rounded-xl px-4 w-1/2 mx-auto mt-10 text-center'>
                <div className='text-second w-full p-2'>
                    <p>Developer</p>
                    <h2 className='text-3xl font-bold ' >Front-End</h2>
                </div>
                <div className='text-second w-full p-2'>
                    <p>Developer</p>
                    <h2 className='text-3xl font-bold ' >Front-End</h2>
                </div>
                <div className='text-second w-full p-2'>
                    <p>Developer</p>
                    <h2 className='text-3xl font-bold ' >Front-End</h2>
                </div>
            </div> */}
        </div>
    );
};

export default Expertise;