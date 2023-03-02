import React from 'react';
import { FaSmile } from 'react-icons/fa';
import user from '../../../Assets/tysef.png';

const About = () => {
    return (
        <div className='md:flex justify-around items-center my-24 pt-32' id='About'>
            <div className='w-full md:w-1/2'>
                <div className='h-[250px] w-[250px] md:h-[500px] md:w-[500px] rounded-full overflow-hidden mx-auto relative' >
                    {/* <div className='md:h-[500px] md:w-[500px] rounded-full  overflow-hidden  absolute top-0 left-0 text-center animate-spin'></div> */}
                    <div className='w-[95%] h-[95%] bg-second   absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-0  rounded-full' ></div>
                    <img src={user} className='mx-auto w-full h-full z-10 absolute' alt="" />
                </div>
            </div>
            <div className='w-full md:w-1/2 my-10 md:my-0'>

                <div className='flex items-center text-xl w-[150px] rounded p-2 font-bold text-second bg-sec-bg'>
                    <FaSmile></FaSmile>
                    <h2 className='px-2'> About Me</h2>
                </div>
                <h2 className='text-[48px] font-bold'>TYSEF FOSTER </h2>
                <div>
                    <p className='text-[18px] my-6'>👋 I am a senior software engineer named Tysef Foster with extensive full-stack development experience across various technologies. My experience spans from developing applications using an agile model to fixing bugs and data integrity issues. </p>
                    <p className='text-[18px] my-2'>👨‍💻 I have worked extensively with .NET Framework, Angular, React, VueJS, and other web development technologies. I am also proficient in SQL server, Azure Cloud, AWS, and Google Cloud. I have experience in designing and implementing the frontend and backend of web applications, developing new features and refining existing ones. </p>
                    <p className='text-[18px] my-2'>🎓 I have extensive experience in developing applications using the MVC design pattern and GUI web development technologies such as Master Pages, AJAX Controls, JQuery, CSS, Angular, and Kendo UI. Additionally, I have implemented REST methodology using HTTP Handlers to create Web Service replication interfaces for content transportation in XML and JSON formats. </p>
                    <p className='text-[18px] my-2'>💡 I am skilled in performing integration tests, unit tests, stress tests, and regression tests with improved debugging standards. I have used GIT Repository with VS extensions for version control and source code maintenance needs. Additionally, I have provided technical support, documented user manuals, and performed NUnit testing for system, automated, and end-end testing.</p>
                    <p className='text-[18px] my-6'>🚀 I have a bachelor's degree in computer science and have been in the software development field for several years. I am a quick learner, excellent communicator, and always eager to take on new challenges.</p>
                </div>
            </div>
        </div>
    );
};

export default About;