import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css'

const Navbar = () => {

    // Mobile Navbar Status
    const [navbarStatus, setnavbarStatus] = useState(false)

    const menus = [{id:1, name:'Home'}, {id:2, name:'About'},{id:3, name:'Blog'},{id:4, name:'Skills'}, {id:5, name:'Contact'}]

    return (
        <div className=''>
            <div className='hidden md:block bg-sec-bg rounded-lg my-4 md:flex justify-between items-center '>
                <Link to='/'>  <img src={logo} className='px-4 py-2 ' alt="" /></Link>
                <ul className='md:flex '>
                    {
                        menus.map(menu => <li key={menu.id} className='mx-4 text-sec-text'><Link to={`/${menu.name}`}>{menu.name}</Link></li>)
                    }
                </ul>
            </div>
            {
                navbarStatus ?
                    <div className='md:hidden  z-20  h-screen w-full  top-0 left-0 flex justify-between items-center fixed bg-sec-bg p-5 -ml-[00%]'>
                        <div>
                            <ul>
                                {
                                    menus.map(menu => <li key={menu.id} className='my-4 text-sec-text'><Link to={`/${menu.name}`}>{menu.name}</Link></li>)
                                }
                            </ul>
                        </div>
                    </div>
                    :
                    ''
            }
            {
                navbarStatus
                    ? <FontAwesomeIcon onClick={() => { setnavbarStatus(!navbarStatus) }} className='navanimation-right z-20 md:hidden  fixed text-red-400 top-[48vh] text-3xl right-0' icon="fa-arrow-left" />
                    :
                    <FontAwesomeIcon onClick={() => { setnavbarStatus(!navbarStatus) }} className='navanimation z-20 fixed md:hidden  text-red-400 top-[48vh] text-3xl left-0' icon="fa-arrow-right" />
            }



        </div>
    );
};

export default Navbar;