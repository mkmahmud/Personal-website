import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/TFlogo.png';
import './Navbar.css'
import { MyContext } from '../../../Context/NavContext';



const Navbar = () => {

    // Mobile Navbar Status
    const {data, setData} = useContext(MyContext);

    const handleClickScroll = (path) => {
        const element = document.getElementById(path);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
            setData(!data)
        }
    };

    


    const menus = [{ id: 1, name: 'Home' }, { id: 2, name: 'About' }, { id: 3, name: 'Projects' }, { id: 4, name: 'Skills' }, { id: 6, name: 'Experience' }, { id: 5, name: 'Contact' }]

    return (
        <div className=''>
            <div className='hidden md:block bg-sec-bg rounded-lg my-4 md:flex justify-between items-center md:z-50 md:fixed -top-2 left-0 right-0 w-full'>
                <Link to='/'>  <img src={logo} className='px-4 py-2 h-[70px] w-[93px]' alt="" /></Link>
                <ul className='md:flex '>
                    {
                        menus.map(menu => <li onClick={() => handleClickScroll(menu.name)} key={menu.id} className='mx-4 text-sec-text'><Link to={`/#${menu.name}`}>{menu.name}</Link></li>)
                    }
                </ul>
            </div>
            {
                data ?
                    <div className='md:hidden  z-20  h-screen w-full  top-0 left-0 flex justify-between items-center fixed bg-sec-bg p-5 -ml-[00%]'>
                        <div>
                            <ul>
                                {
                                    menus.map(menu => <li onClick={() => handleClickScroll(menu.name)} key={menu.id} className='my-4 text-sec-text'><Link to={`#/${menu.name}`}>{menu.name}</Link></li>)
                                }
                            </ul>
                        </div>
                    </div>
                    :
                    ''
            }
          



        </div>
    );
};

export default Navbar;