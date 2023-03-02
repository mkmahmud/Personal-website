import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div  className='bg-[#14142a] py-4 flex justify-center space-x-4'>
            <Link> <FaGithub></FaGithub> </Link>
            <Link> <FaFacebook></FaFacebook> </Link>
            <Link> <FaLinkedin></FaLinkedin> </Link>
            <Link> <FaGithub></FaGithub> </Link>
        </div>
    );
};

export default Footer;