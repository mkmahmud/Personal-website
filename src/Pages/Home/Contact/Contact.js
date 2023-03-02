import React, { useReducer, useState } from 'react';
import { FaContao, FaCopy, FaMailBulk, FaTelegram } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';


const notify = () => toast.success('I will notify shortly.');


const initialState = {
    name: '',
    email: ''
};

function reducer(state, action) {
    switch (action.type) {
        case 'setField':
            return { ...state, [action.field]: action.value };
        case 'reset':
            return initialState;
        default:
            throw new Error();
    }
}


const Contact = () => {



    const [state, dispatch] = useReducer(reducer, initialState);

    const handleInputChange = event => {
        dispatch({
            type: 'setField',
            field: event.target.name,
            value: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();

        fetch('https://new-server-mahmudulmk4-gmailcom.vercel.app/message', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(state)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    notify();
                    dispatch({ type: 'reset' });
                }
            })


    };

    console.log(state)

    return (
        <div className='my-24' id='Contact'>
            <div className='md:flex justify-center items-center'>
                <div >
                    <div className='flex mx-auto  items-center text-xl w-[150px] rounded p-2 font-bold text-second bg-sec-bg'>
                        <span className='text-[20px'> <FaMailBulk></FaMailBulk> </span>
                        <h2 className='px-2 '>Contact</h2>
                    </div>
                    <div>
                        <h1 className='text-5xl font-bold py-4'>Let's Talk</h1>
                    </div>
                </div>
            </div>
        

            <div className='mx-auto w-full '>
                <form className='text-center w-[360px] md:w-[500px] text-text mx-auto ' onSubmit={handleSubmit}>
                    <div className='my-4 '>
                        <p className='py-2.5'>Name:</p>
                        <input required type="text" placeholder='Name' value={state.name} onChange={handleInputChange} className='bg-sec-bg border border-second h-[41px] rounded-lg w-[291px] md:w-[371px] outline-0 px-4' name="name" id="" />
                    </div>
                    <div className='my-4'>
                        <p className='py-2.5'>Email:</p>
                        <input type="text" placeholder='Email' required value={state.email} onChange={handleInputChange} className='bg-sec-bg border border-second h-[41px] rounded-lg w-[291px] md:w-[371px] outline-0 px-4' name="email" id="" />
                    </div>
                    <div className='my-4'>
                        <p className='py-2.5'>Message:</p>
                        <textarea maxlength="200" placeholder='Message' required name="message" value={state.message} onChange={handleInputChange} className='bg-sec-bg border border-second h-[141px] rounded-lg w-[291px] md:w-[371px] outline-0 px-4' id="" cols="30" rows="20"></textarea>
                    </div>
                    <button type='submit' className='bg-second px-3.5 py-2.5 rounded-lg text-sm text-white'>Submit Message</button>
                </form>
            </div>
            <Toaster position="bottom-center" />
        </div>
    );
};

export default Contact;