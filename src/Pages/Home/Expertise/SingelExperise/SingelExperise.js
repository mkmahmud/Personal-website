import React from 'react';

const SingelExperise = ({data}) => {

    const { icon, name, subHead, bg} = data;

    return (
        <div className={`p-2 border mx-auto my-10  border-second  w-52  text-center rounded-lg ${bg? 'bg-sec-bg border-none' : ''}`}>
           <h2 className='text-5xl font-bold py-5 text-second'> {icon}</h2>
           <p>{subHead}</p>
           <h2 className='text-3xl font-bold py-5'> {name}</h2>
        </div>
    );
};

export default SingelExperise;