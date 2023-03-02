import React, { useContext } from 'react';
// import user from '../../../Assets/Group 32.png';
import { FaArrowRight, FaBars, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Hero.css';
import user from '../../../Assets/tysef.png';
import { MyContext } from '../../../Context/NavContext';

const Hero = () => {

    const {data, setData} = useContext(MyContext);
  

    return (
        <div className='md:flex justify-between relative md:h-[90vh] items-center overflow-hidden' id='Home'>
            <div className='static userImage md:absolute md:flex justify-center w-full items-center my-24  md:h-full '>
                <div>
                    <div className='h-[250px] w-[250px] md:h-[500px] md:w-[500px] rounded-full bg-second shadow-3xl overflow-hidden mx-auto relative' >
                        {/* <div className='md:h-[500px] md:w-[500px] rounded-full  overflow-hidden  absolute top-0 left-0 text-center animate-spin'></div> */}
                        <img src={user} className='mx-auto w-full h-full z-10 absolute' alt="" />
                    </div>
                </div>
            </div>
            <div className="hero-content z-10">

                <h2 className='text-second text-xl font-bold py-10'>👋 Greetings</h2>
                <h1 className='text-[52px] font-bold leading-tight'>TYSEF  <br />FOSTER</h1>
                <p className='text-sec-text py-5'>Full-Stack Developer · Back-end Specialized</p>
                <div className="absolute top-0 py-5 w-full justify-between md:static md:justify-start social flex space-x-4">
                    <div className='flex space-x-2'>
                        <a className='text-2xl text-[#84868a]' href="#_"><FaGithub></FaGithub></a>
                        <a className='text-2xl text-[#84868a]' href="#_"> <FaLinkedin></FaLinkedin></a>
                    </div>
                    <div className='md:hidden fixed top-5 right-5 z-50'>
                        <button onClick={() => setData(!data)}> <FaBars></FaBars> </button>
                    </div>
                </div>
            </div>
            <div className="hero-links z-10">
                <button className='flex space-x-2 items-center resumeButton text-second font-bold p-2 text-xl'><Link to='/resume' >Resume</Link> <span><FaArrowRight></FaArrowRight></span></button>
                {/* <button className='flex space-x-2 items-center resumeButton text-second font-bold my-2 border p-2 border-2 border-second rounded-lg'> <FaPhone></FaPhone> <Link> Call Me</Link> </button> */}
            </div>
        </div>
    );
};

export default Hero;