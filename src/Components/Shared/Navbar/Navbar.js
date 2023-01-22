import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo.png'

const Navbar = () => {

    const menus = ['Home', 'About', 'Blog', 'Skills', 'Contact']

    return (
        <div className='bg-sec-bg rounded-lg my-4 md:flex justify-between items-center '>
           <img src={logo} className='px-4 py-2 '  alt="" />
           <ul className='md:flex '>
              {
                menus.map(menu => <li className='mx-4 text-sec-text'><Link>{menu}</Link></li>)
              }
           </ul>
        </div>
    );
};

export default Navbar;